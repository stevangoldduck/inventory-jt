<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\ProductStock;
use App\RequestStock;
use App\RequestStockDetail;
use Illuminate\Http\Request;
use Str;

class RequestStockController extends Controller
{
    public function index()
    {
        $data = RequestStock::with(['details','details.product'])->where('status','!=','fulfilled')->get();
        return response()->json($data,200);
    }

    public function store(Request $request)
    {
        //return response()->json(['data' => $request->detail], 200);
        $parentRSO = new RequestStock();
        $parentRSO->rsf_number = strtoupper(Str::random(8))."-".date('Y');
        $parentRSO->prepared_by = 1;
        $parentRSO->remark = $request->remark;
        $parentRSO->timestamps = true;
        $parentRSO->save();

        foreach($request->detail as $item)
        {
            if($item['product_id'] != "")
            {
                $detail = new RequestStockDetail();
                $detail->rs_id = $parentRSO->id;
                $detail->product_id = $item['product_id'];
                $detail->qty = $item['qty'];
                $detail->save();
            }
        }

        return response()->json(['message' => 'Request Stock created'],200);
    }

    public function transfer(Request $request)
    {
        $RSO = RequestStock::findOrFail($request->rs_id);
        $RSO->status = 'sent';
        $RSO->save();

        return response()->json(['is_success' => true, 'messages' => 'Request Stock sent to store'],200);
    }

    public function receive(Request $request)
    {
        $RSO = RequestStock::findOrFail($request->rs_id);
        $RSO->status = 'fulfilled';
        $RSO->save();

        $RSD = RequestStockDetail::where('rs_id',$request->rs_id)->get();
        foreach($RSD as $item)
        {
            $PS = ProductStock::where('product_id',$item->product_id)->where('location',1)->first();
            $PS->qty_stock = $PS->qty_stock + $item->qty;
            $PS->save();

            $PSW = ProductStock::where('product_id',$item->product_id)->where('location',2)->first();
            $PSW->qty_stock = $PSW->qty_stock - $item->qty;
            $PSW->save();
        }

        return response()->json(['is_success' => true, 'messages' => 'All product received in store'],200);
    }
}
