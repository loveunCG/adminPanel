<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use App\Http\Controllers\Auth\LoginController;

class UserController extends Controller
{
    protected $loginCtrl;

    public function __construct()
    {
        $this->loginCtrl = new LoginController();
    }

    public function get_user_info(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();
        $send_data = [];
        // if (!$auth->can(['user_manage', ''])) {
        //     return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        // }
        try {
            if ($request->has('user_id')) {
                $send_data = new UserResource(User::findOrFail($request->user_id));
            } else {
                $users = User::all();
                foreach ($users as $user) {
                    if ($auth->id == $user->id) {
                        continue;
                    }
                    $send_data[] = new UserResource($user);
                }
            }
        } catch (\Exception $exception) {
            return response()->json(['message' => 'Server Error', 'data' => $exception, 'response_code' => 0], 200);
        }

        return response()->json(['message' => 'Get user Info', 'data' => $send_data, 'response_code' => 1], 200);
    }

    public function save_user(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();
        if (!$auth->can(['user_add', 'user_edit'])) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        if (!$auth->hasRole('admin')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        try {
            if ($request->has('id')) {
                $validator = Validator::make($request->all(), [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255',
                ]);
                if ($validator->fails()) {
                    return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
                }
                $user = User::findOrFail($request->id);
                $user->name = $request->name;
                $user->email = $request->email;
                $user->save();
                $user->roles()->sync($request->role);
            } else {
                $validator = Validator::make($request->all(), [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255|unique:users',
                ]);
                if ($validator->fails()) {
                    return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
                }
                $user = new User();
                $user->name = $request->name;
                $user->email = $request->email;
                $user->password = Hash::make($request->password);
                $user->save();
                $user->roles()->sync($request->role);
            }

            return response()->json(['message' => 'User Save Successfully!', 'data' => $user, 'response_code' => 1], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => 'Server Error', 'data' => $exception, 'response_code' => 0], 200);
        }
    }

    public function delete(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();
        if (!$auth->can('user_delete')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        try {
            if ($request->has('id')) {
                $user = User::findOrFail($request->id);
                $user->delete();

                return response()->json(['message' => 'Delete Successfully!', 'data' => [], 'response_code' => 1], 200);
            } else {
                return response()->json(['message' => 'submit error!', 'data' => [], 'response_code' => 0], 200);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'data' => $exception, 'response_code' => 0], 200);
        }
    }

    public function reset_password(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();
        if (!$auth->can('user_password')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        try {
            $validator = Validator::make($request->all(), [
                'password' => 'required|string|max:255',
                'id' => 'numeric|required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
            }
            $user = User::findOrFail($request->id);
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json(['message' => 'Reset Password Successfully!', 'data' => [], 'response_code' => 1], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server error', 'data' => [], 'response_code' => 0], 200);
        }
    }

    public function change_password(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|max:255',
            'old_password' => 'required|string',
        ]);
        try {
            if ($validator->fails()) {
                return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
            }
            if (Hash::check($request->old_password, $auth->password)) {
                $auth->password = Hash::make($request->password);
                $auth->save();
            } else {
                return response()->json(['message' => 'Old Password is in correctly!', 'data' => [], 'response_code' => 0], 200);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server error', 'data' => $e, 'response_code' => 0], 200);
        }

        return response()->json(['message' => 'Your Password is reseted!', 'data' => [], 'response_code' => 1], 200);
    }

    public function profile()
    {
        $auth = JWTAuth::parseToken()->authenticate();
        try {
            return response()->json(['message' => 'Get Profie Successfully!', 'data' => $this->loginCtrl->authorizedUser($auth), 'response_code' => 1], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error!', 'data' => $e, 'response_code' => 0], 200);
        }
    }
}
