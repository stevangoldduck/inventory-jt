<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Product::all();

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
                $validator = Validator::make($request->all(),
            [
                'name' => 'required|unique:product'
            ]);

        if($validator->fails())
        {
            return response()->json($validator->messages(),200);
        }

        $pc = new Product();
        $pc->name = $request->name;
        $pc->type = $request->type;
        $pc->quantity = $request->quantity;
        $pc->price = $request->price;
        $pc->save();

        return response()->json(['message' => 'Product created'],200);
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
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|unique:product'
            ]);

        if($validator->fails())
        {
            return response()->json($validator->messages(),200);
        }

        $messages = '';
        $pc = Product::find($request->product_id);

        if(!empty($pc))
        {
            $pc->name = $request->name;
            $pc->type = $request->type;
            $pc->quantity = $request->quantity;
            $pc->price = $request->price;
            $pc->save();

            $messages = 'Product updated';
        }
        else
        {
            $messages = 'Product ID Not found';
        }

        return response()->json(['message'=>$messages],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pc = Product::find($id);
        $pc->delete();

        return response()->json(['message'=>'Product deleted'],200);
    }
}