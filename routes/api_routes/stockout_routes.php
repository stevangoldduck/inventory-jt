<?php

Route::post('add-stock-out','API\StockOutController@store')->name('stock-out.store');
Route::get('get-stock-out','API\StockOutController@index')->name('stock-out.index');
