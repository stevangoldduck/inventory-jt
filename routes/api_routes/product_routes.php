<?php

Route::get('get-product','API\ProductController@index')->name('product.get');
Route::get('get-product/{id}','API\ProductController@show')->name('product.show');
Route::post('add-product','API\ProductController@store')->name('product.store');
Route::put('update-product','API\ProductController@update')->name('product.update');
Route::delete('delete-product/{id}','API\ProductController@destroy')->name('product.delete');
