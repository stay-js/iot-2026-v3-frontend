<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use App\Http\Resources\TypeResource;
use App\Models\Type;
use Illuminate\Http\Resources\Json\JsonResource;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResource
    {
        return TypeResource::collection(Type::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTypeRequest $request): JsonResource
    {
        $type = Type::create($request->validated());

        return new TypeResource($type);
    }

    /**
     * Display the specified resource.
     */
    public function show(Type $type): JsonResource
    {
        return new TypeResource($type);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTypeRequest $request, Type $type): JsonResource
    {
        $type->update($request->validated());

        return new TypeResource($type);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Type $type)
    {
        $type->delete();

        return response()->noContent();
    }
}
