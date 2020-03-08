<?php

use Illuminate\Http\Request;


include('api_routes/auth_routes.php');

Route::group(['middleware' => 'auth:api'], function(){
    include('api_routes/user_routes.php');
});
