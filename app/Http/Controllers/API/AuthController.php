<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Validator;
use Auth;

class AuthController extends Controller
{
    public $successStatus = 200;

    public function login(Request $req)
    {
        if(Auth::attempt(['email' => $req->email, 'password' => $req->password]))
        {
            $user = Auth::user();
            $success['token'] = $user->createToken('JayaTimur')->accessToken;
            $success['id'] = $user->id;
            $success['name'] = $user->name;
            $success['email'] = $user->email;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else
        {
            return response()->json(['message' => 'Unauthorised'], 401);
        }

    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);}
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('AppName')->accessToken;
        return response()->json(['success'=>$success], $this->successStatus);
    }

    public function getCurrentUser() {
        $user = Auth::user();
        return response()->json(['success' => $user,'token'=> $user->accessToken], $this->successStatus);
    }
}
