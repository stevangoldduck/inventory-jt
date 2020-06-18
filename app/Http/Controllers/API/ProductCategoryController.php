<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Product;
use App\ProductCategory;

use Illuminate\Validation\Rule;
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
                'name' => 'required|min:3|unique:product_category'
            ]);

        if($validator->fails())
        {
            return response()->json(['is_success' => false, 'messages' => $validator->messages()],200);
        }

        $pc = new ProductCategory();
        $pc->name = $request->name;
        $pc->save();

        return response()->json(['is_success' => true, 'messages' => 'Product category created'],200);
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
                'id' => 'required',
                'name' => [
                    'required',
                    'min:3',
                    Rule::unique('product_category','name')->ignore($request->id,'id'),
                ],
            ],[
                'id.required' => 'Please select product category that you want to delete'
            ]);

        if($validator->fails())
        {
            return response()->json(['is_success' => false, 'messages' => $validator->messages()],200);
        }

        $messages = '';
        $pc = ProductCategory::find($request->id);

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

        return response()->json(['is_success' => true,'messages'=>$messages],200);

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
        if(!empty($pc))
        {
            $usedIn = Product::where('type',$id)->get();
            if(count($usedIn) > 0)
            {
                return response()->json(['is_success' => false,'messages'=>'Product category in use, cannot delete'],200);
            }

            $pc->delete();
            return response()->json(['is_success' => true,'messages'=>'Product deleted'],200);
        }
        else{
            return response()->json(['is_success' => false,'messages'=>'Product not found'],200);
        }



    }
}
