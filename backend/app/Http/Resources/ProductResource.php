<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'manufacturer' => $this->manufacturer,
            'product_name' => $this->product_name,
            'stock' => $this->stock,
            'price' => $this->price,
            'type' => new TypeResource($this->type),
        ];
    }
}
