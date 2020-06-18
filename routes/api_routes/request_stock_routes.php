<?php

Route::get('get-request-stock','API\RequestStockController@index')->name('request-stock.index');
Route::post('add-request-stock','API\RequestStockController@store')->name('request-stock.store');
