<?php

class Produits extends Controller
 {

    private $produitModel;

    public function __construct()
 {
        $this->produitModel = $this->model( 'Produit' );
    }

    public function AddProduit()
 {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Content-Type: application/json' );
        header( 'Access-Control-Allow-Method: POST' );
        header( 'Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation' );

        $data = json_decode( file_get_contents( 'php://input' ) );
        $nom = $data->nom;
        $quantité = $data->quantité;
        $prix = $data->prix;

        if ( $this->produitModel->AddProduit( $nom, $quantité, $prix ) ) {
            echo json_encode(
                array(
                    'message' => 'Produit Added'
                )
            );

        } else {
            echo json_encode(
                array(
                    'message' => 'Produit Not Added'
                )
            );
        }
    }
    public function GetProduits()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $produit = $this->produitModel->getProduits();
        if ($produit) {
            echo json_encode(
                array(
                    'message' => 'Produits Issets',
                    'result' => $produit
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Produit')
            );
        }
    }
    public function GetProduitsForUser()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $produit = $this->produitModel->getProduitsForUser();
        if ($produit) {
            echo json_encode(
                array(
                    'message' => 'Produits Issets',
                    'result' => $produit
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Produit')
            );
        }
    }
    public function GetProduitsForFournisseur()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $produit = $this->produitModel->getProduitsForFournisseur();
        if ($produit) {
            echo json_encode(
                array(
                    'message' => 'Produits Issets',
                    'result' => $produit
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Produit')
            );
        }
    }
    public function  SearchProduitsById($id){
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $produits = $this->produitModel->getProduitById($id);
        if ($produits) {
            echo json_encode(
                array(
                    'message' => 'Produit Isset',
                    'result' => $produits
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Produit')
            );
        }
    }
    public function UpdateProduit($id)
    {

        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: PUT');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));

        $name = $data->nom;
        if ($name != '' && !empty($name)) {
            $name = 'nom_produit = "' . $name . '"';
            $returnName = $this->produitModel->Update($name,$id);
        } else {
            $returnName = false;
        }

        $quantité = $data->quantité;
        if ($quantité != '' && !empty($quantité)) {
            $quantité = 'quantite_produit = "' . $quantité . '"';
            $returnQuantité = $this->produitModel->Update($quantité,$id);
        } else {
            $returnQuantité = false;
        }

        $price = $data->prix;
        if ($price != '' && !empty($price)) {
            $price = 'price_produit= "' . $price . '"';
            $returnPrice = $this->produitModel->Update($price,$id);
        } else {
            $returnPrice = false;
        }

        if ($returnName || $returnQuantité  || $returnPrice) {
            echo json_encode(
                array('message' => 'Produit Updated')
            );
        } else {
            echo json_encode(
                array('message' => 'Produit Not Updated')
            );
        }
    }
    public function Delete($id)
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        if ($this->produitModel->delete($id)) {
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
    public function SearchProduits($libel){
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $produits = $this->produitModel->getProduitByLibel($libel);
        if ($produits) {
            echo json_encode(
                array(
                    'message' => 'Produits Issets',
                    'result' => $produits
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Produit')
            );
        }
    }
}