<?php

use Illuminate\Http\Request;


include('api_routes/auth_routes.php');

Route::group(['middleware' => 'auth:api'], function(){
    include('api_routes/user_routes.php');
    include('api_routes/product_category_routes.php');
    include('api_routes/product_routes.php');
});
