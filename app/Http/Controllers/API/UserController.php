<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public $successStatus = 200;

    public function getUser()
    {
        $data = User::all();
        return response()->json(['list_user' => $data], 200);
    }

    public function postUser(Request $req)
    {
        $validate = Validator::make($req->all(),
        [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required'
        ]);

        if($validate->fails())
        {
            return response()->json($validate->messages(), 200);
        }
    }
}
