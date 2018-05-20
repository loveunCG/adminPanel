<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        $permision = [];
        $perms = $this->perms()->get();

        if (isset($perms[0])) {
            foreach ($perms as $key => $perm) {
                $permision[] = ['id' => $perm->id, 'name' => $perm->name, 'language' => $perm->name];
            }
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'display_name' => $this->display_name,
            'description' => $this->description,
            'permission' => $permision,
            'created_at' => $this->created_at->format('Y-m-d h:i:s'),
        ];
    }
}
