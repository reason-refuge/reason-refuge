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
    public function Delete($id)
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        if ($this->stockModel->delete($id)) {
            echo json_encode(
                array(
                    'message' => 'Produit Deleted'
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Produit Didn\'t Deleted')
            );
        }
    }
    public function getQuantiteForProduitsInStock($id_user)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $ProduitsInStock = $this->stockModel->getProduitsInStock($id_user);
        $QuantitesForProduits = [];
        for ($i=0; $i < count($ProduitsInStock); $i++) { 
            $QuantiteForProduits = $ProduitsInStock[$i]->quantite_stock;
            array_push($QuantitesForProduits,$QuantiteForProduits);
        }
        if ($QuantitesForProduits) {
            echo json_encode(
                array(
                    'message' => 'Quantites For Produits Isset',
                    'result' => $QuantitesForProduits
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Quantites For Produits Not Isset')
            );
        }
    }
}
