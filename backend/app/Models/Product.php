<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    public $timestamps = false;

    protected $fillable = [
        'manufacturer',
        'product_name',
        'type_id',
        'stock',
        'price',
    ];

    /**
     * Get the type that owns the product.
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class);
    }
}
