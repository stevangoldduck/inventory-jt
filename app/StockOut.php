<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockOut extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'stock_out_form';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id','form_number','remark'];

    public function details()
    {
        return $this->hasMany('App\StockOutDetail','sof_id','id');
    }
}
