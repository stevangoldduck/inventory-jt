<?php

use Illuminate\Http\Request;


include('api_routes/auth_routes.php');

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('getUser','API\AuthController@getCurrentUser');
});
