<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\ProductStock;
use App\StockIn;
use Validator;
use Illuminate\Http\Request;

class StockInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $validator = Validator::make($request->all(),[
            'product_id' => 'required',
            'qty' => 'required'
        ],
        [
            'product_id.required' => 'Please select a product'
        ]);

        if($validator->fails())
        {
            return response()->json(['is_success' => false,'messages' => $validator->messages()], 200);
        }

        $stockin = ProductStock::where('product_id',$request->product_id)->where('location',2)->first();
        $stockin->qty = $stockin->qty + $request->qty;
        $stockin->save();

        return response()->json(['is_success' => false,'messages' => 'Stock in success'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'product_id' => 'required',
            'qty' => 'required'
        ],
        [
            'product_id.required' => 'Please select a product'
        ]);

        if($validator->fails())
        {
            return response()->json(['is_success' => false,'messages' => $validator->messages()], 200);
        }

        $stockin = ProductStock::where('product_id',$request->product_id)->where('location',2)->first();
        $stockin->qty_stock = $stockin->qty_stock + $request->qty;
        $stockin->save();

        return response()->json(['is_success' => true,'messages' => 'Stock in success'], 200);
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
