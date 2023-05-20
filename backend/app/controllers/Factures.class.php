<?php

class Factures extends Controller
{
    private $factureModel;

    public function __construct()
    {
        $this->factureModel = $this->model('Facture');
    }
    public function getAllFacture($id_user)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $facture = $this->factureModel->getAllFacture($id_user);
        if ($facture) {
            echo json_encode(
                array(
                    'message' => 'Factures Issets',
                    'result' => $facture
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Facture')
            );
        }
    }
    public function getFactureNonArchiver($id_user)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $facture = $this->factureModel->getFactureNonArchiver($id_user);
        if ($facture) {
            echo json_encode(
                array(
                    'message' => 'Factures Issets',
                    'result' => $facture
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Facture')
            );
        }
    }
    public function archivation($id_facture, $achivationControl)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        if ($achivationControl == 'archiver') {
            $achivationControl = 1;
        }
        if ($achivationControl == 'desArchiver') {
            $achivationControl = 0;
        }

        $result = $this->factureModel->archivation($id_facture, $achivationControl);
        if ($result) {
            echo json_encode(
                array(
                    'message' => 'Success'
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Error')
            );
        }
    }
    public function deleteFacture($id_facture)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $result = $this->factureModel->deleteFacture($id_facture);
        if ($result) {
            echo json_encode(
                array(
                    'message' => 'Facture Deleted'
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Facture')
            );
        }
    }
}
