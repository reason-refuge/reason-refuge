<?php

class Alerte
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
}
