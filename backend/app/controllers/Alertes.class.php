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
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: PUT');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));

        $conditionAlert = $data->conditionAlert;
        $messageAlert = $data->messageAlert;
        $id_user = $data->id_user;
        
        $sql = "INSERT INTO `alerte_config`(`id_condition_alerte`, `message_alerte`, `id_user`) VALUES ('$conditionAlert','$messageAlert','$id_user')";
        if (isset($data->valueLimitCondition) ) {
            $valueLimitCondition = $data->valueLimitCondition;
            $sql = "INSERT INTO `alerte_config`(`id_condition_alerte`, `message_alerte`, `id_user`, `value_condition_alerte`) VALUES ('$conditionAlert','$messageAlert','$id_user','$valueLimitCondition')";
        }
        $result = $this->alerteModel->addConfigAlerte($sql);
        if ($result) {
            echo json_encode(
                array(
                    'message' => 'Condition Added',
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Condition Not Added')
            );
        }
    }
    public function addAlerte()
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
    public function getConditionAlerte()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
    
        $conditions = $this->alerteModel->getConditionAlerte();
        if ($conditions) {
            echo json_encode(
                array(
                    'message' => 'Conditions Alerte Isset',
                    'result' => $conditions
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Conditions Alerte Not Isset')
            );
        }
        
    }
    public function getConditionAlerteById($id)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
    
        $condition = $this->alerteModel->getConditionAlerteById($id);
        if ($condition) {
            echo json_encode(
                array(
                    'message' => 'Condition Alerte Isset',
                    'result' => $condition
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Condition Alerte Not Isset')
            );
        }
        
    }
}
