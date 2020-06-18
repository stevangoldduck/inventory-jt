<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransferStockDetail extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transfer_stock_detail';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['tf_id','product_id','qty'];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function product()
    {
        return $this->hasOne('App\Product','id','product_id');
    }
}
