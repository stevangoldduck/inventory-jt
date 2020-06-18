<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestStock extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'request_stock_form';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['rsf_number','prepared_by','status','remark'];

    public function details()
    {
        return $this->hasMany('App\RequestStockDetail','rs_id','id');
    }
}
