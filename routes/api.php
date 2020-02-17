<?php

use Illuminate\Http\Request;


include('api_routes/auth_routes.php');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
