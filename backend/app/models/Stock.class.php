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
    
    public function delete($id)
    {
        $this->db->query("DELETE FROM stock WHERE id_stock = :id");
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
}
