<?php

Route::get('get-user','API\UserController@getUser')->name('user.get-user');
Route::get('get-user/specific/{id}','API\UserController@searchUser')->name('user.search-user');
Route::post('add-user','API\UserController@postUser')->name('user.add-user');
Route::delete('delete-user','API\UserController@DeleteUser')->name('user.delete-user');
// Route::put('update-user','API\UserController@DeleteUser')->name('user.update-user');
