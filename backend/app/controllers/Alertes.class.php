<?php

class Alertes extends Controller
{
    private $alerteModel;

    public function __construct()
    {
        $this->alerteModel = $this->model('Alerte');
    }

    public function getAlertesByUserId($id_user)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $alerte = $this->alerteModel->getAlertesByUserId($id_user);
        if ($alerte) {
            echo json_encode(
                array(
                    'message' => 'Alertes Issets',
                    'result' => $alerte
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No Alerte')
            );
        }
    }
    public function addConfigAlerte()
    {
        
    }
    public function deleteAlerte($id)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $result = $this->alerteModel->deleteAlerte($id);
        if ($result) {
            echo json_encode(
                array(
                    'message' => 'Alerte Deleted',
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Alerte Not Deleted')
            );
        }
    }
    public function addAlerte()
    {
        
    }
}
