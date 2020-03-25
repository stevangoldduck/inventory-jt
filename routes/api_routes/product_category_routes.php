<?php

Route::get('get-product-category','API\ProductCategoryController@index')->name('product.category.get');
Route::post('add-product-category','API\ProductCategoryController@store')->name('product.category.store');
Route::put('update-product-category','API\ProductCategoryController@update')->name('product.category.update');
Route::delete('delete-product-category/{id}','API\ProductCategoryController@destroy')->name('product.category.delete');
