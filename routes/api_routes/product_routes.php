<?php

Route::get('get-product','API\ProductController@index')->name('product.get');
Route::get('get-product-by-id','API\ProductController@edit')->name('product.show');
Route::post('add-product','API\ProductController@store')->name('product.store');
Route::put('update-product','API\ProductController@update')->name('product.update');
Route::delete('delete-product','API\ProductController@destroy')->name('product.delete');
