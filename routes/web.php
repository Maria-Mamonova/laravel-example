<?php

Route::get('/', function () {
    return view('index');
})->name('index');
Route::get('/about', function () {
    return view('about');
})->name('about');
Route::get('/info', function () {
    return view('info');
})->name('info');
Route::get('/price', function () {
    return view('price');
})->name('price');
Route::post('/contact/submit', 'ContactController@submmit')->name('contact-form');





