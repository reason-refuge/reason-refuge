<?php
class User
{
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }
    public function delete($id)
    {
        $this->db->query("DELETE FROM utilisateur WHERE id_user = :id");
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function updateUser($nom_user, $password_user, $id)
    {
        $this->db->query("UPDATE `utilisateur` SET`nom_user`= :nom_user WHERE `id_user` = :id");
        $this->db->bind(':nom_user', $nom_user);
        $this->db->bind(':password_user', $password_user);
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function updatePassword($password_user, $id)
    {
        $this->db->query("UPDATE `utilisateur` SET`password_user`=:password_user WHERE `id_user` = :id");
        $this->db->bind(':password_user', $password_user);
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function getUserByEmail($email)
    {
        $this->db->query("SELECT * FROM utilisateur WHERE email_user = :email");
        $this->db->bind(":email", $email);
        $this->db->execute();
        if ($this->db->fetch())
            return $this->db->fetch();
        else
            return false;
    }
    public function getUsers($role)
    {
        $this->db->query("SELECT * FROM utilisateur WHERE role_user = :role");
        $this->db->bind(':role', $role);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getUserByLibel($role,$libel)
    {
        $sql = "SELECT * FROM utilisateur WHERE (role_user = $role AND nom_user LIKE '%".$libel."%') OR (role_user = $role AND prenom_user LIKE '%".$libel."%') OR (role_user = $role AND adresse_user LIKE '%".$libel."%') OR (role_user = $role AND email_user LIKE '%".$libel."%')";
        $this->db->query($sql);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getUserById($role,$id)
    {
        $this->db->query("SELECT * FROM utilisateur WHERE role_user = :role AND id_user = :id");
        $this->db->bind(':role', $role);
        $this->db->bind(':id', $id);
        $row = $this->db->fetch();
        return $row;
    }
    public function register($nom, $prenom, $email, $hashPass, $adresse, $role)
    {

        $this->db->query('INSERT INTO utilisateur(nom_user,email_user,password_user,adresse_user,prenom_user,role_user) VALUES (:nom,:email,:hashPass,:adresse,:prenom,:role)');
        $this->db->bind(':nom', $nom);
        $this->db->bind(':email', $email);
        $this->db->bind(':hashPass', $hashPass);
        $this->db->bind(':adresse', $adresse);
        $this->db->bind(':role', $role);
        $this->db->bind(':prenom', $prenom);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function login($email, $password, $role)
    {
        $this->db->query('SELECT * FROM utilisateur WHERE email_user = :email');
        $this->db->bind(':email', $email);
        $row = $this->db->fetch();
        if ($row) {
            $hashed_password = $row->password_user;
            $roleInfo = $row->role_user;
            if ($roleInfo == $role && password_verify($password, $hashed_password)) {
                $result = [
                    "check" => true,
                    "row" => $row
                ];
                return $result;
            } else {
                $result = [
                    "check" => false
                ];
                return $result;
            }
        } else {
            $result = [
                "check" => false
            ];
            return $result;
        }
    }
    public function getInfo($id)
    {
        $this->db->query("SELECT * FROM utilisateur WHERE id_user = :id");
        $this->db->bind(':id', $id);
        $row = $this->db->fetch();
        return $row;
    }
    public function Update($sql,$id)
    {
        $query = "UPDATE `utilisateur` SET $sql WHERE id_user = $id";
        $this->db->query($query);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
}