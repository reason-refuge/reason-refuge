<?php

class Achats extends Controller
{

    private $achatModel;

    public function __construct()
    {
        $this->achatModel = $this->model('Achat');
    }
    public function AddUserFournisseur()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents('php://input'));

        $newQuantite = $data->newQuantite;
        $id_vendeur = $data->id_vendeur;
        $id_acheteur = $data->id_acheteur;
        $quantiteAchete = $data->quantiteAchete;
        $montantTotalAchat = $data->montantTotalAchat;
        $idProduit = $data->idProduit;
        $roleVendeur = $data->roleVendeur;


        $check = $this->achatModel->checkIfProductIsset($idProduit, $id_acheteur, $id_vendeur);
        // 1 = isset | 0 = no isset

        if ($check == 1) {
            if ($this->achatModel->add($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur)) {
                if ($this->achatModel->changeQuantite($newQuantite, $idProduit)) {
                    if ($this->achatModel->changeStock($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur, $quantiteAchete,$roleVendeur)) {
                        if ($this->achatModel->addFacture($montantTotalAchat, $id_acheteur)) {
                            echo json_encode(
                                array(
                                    'message' => 'Achat Added'
                                )
                            );
                        }
                    }
                }
            } else {
                echo json_encode(
                    array(
                        'message' => 'Achat Not Added'
                    )
                );
            }
        }
        if ($check == 0) {
            if ($this->achatModel->add($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur)) {
                if ($this->achatModel->changeQuantite($newQuantite, $idProduit)) {
                    if ($this->achatModel->addStock($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur, $quantiteAchete,$roleVendeur)) {
                        if ($this->achatModel->addFacture($montantTotalAchat, $id_acheteur)) {
                            echo json_encode(
                                array(
                                    'message' => 'Achat Added'
                                )
                            );
                        }
                    }
                }
            } else {
                echo json_encode(
                    array(
                        'message' => 'Achat Not Added'
                    )
                );
            }
        }
    }
    public function AddFournisseurUser()
    {
        
    }
}
