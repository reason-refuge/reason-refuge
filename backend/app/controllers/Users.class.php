<?php

class Users extends Controller
{

    private $userModel;

    public function __construct()
    {
        $this->userModel = $this->model('User');
    }

    public function TotalUsersAdminFournisseur($numero)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $Users = $this->userModel->getUsers($numero);
        $totalUser = count($Users);

        if ($totalUser == 0) {
            echo json_encode(
                array(
                    'message' => '0 User'
                )
            );
        } else {
            echo json_encode(
                array(
                    'message' => 'Users Number',
                    'result' => $totalUser
                )
            );
        }
    }

    public function GetUsersAdminFournisseur($role){
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $users = $this->userModel->getUsers($role);
        if ($users) {
            echo json_encode(
                array(
                    'message' => 'Users Issets',
                    'result' => $users
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No User')
            );
        }
    }
    public function SearchUsersAdminFournisseurById($role,$id){
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $users = $this->userModel->getUserById($role,$id);
        if ($users) {
            echo json_encode(
                array(
                    'message' => 'User Isset',
                    'result' => $users
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No User')
            );
        }
    }
    public function SearchUsersAdminFournisseurByLibel($role,$libel){
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $users = $this->userModel->getUserByLibel($role,$libel);
        if ($users) {
            echo json_encode(
                array(
                    'message' => 'Users Issets',
                    'result' => $users
                )
            );
        } else {
            echo json_encode(
                array('message' => 'No User')
            );
        }
    }

    public function register()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');


        $data = json_decode(file_get_contents('php://input'));
        $nom = $data->nom;
        $prenom = $data->prenom;
        $email = $data->email;
        $password = $data->password;
        $hashPass = password_hash($password, PASSWORD_DEFAULT);
        $adresse = $data->adresse;
        $role = $data->role;

        $issetEmail = 0;
        if ($this->userModel->getUserByEmail($email)) {
            $issetEmail = 1;
        }
        if ($issetEmail == 0) {
            if ($this->userModel->register($nom, $prenom, $email, $hashPass, $adresse, $role)) {
                echo json_encode(
                    array(
                        'message' => 'Account Added',
                        'messageEmail' => ''
                    )
                );
            }
        } else {
            echo json_encode(
                array(
                    'message' => 'Account Not Added',
                    'messageEmail' => 'Email Isset'
                )
            );
        }
    }
    public function login()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));
        $email = $data->email;
        $password = $data->password;
        $role = $data->role;

        $result = $this->userModel->login($email, $password, $role);
        $check = $result['check'];

        if ($check) {
            $row = $result['row'];
            echo json_encode(
                array(
                    'message' => 'Account Susses',
                    'result' => $row
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Didn\'t Account Susses')
            );
        }
    }
    public function Delete($id)
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        if ($this->userModel->delete($id)) {
            echo json_encode(
                array(
                    'message' => 'Account Deleted'
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Account Didn\'t Deleted')
            );
        }
    }
    public function Info($id)
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $info = $this->userModel->getInfo($id);
        if ($info) {
            echo json_encode(
                array(
                    'message' => 'Account Info',
                    'result' => $info
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Account Didn\'t Issit')
            );
        }
    }
    public function UpdateImage($id_u)
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));

        $name = $data->file;

        if ($name != '' && !empty($name)) {
            $this->userModel->updateAvatar($name, $id_u);
            echo json_encode(
                array(
                    'message' => 'Avatar Updated'
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Avatar Not Updated')
            );
        }
    }

    public function UpdateUser($id)
    {

        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: PUT');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));

        $name = $data->nom;
        if ($name != '' && !empty($name)) {
            $name = 'nom_user = "' . $name . '"';
            $returnName = $this->userModel->Update($name,$id);
        } else {
            $returnName = false;
        }

        $prenom = $data->prenom;
        if ($prenom != '' && !empty($prenom)) {
            $prenom = 'prenom_user = "' . $prenom . '"';
            $returnPrenom = $this->userModel->Update($prenom,$id);
        } else {
            $returnPrenom = false;
        }

        $adresse = $data->adresse;
        if ($adresse != '' && !empty($adresse)) {
            $adresse = 'adresse_user= "' . $adresse . '"';
            $returnAdresse = $this->userModel->Update($adresse,$id);
        } else {
            $returnAdresse = false;
        }

        if ($returnName || $returnPrenom  || $returnAdresse) {
            echo json_encode(
                array('message' => 'Account Updated')
            );
        } else {
            echo json_encode(
                array('message' => 'Account Not Updated')
            );
        }
    }

    public function GetUserByEmail()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));

        $email = $data->email;

        $info = $this->userModel->getUserByEmail($email);
        if ($info) {
            echo json_encode(
                array(
                    'message' => 'Account Isset',
                    'result' => $info
                )
            );
        } else {
            echo json_encode(
                array('message' => 'Account Not Isset')
            );
        }
    }
    public function updatePassword($id)
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

        $data = json_decode(file_get_contents("php://input"));

        $password = $data->password;
        $hashPass = password_hash($password, PASSWORD_DEFAULT);

        $info = $this->userModel->updatePassword($hashPass, $id);
        if ($info) {
            echo json_encode(
                array('message' => 'Password Updated')
            );
        } else {
            echo json_encode(
                array('message' => 'Password Not Updated')
            );
        }
    }
}
