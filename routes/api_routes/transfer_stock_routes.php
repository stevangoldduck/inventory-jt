<?php

Route::post('transfer-stock','API\RequestStockController@transfer')->name('transfer-stock.transfer');

Route::post('receive-stock','API\RequestStockController@receive')->name('transfer-stock.receive');
