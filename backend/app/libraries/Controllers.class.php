<?php

class Controller
{

    public function model($model)
    {
        require_once './models/' . $model . '.class.php';
        return new $model;
    }
}
