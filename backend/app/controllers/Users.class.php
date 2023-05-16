<?php

class Users extends Controller {

    private $userModel;

    public function __construct() {
        $this->userModel = $this->model('User');
    }

    public function register()
    {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Content-Type: application/json' );
        header( 'Access-Control-Allow-Method: POST' );
        header( 'Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation' );
        
        
        $data = json_decode( file_get_contents( 'php://input' ) );
        $nom = $data->nom;
        $prenom = $data->prenom;
        $email = $data->email;
        $password = $data->password;
        $hashPass = password_hash($password,PASSWORD_DEFAULT);
        $adresse = $data->adresse;
        $role = $data->role;

        $issetEmail = 0;
        if ( $this->userModel->getUserByEmail($email) ) {
            $issetEmail = 1;
        } 
        if($issetEmail == 0) {
            if ( $this->userModel->register($nom,$prenom, $email, $hashPass, $adresse,$role) ) {
                echo json_encode(
                    array( 
                        'message' => 'Account Added',
                        'messageEmail' => ''
                        )
                );
            }
        } else{
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

        $result = $this->userModel->login($email,$password,$role);
        $check = $result['check'];
        
        if($check) {
            $row = $result['row'];
            echo json_encode(
            array(
                'message' => 'Account Susses',
                'result' => $row
            )
            );
        } else {
            echo json_encode(
            array('message' => 'Didn\'t Account Susses' )
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
            }else{
                echo json_encode(
                array('message' => 'Account Didn\'t Deleted' )
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
        if($info){
            echo json_encode(
                array(
                    'message' => 'Account Info',
                    'result' => $info
                )
                );
        }else{
            echo json_encode(
            array('message' => 'Account Didn\'t Issit' )
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
            $this->userModel->updateAvatar($name,$id_u);
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

        $name = $data->name;
        if ($name != '' && !empty($name)) {
            $name = 'name = "' . $name . '"';
            $returnName = $this->userModel->Update('users', $name, 'id_u =' . $id);
        } else {
            $returnName = false;
        }

        $prenom = $data->prenom;
        if ($prenom != '' && !empty($prenom)) {
            $prenom = 'prenom = "' . $prenom . '"';
            $returnPrenom = $this->userModel->Update('users', $prenom, 'id_u =' . $id);
        } else {
            $returnPrenom = false;
        }

        $number = $data->number;
        if ($number != '' && !empty($number)) {
            $number = 'number= "' . $number . '"';
            $returnNumber = $this->userModel->Update('users', $number, 'id_u =' . $id);
        } else {
            $returnNumber = false;
        }

        $adress = $data->adress;
        if ($adress != '' && !empty($adress)) {
            $adress = 'adress= "' . $adress . '"';
            $returnAdress = $this->userModel->Update('users', $adress, 'id_u =' . $id);
        } else {
            $returnAdress = false;
        }

        $postCode = $data->postCode;
        if ($postCode != '' && !empty($postCode)) {
            $postCode = 'postcode= "' . $postCode . '"';
            $returnPostcode = $this->userModel->Update('users', $postCode, 'id_u =' . $id);
        } else {
            $returnPostcode = false;
        }

        $state = $data->state;
        if ($state != '' && !empty($state)) {
            $state = 'State= "' . $state . '"';
            $returnState = $this->userModel->Update('users', $state, 'id_u =' . $id);
        } else {
            $returnState = false;
        }

        $country = $data->country;
        if ($country != '' && !empty($country)) {
            $country = 'Country= "' . $country . '"';
            $returnCountry = $this->userModel->Update('users', $country, 'id_u =' . $id);
        } else {
            $returnCountry = false;
        }

        if ($returnName || $returnPrenom || $returnNumber || $returnAdress || $returnPostcode || $returnState || $returnCountry) {
            echo json_encode(
                array('message' => 'Account Updated')
            );
        } else {
            echo json_encode(
                array('message' => 'Account Not Updated')
            );
        }
    }

    public function UserEmail()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        
        $data = json_decode(file_get_contents("php://input"));

        $email = $data->email;

        $info = $this->userModel->getUserByEmail($email);
        if($info){
            echo json_encode(
                array(
                    'message' => 'Account Isset',
                    'result' => $info
                )
                );
        }else{
            echo json_encode(
            array('message' => 'Account Not Isset' )
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
        $hashPass = password_hash($password,PASSWORD_DEFAULT);

        $info = $this->userModel->updatePassword($hashPass,$id);
        if($info){
            echo json_encode(
                array('message' => 'Password Updated')
            );
        }else{
            echo json_encode(
            array('message' => 'Password Not Updated' )
            );
        }
    }
}
