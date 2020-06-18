<?php


include('api_routes/auth_routes.php');

Route::group(['middleware' => 'auth:api'], function () {
    include('api_routes/user_routes.php');
    include('api_routes/product_category_routes.php');
    include('api_routes/product_routes.php');
    include('api_routes/stockout_routes.php');
    include('api_routes/product_stock_routes.php');
    include('api_routes/request_stock_routes.php');
    include('api_routes/stockin_routes.php');
    include('api_routes/transfer_stock_routes.php');
});
