<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Product;
use App\ProductStock;
use App\StockOutDetail;
use App\TransferStockDetail;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
        $data = Product::with(['type' => function ($query) {
            $query->select('id', 'name');
        }])->get();

        return response()->json($data, 200);
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
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|min:5|unique:product',
                'type' => 'required',
                'price' => 'required',
                'qty' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['is_success' => false, 'messages' => $validator->messages()], 200);
        }

        $pc = new Product();
        $pc->name = $request->name;
        $pc->type = $request->type;
        $pc->price = $request->price;
        $pc->save();

        //Auto create product stock in warehouse and store
        //For store
        $ps = new ProductStock();
        $ps->product_id = $pc->id;
        $ps->location = 1;
        $ps->qty_stock = 0;
        $ps->save();

        //For warehouse
        $ps = new ProductStock();
        $ps->product_id = $pc->id;
        $ps->location = 2;
        $ps->qty_stock = $request->qty;
        $ps->save();

        return response()->json(['is_success' => true, 'message' => 'Product created'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $product = Product::where('id', $request->id)->first();

        if (empty($product)) {
            return response()->json('Product not found', 404);
        }

        return response()->json(['data' => $product], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $product = Product::where('id', $request->id)->first();

        if (empty($product)) {
            return response()->json('Product not found', 404);
        }

        return response()->json(['data' => $product], 200);
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
        $validator = Validator::make(
            $request->all(),
            [
                'name' =>  [
                    'required',
                    Rule::unique('product', 'name')->ignore($request->id, 'id'),
                ],
            ]
        );

        if ($validator->fails()) {
            return response()->json(['is_success' => false, 'messages' => $validator->messages()], 200);
        }

        $messages = '';
        $pc = Product::find($request->id);

        if (!empty($pc)) {
            $pc->name = $request->name;
            $request->type ? $pc->type = $request->type : '';
            $request->price ? $pc->price = $request->price : '';
            $pc->save();

            $messages = 'Product updated';
        } else {
            $messages = 'Product ID Not found';
        }

        return response()->json(['is_success' => true,'messages' => $messages], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $pc = Product::find($request->id);
        //Check product in use or not

        $checkProduct = StockOutDetail::where('product_id', $request->id)->first();
        $checkProductScnd = TransferStockDetail::where('product_id', $request->id)->first();
        if (!empty($checkProduct) || !empty($checkProductScnd))
            return response()->json(['is_success' => false, 'message' => 'Product in use'], 200);

        if (!empty($pc)) {
            $pc->delete();

            //Delete in product stock
            $ps = ProductStock::where('product_id',$request->id)->delete();

            return response()->json(['is_success' => true, 'message' => 'Product deleted'], 200);
        } else {
            return response()->json(['is_success' => false, 'message' => 'Product not found'], 404);
        }
    }
}
