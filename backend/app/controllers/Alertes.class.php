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
        header('Access-Control-Allow-Method: POST');
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
    public function addAlerte($id_alerte_config)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $result = $this->alerteModel->addAlerte($id_alerte_config);
        if ($result) {
            echo json_encode(
                array(
                    'message' => 'Alerte Added'
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Alerte Added')
            );
        }
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
    public function getIdsAlerteConfig($id_condition_alerte,$id_user)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $IdsAlerteConfig = $this->alerteModel->getIdsAlerteConfig($id_condition_alerte,$id_user);
        $IdsAlerte = [];
        for ($i=0; $i < count($IdsAlerteConfig); $i++) { 
            $idAlerte = $IdsAlerteConfig[$i]->id_alerte_config;
            array_push($IdsAlerte,$idAlerte);
        }
        if ($IdsAlerte) {
            echo json_encode(
                array(
                    'message' => 'Ids Alerte Config Isset',
                    'result' => $IdsAlerte
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Ids Alerte Config Not Isset')
            );
        }
    }
    public function getValueConditionAlerte($id_user)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $ValuesConditionAlerte = $this->alerteModel->getValueConditionAlerte($id_user);
        $ValueConditionAlerte = [];
        for ($i=0; $i < count($ValuesConditionAlerte); $i++) { 
            $ValueCondition = $ValuesConditionAlerte[$i]->value_condition_alerte;
            array_push($ValueConditionAlerte,$ValueCondition);
        }
        if ($ValueConditionAlerte) {
            echo json_encode(
                array(
                    'message' => 'Value Condition Alerte Isset',
                    'result' => $ValueConditionAlerte
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Value Condition Alerte Not Isset')
            );
        }
    }
}
