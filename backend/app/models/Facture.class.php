<?php

class Facture
{
    private $db;

    public function __construct()
    {
        $this->db = new Database;
    }

    public function getAllFacture($id_user)
    {
        $this->db->query("SELECT * FROM facture WHERE id_acheteur = :id_acheteur");
        $this->db->bind(':id_acheteur', $id_user);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getFactureNonArchiver($id_user)
    {
        $this->db->query("SELECT * FROM facture WHERE id_acheteur = :id_acheteur AND archive = 0");
        $this->db->bind(':id_acheteur', $id_user);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function archivation($id_facture,$achivationControl)
    {
        $this->db->query("UPDATE `facture` SET `archive`=:achivationControl WHERE id_facture = :id_facture");
        $this->db->bind(':id_facture', $id_facture);
        $this->db->bind(':achivationControl', $achivationControl);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function deleteFacture($id_facture){
        $this->db->query("DELETE FROM `facture` WHERE `id_facture` = :id_facture");
        $this->db->bind(':id_facture', $id_facture);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
}
