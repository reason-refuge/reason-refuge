<?php

class Stocks extends Controller
{
    private $stockModel;

    public function __construct()
    {
        $this->stockModel = $this->model('Stock');
    }
}
