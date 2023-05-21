<?php

class Alertes extends Controller
{
    private $alerteModel;

    public function __construct()
    {
        $this->alerteModel = $this->model('Alerte');
    }
}
