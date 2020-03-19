<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ProductCategory;
use Validator;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ProductCategory::all();

        return response()->json($data,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
                'name' => 'required|unique:product_category'
            ]);

        if($validator->fails())
        {
            return response()->json($validator->messages(),200);
        }

        $pc = new ProductCategory();
        $pc->name = $request->name;
        $pc->save();

        return response()->json(['message' => 'Product category created'],200);
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
                'name' => 'required|unique:product_category'
            ]);

        if($validator->fails())
        {
            return response()->json($validator->messages(),200);
        }

        $messages = '';
        $pc = ProductCategory::find($request->product_category_id);

        if(!empty($pc))
        {
            $pc->name = $request->name;
            $pc->save();

            $messages = 'Product category updated';
        }
        else
        {
            $messages = 'Product category ID Not found';
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
        
        $pc = ProductCategory::find($id);
        $pc->delete();

        return response()->json(['message'=>'Product deleted'],200);
    }
}
