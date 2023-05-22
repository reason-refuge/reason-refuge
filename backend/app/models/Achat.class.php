<?php

class Achat
{
    private $db;

    public function __construct()
    {
        $this->db = new Database;
    }
    public function checkIfProductIsset($idProduit, $id_acheteur, $id_vendeur)
    {
        $this->db->query('SELECT * FROM `stock` WHERE `id_produit` = :idProduit AND `id_acheteur` = :id_acheteur AND `id_vendeur` = :id_vendeur');
        $this->db->bind(':idProduit', $idProduit);
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':id_vendeur', $id_vendeur);
        $this->db->execute();
        $row = $this->db->fetch();
        if ($row) {
            return 1;
        } else
            return 0;
    }
    public function add($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur)
    {
        $this->db->query('INSERT INTO `achat`(`montantTotal_achat`, `id_produit`, `id_acheteur`, `id_vendeur`) VALUES (:montantTotalAchat, :idProduit, :id_acheteur ,:id_vendeur)');
        $this->db->bind(':montantTotalAchat', $montantTotalAchat);
        $this->db->bind(':idProduit', $idProduit);
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':id_vendeur', $id_vendeur);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function changeQuantite($newQuantite, $idProduit)
    {
        $this->db->query('UPDATE `produit` SET `quantite_produit`= :newQuantite WHERE `id_produit` = :idProduit');
        $this->db->bind(':newQuantite', $newQuantite);
        $this->db->bind(':idProduit', $idProduit);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function addStock($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur, $quantiteAchete,$roleVendeur)
    {
        $this->db->query('INSERT INTO `stock`(`montantTotal_stock`, `id_produit`, `id_acheteur`, `id_vendeur`, `quantite_stock`,`role_vendeur`) VALUES (:montantTotalAchat, :idProduit, :id_acheteur, :id_vendeur, :quantiteAchete,:roleVendeur)');
        $this->db->bind(':quantiteAchete', $quantiteAchete);
        $this->db->bind(':id_vendeur', $id_vendeur);
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':montantTotalAchat', $montantTotalAchat);
        $this->db->bind(':idProduit', $idProduit);
        $this->db->bind(':roleVendeur', $roleVendeur);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function fetchStock($idProduit, $id_acheteur, $id_vendeur,$roleVendeur)
    {
        $this->db->query('SELECT * FROM `stock` WHERE `id_produit` = :idProduit AND `id_acheteur` = :id_acheteur AND `id_vendeur` = :id_vendeur AND `role_vendeur` = :roleVendeur');
        $this->db->bind(':id_vendeur', $id_vendeur);
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':idProduit', $idProduit);
        $this->db->bind(':roleVendeur', $roleVendeur);
        $row = $this->db->fetch();

        return $row;
    }
    public function changeStock($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur, $quantiteAchete,$roleVendeur)
    {
        $row = $this->fetchStock($idProduit, $id_acheteur, $id_vendeur,$roleVendeur);
        $id_stock = $row-> id_stock;
        $quantiteStock = $row-> quantite_stock;
        $newQuantiteStock = $quantiteStock + $quantiteAchete;
        $montantTotalStock = $row-> montantTotal_stock;
        $newMontantTotalStock = $montantTotalStock + $montantTotalAchat;

        $currentDateTime = date('Y-m-d');

        $this->db->query('UPDATE `stock` SET `montantTotal_stock`=:newMontantTotalStock,`quantite_stock`=:newQuantiteStock,`date_stock` = :date_stock WHERE `id_stock`=:id_stock');
        $this->db->bind(':newQuantiteStock', $newQuantiteStock);
        $this->db->bind(':newMontantTotalStock', $newMontantTotalStock);
        $this->db->bind(':date_stock', $currentDateTime);
        $this->db->bind(':id_stock', $id_stock);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function addFacture($montantTotalAchat, $id_acheteur)
    {
        $this->db->query('INSERT INTO `facture`(`montantTotal_facture`, `id_acheteur`) VALUES (:montantTotalAchat, :id_acheteur)');
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':montantTotalAchat', $montantTotalAchat);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
}
