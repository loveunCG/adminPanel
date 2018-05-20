<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Http\Request;
use JWTAuth;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
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

        if (!$auth->can(['role_add', 'role_edit'])) {
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
                $role = Role::findOrFail($request->id);
                $role->name = $request->name;
                $role->display_name = $request->display_name;
                $role->description = $request->description;
                $role->perms()->sync([]);
                $role->save();
                if ($request->has('permission')) {
                    $permissions = $request->permission;
                    foreach ($permissions as $key => $permission) {
                        $role->attachPermission(Permission::findOrFail($permission['id']));
                    }
                }
            } else {
                $validator = Validator::make($request->all(), [
                  'name' => 'required|string|max:255||unique:roles',
                ]);
                if ($validator->fails()) {
                    return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
                }
                $role = new Role();
                $role->name = $request->name;
                $role->display_name = $request->display_name;
                $role->description = $request->description;
                $role->save();
                if ($request->has('permission')) {
                    $permissions = $request->permission;
                    foreach ($permissions as $key => $permission) {
                        $role->attachPermission(Permission::findOrFail($permission['id']));
                    }
                }
            }

            return response()->json(['message' => 'Role Save Successfully!', 'data' => $request->permission, 'response_code' => 1], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => 'Server Error', 'data' => $exception, 'response_code' => 0], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }

    public function delete(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();

        if (!$auth->can('role_delete')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        $validator = Validator::make($request->all(), [
         'id' => 'required|numeric|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => 'Submit error', 'data' => $validator->errors(), 'response_code' => 0], 200);
        }
        try {
            $role = Role::findOrFail($request->id);
            $role->perms()->sync([]);
            $role->delete();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'data' => $e, 'response_code' => 0], 200);
        }

        return response()->json(['message' => 'Delete Successfully!', 'data' => [], 'response_code' => 1], 200);
    }

    public function get_role_info(Request $request)
    {
        $auth = JWTAuth::parseToken()->authenticate();

        $roles = Role::all();
        if (!$auth->can('role_manage')) {
            return response()->json(['message' => 'This account has no Permission', 'data' => [], 'response_code' => 0], 200);
        }
        try {
            if ($request->has('id') && $request->id) {
                $role = new RoleResource(Role::findOrFail($request->id));

                return response()->json(['message' => 'Get succesfully', 'data' => $role, 'response_code' => 1], 200);
            }
            $send_role = [];
            foreach ($roles as $key => $role) {
                $send_role[] = new RoleResource($role);
            }

            return response()->json(['message' => 'Get succesfully', 'data' => $send_role, 'response_code' => 1], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'data' => $e, 'response_code' => 0], 200);
        }
    }
}
