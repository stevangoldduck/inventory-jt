<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransferStock extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transfer_stock';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['prepared_by','do_number','status','remark','request_stock_form_id'];

    public function details()
    {
        return $this->hasMany('App\TransferStockDetail','tf_id','id');
    }
}
