<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product';

    protected $fillable = ['name','type','quantity','price'];

    public $timestamps = false;

    public function type()
    {
        return $this->hasOne('App\ProductCategory','id','type');
    }
}
