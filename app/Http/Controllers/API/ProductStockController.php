<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;

class ProductStockController extends Controller
{
    public function getProductStock(Request $req)
    {
        if($req->location == "1")
        {
            $data = Product::with(['type','stocks' => function($q){$q->where('location','1');}])->get();
        }
        else{
            $data = Product::with(['type','stocks' => function($q){$q->where('location','2');}])->get();
        }

        return response()->json($data, 200);
    }
}
