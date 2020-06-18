<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\ProductStock;
use Illuminate\Http\Request;
use App\StockOut;
use App\StockOutDetail;
use Str;

class StockOutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = StockOut::with(['details','details.product'])->get();
        return response()->json($data,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $parentSO = new StockOut();
        $parentSO->form_number = strtoupper(Str::random(8))."-".date('Y');
        $parentSO->remark = $request->remark;
        $parentSO->timestamps = true;
        $parentSO->save();


        foreach($request->detail as $item)
        {
            if($item['product_id'] != "")
            {
                $checkProductStock = ProductStock::where('product_id',$item['product_id'])->where('location',1)->first();

                if($checkProductStock->qty_stock > $item['qty'])
                {
                    $detail = new StockOutDetail();
                    $detail->sof_id = $parentSO->id;
                    $detail->product_id = $item['product_id'];
                    $detail->qty = $item['qty'];
                    $detail->save();

                    $checkProductStock->qty_stock = $checkProductStock->qty_stock - $item['qty'];
                    $checkProductStock->save();
                }
            }
        }

        return response()->json(['is_success' => true, 'messages' => 'Stock Out created'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
