<?php
class Stock
{
    private $db;
    public function __construct()
    {
        $this->db = new Database();
    }
    public function getProductInStockByIdAcheteur($id_acheteur)
    {
        $this->db->query("SELECT * FROM `stock` st,`produit` po, `utilisateur` ut WHERE st.`id_acheteur` = :id_acheteur AND po.`id_produit` = st.`id_produit` AND ut.`id_user` = st.`id_vendeur`");
        $this->db->bind(':id_acheteur', $id_acheteur);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function SearchProduitsById($id_stock)
    {
        $this->db->query("SELECT * FROM `stock`st,`produit` po  WHERE po.`id_produit` = st.`id_produit` AND st.`id_stock` = :id_stock");
        $this->db->bind(':id_stock', $id_stock);
        $row = $this->db->fetch();
        return $row;
    }
    public function getProduitsInStock($id_user)
    {
        $this->db->query("SELECT * FROM `stock` WHERE `id_acheteur` = :id_user");
        $this->db->bind(':id_user', $id_user);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function GetProduitsForUser()
    {
        $this->db->query("SELECT * FROM `stock`st,`utilisateur`ut, `produit` pr WHERE st.id_acheteur = ut.id_user AND ut.role_user = 0 AND pr.id_produit = st.id_produit AND st.quantite_stock > 0");
        $row = $this->db->fetchAll();
        return $row;
    }
    
    public function delete($id)
    {
        $this->db->query("DELETE FROM stock WHERE id_stock = :id");
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function viderStock($id_user){
        $this->db->query("DELETE FROM stock WHERE id_acheteur = :id_user");
        $this->db->bind(':id_user', $id_user);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
}
