<?php

Route::get('get-user','API\UserController@getUser')->name('user.get-user');
Route::post('add-user','API\UserController@postUser')->name('user.add-user');
