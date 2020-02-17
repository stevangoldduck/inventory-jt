<?php

Route::post('login','API\AuthController@login')->name('api_login');
Route::post('register','API\AuthController@register')->name('api_register');
