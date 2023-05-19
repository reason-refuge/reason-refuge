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
        $this->db->query('SELECT * FROM `achat` WHERE `id_produit` = :idProduit AND `id_acheteur` = :id_acheteur AND `id_vendeur` = :id_vendeur ORDER BY `id_achat` DESC LIMIT 1');
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
    public function addStock($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur, $quantiteAchete)
    {
        $this->db->query('INSERT INTO `stock`(`montantTotal_stock`, `id_produit`, `id_acheteur`, `id_vendeur`, `quantite_stock`) VALUES (:montantTotalAchat, :idProduit, :id_acheteur, :id_vendeur, :quantiteAchete)');
        $this->db->bind(':quantiteAchete', $quantiteAchete);
        $this->db->bind(':id_vendeur', $id_vendeur);
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':montantTotalAchat', $montantTotalAchat);
        $this->db->bind(':idProduit', $idProduit);
        if ($this->db->execute()) {
            return true;
        } else
            return false;
    }
    public function changeStock($montantTotalAchat, $idProduit, $id_acheteur, $id_vendeur, $quantiteAchete)
    {
        $this->db->query('UPDATE `stock` SET `montantTotal_stock` = :montantTotalAchat ,`quantite_stock`= :quantiteAchete WHERE `id_produit` = :idProduit AND `id_acheteur` = :id_acheteur AND `id_vendeur` = :id_vendeur');
        $this->db->bind(':quantiteAchete', $quantiteAchete);
        $this->db->bind(':id_vendeur', $id_vendeur);
        $this->db->bind(':id_acheteur', $id_acheteur);
        $this->db->bind(':montantTotalAchat', $montantTotalAchat);
        $this->db->bind(':idProduit', $idProduit);
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
