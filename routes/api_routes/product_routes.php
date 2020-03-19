<?php

Route::get('get-product','API\ProductController@index');
Route::post('add-product','API\ProductController@store');
Route::put('update-product','API\ProductController@update');
Route::delete('delete-product/{id}','API\ProductController@destroy');