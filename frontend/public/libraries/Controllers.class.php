<?php

class Controller
{

    public function view($view)
    {
        require_once './views/' . $view . '.php';
        return new $view;
    }
}
