<?php

// Route::get('/{path?}', function () {
//     return view('index'); // or wherever your React app is bootstrapped.
// })->where('path', '.*');


//Route::view('/{path?}', 'index');

Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');


// Route::get('/{path}', function () {
//     return view('index'); // or wherever your React app is bootstrapped.
// })->where('path', '.*');
