<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'manufacturer' => 'required|string|max:45',
            'product_name' => 'required|string|max:70',
            'type_id' => 'required|exists:types,id',
            'stock' => 'required|integer|min:0',
            'price' => 'required|integer|min:0',
        ];
    }
}
