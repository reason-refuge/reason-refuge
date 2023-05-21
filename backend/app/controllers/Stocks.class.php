<?php

class Stocks extends Controller
{
    private $stockModel;

    public function __construct()
    {
        $this->stockModel = $this->model('Stock');
    }
    public function getProductInStockByIdAcheteur($id_acheteur)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $produits = $this->stockModel->getProductInStockByIdAcheteur($id_acheteur);
        if ($produits) {
            echo json_encode(
                array(
                    'message' => 'Products Isset In Stock',
                    'result' => $produits
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Pas De Produit Dans Votre Stock')
            );
        }
    }
}
