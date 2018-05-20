<?php

namespace App\Http\Controllers\Admin;

use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use Illuminate\Support\Facades\Validator;
use JWTAuth;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();

        if (!$auth->can(['permission_edit', 'permission_add'])) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        try {
            if ($request->has('id') && $request->id) {
                $validator = Validator::make($request->all(), [
                   'name' => 'required|string|max:255',
                ]);
                if ($validator->fails()) {
                    return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
                }
                $perm = Permission::findOrFail($request->id);
                $perm->name = $request->name;
                $perm->display_name = $request->display_name;
                $perm->description = $request->description;
                $perm->save();
            } else {
                $validator = Validator::make($request->all(), [
                 'name' => 'required|string|max:255||unique:permissions',
                ]);
                if ($validator->fails()) {
                    return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
                }
                $perm = new Permission();
                $perm->name = $request->name;
                $perm->display_name = $request->display_name;
                $perm->description = $request->description;
                $perm->save();
            }

            return response()->json(['message' => 'Permission Save Successfully!', 'data' => $perm, 'response_code' => 1], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => 'Server Error', 'data' => $exception, 'response_code' => 0], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Permission $permission
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Permission $permission)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Permission $permission
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Permission $permission)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Permission   $permission
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Permission $permission
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
    }

    public function delete(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();

        if (!$auth->can('permission_delete')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        $validator = Validator::make($request->all(), [
         'id' => 'required|numeric|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
        }
        try {
            $perm = Permission::findOrFail($request->id);
            $perm->delete();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'data' => $e, 'response_code' => 0], 200);
        }

        return response()->json(['message' => 'delete Successfully!', 'data' => [], 'response_code' => 1], 200);
    }

    public function getPermissions(Request $request)
    {
        $send_data = [];
        $auth = JWTAuth::parseToken()->authenticate();

        if (!$auth->can('permission_manage')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        try {
            if ($request->has('id')) {
                $permision = Permission::findOrFail($request->id);

                return response()->json(['message' => 'get infomation successfuly', 'data' => $permision, 'response_code' => 1], 200);
            } else {
                $permissions = Permission::all();
                foreach ($permissions as $key => $permission) {
                    $send_data[] = new PermissionResource($permission);
                }

                return response()->json(['message' => 'get infomation successfuly!', 'data' => $send_data, 'response_code' => 1], 200);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'data' => null, 'response_code' => 0], 500);
        }
    }
}
