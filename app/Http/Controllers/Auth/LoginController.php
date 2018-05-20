<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['message' => 'Incorrect username or password. !', 'data' => null, 'response_code' => 0], 200);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['message' => 'Could not create token', 'data' => null, 'response_code' => 0], 500);
        }
        $user = User::where(['email' => $request->email])->first();
        // $user->attachRole($admin);
        return response()->json([
            'message' => 'successfully login and user is verified',
            'data' => $this->authorizedUser($user),
            'role' => isset($user->roles()->first()->name) ? $user->roles()->first()->name : '',
            'token' => $token,
            'response_code' => 1,
        ], 200);
    }

    public function authorizedUser(User $user)
    {
        $role = $user->roles()->first();
        $perms = [];
        if (isset($role->id)) {
            $perms = $role->perms()->get();
        }
        $permission = [];
        if (count($perms) > 0) {
            foreach ($perms as $key => $perm) {
                $permission[] = ['id' => $perm->id, 'name' => $perm->name];
            }
        }

        return [
          'id' => $user->id,
          'name' => $user->name,
          'email' => $user->email,
          'role' => $role,
          'permission' => $permission,
        ];
    }
}
