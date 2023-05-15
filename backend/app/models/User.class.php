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
        $this->db->query("DELETE FROM users WHERE id_u = :id");
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function updateAuto($username,$password,$id)
    {
        $this->db->query("UPDATE `users` SET`username`= :username,`password`=:password WHERE `id_u` = :id");
        $this->db->bind(':username', $username);
        $this->db->bind(':password', $password);
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function updateAvatar($avatar,$id)
    {
        $this->db->query("UPDATE `users` SET`avatar_user`=:avatar WHERE `id_u` = :id");
        $this->db->bind(':avatar', $avatar);
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function updatePassword($password,$id)
    {
        $this->db->query("UPDATE `users` SET`password`=:password WHERE `id_u` = :id");
        $this->db->bind(':password', $password);
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function getUserByEmail($email)
    {
        $this->db->query("SELECT * FROM users WHERE email = :email");
        $this->db->bind(":email", $email);
        $this->db->execute();
        if ($this->db->fetch())
            return $this->db->fetch();
        else
            return false;
    }
    public function getUserByUsername($username)
    {
        $this->db->query("SELECT * FROM users WHERE username = :username");
        $this->db->bind(":username", $username);
        $this->db->execute();
        if ($this->db->fetch())
            return $this->db->fetch();
        else
            return false;
    }
    public function getUserByEmailOrUsername($libelle)
    {
        $this->db->query("SELECT * FROM users u WHERE u.username LIKE '%$libelle%' OR u.email LIKE '%$libelle%'");
        $this->db->execute();
        if ($this->db->fetch())
            return $this->db->fetch();
        else
            return false;
    }
    public function register($name, $email, $password, $avatar)
    {

        $this->db->query('INSERT INTO users(username,email,password,avatar_user) VALUES (:name,:email,:password,:avatar)');
        $this->db->bind(':name', $name);
        $this->db->bind(':email', $email);
        $this->db->bind(':password', $password);
        $this->db->bind(':avatar', $avatar);
        if ($this->db->execute()){
            return true;
        }
        else
            return false;
    }
    public function login($libelle, $password)
    {
        $this->db->query("SELECT * FROM users u WHERE u.username LIKE '%$libelle%' OR u.email LIKE '%$libelle%'");
        $row = $this->db->fetch();
        $hashed_password = $row->password;
        if (password_verify($password, $hashed_password)) {
            return true;
        } else {
            return false;
        }
    }
    public function getInfo($id)
    {
        $this->db->query("SELECT * FROM users WHERE id_u = :id");
        $this->db->bind(':id', $id);
        $row = $this->db->fetch();
        return $row;
    }
    public function Update( $table, $sql, $id )
 {
        $sql = "UPDATE $table SET $sql WHERE $id";
        $this->db->query( $sql );
        if ( $this->db->execute() )
        return true;
        else
        return false;
    }
}