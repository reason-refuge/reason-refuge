<?php

class Achats extends Controller
 {

    private $achatModel;

    public function __construct()
 {
        $this->achatModel = $this->model( 'Achat' );
    }
}