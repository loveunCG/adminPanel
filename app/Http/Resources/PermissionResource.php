<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PermissionResource extends JsonResource
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
        return [
          'id' => $this->id,
          'name' => $this->name,
          'display_name' => $this->display_name,
          'language' => $this->name,
          'description' => $this->description,
          'created_at' => $this->created_at->format('Y-m-d h:i:s'),
        ];
    }
}
