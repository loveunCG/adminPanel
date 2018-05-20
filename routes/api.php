<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
Route::post('login', 'Auth\LoginController@authenticate');
Route::post('register', 'Auth\RegisterController@register');

Route::group(['middleware' => ['auth.jwt'], 'prefix' => 'user', 'as' => 'user.'], function () {
    Route::get('getUserInfo', 'Admin\UserController@get_user_info');
    Route::post('save', 'Admin\UserController@save_user');
    Route::post('resetPassword', 'Admin\UserController@reset_password');
    Route::post('delete', 'Admin\UserController@delete');
    Route::get('profile', 'Admin\UserController@profile');
    Route::post('changePassword', 'Admin\UserController@change_password');
});

Route::group(['middleware' => ['auth.jwt'], 'prefix' => 'role', 'as' => 'role.'], function () {
    Route::get('getRole', 'Admin\RoleController@get_role_info');
    Route::post('save', 'Admin\RoleController@store');
    Route::post('delete', 'Admin\RoleController@delete');
});

Route::group(['middleware' => ['auth.jwt'], 'prefix' => 'permission', 'as' => 'permission.'], function () {
    Route::get('getPermission', 'Admin\PermissionController@getPermissions');
    Route::post('save', 'Admin\PermissionController@store');
    Route::post('delete', 'Admin\PermissionController@delete');
});
