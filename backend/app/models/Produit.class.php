<?php
class Produit
{
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }
    public function AddProduit($nom, $quantité, $prix,$id_user)
    {

        $this->db->query('INSERT INTO produit (nom_produit,quantite_produit,price_produit,id_fournisseur) VALUES (:nom,:quantite,:prix,:id_user)');
        $this->db->bind(':nom', $nom);
        $this->db->bind(':quantite', $quantité);
        $this->db->bind(':id_user', $id_user);
        $this->db->bind(':prix', $prix);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function getProduits()
    {
        $this->db->query("SELECT * FROM produit WHERE quantite_produit > 0");
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getProduitsForUser()
    {
        $this->db->query("SELECT * FROM produit WHERE quantite_produit > 0");
        $row = $this->db->fetchAll();
        return $row;
    }
    public function GetProduitsForFournisseur()
    {
        $this->db->query("SELECT * FROM stock WHERE quantite_stock > 0");
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getProduitById($id,$id_user){
        $this->db->query("SELECT * FROM produit WHERE id_produit = :id AND quantite_produit > 0 AND id_fournisseur = :id_user");
        $this->db->bind(':id', $id);
        $this->db->bind(':id_user', $id_user);
        $row = $this->db->fetch();
        return $row;
    }
    public function Update($sql,$id)
    {
        $query = "UPDATE `produit` SET $sql WHERE id_produit = $id";
        $this->db->query($query);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function delete($id)
    {
        $this->db->query("DELETE FROM produit WHERE id_produit = :id");
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function getProduitByLibel($libel,$id_user)
    {
        $sql = "SELECT * FROM produit WHERE (nom_produit LIKE '%".$libel."%' OR quantite_produit LIKE '%".$libel."%' OR price_produit LIKE '%".$libel."%') AND quantite_produit > 0 AND id_fournisseur = $id_user";
        $this->db->query($sql);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getProduitById_User($id_user)
    {
        $sql = "SELECT * FROM produit WHERE id_fournisseur = $id_user";
        $this->db->query($sql);
        $row = $this->db->fetchAll();
        return $row;
    }
}