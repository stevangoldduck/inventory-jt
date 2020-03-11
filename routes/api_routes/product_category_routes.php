<?php

Route::get('get-product-category','API\ProductCategoryController@index');
Route::post('add-product-category','API\ProductCategoryController@store');
Route::put('update-product-category','API\ProductCategoryController@update');
Route::delete('delete-product-category/{id}','API\ProductCategoryController@destroy');