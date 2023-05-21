<?php

class Alerte
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function getAlertesByUserId($id_user)
    {
        $this->db->query("SELECT * FROM alerte al, alerte_config alc, alerte_type alt, condition_alerte ala WHERE al.id_alerte_config = alc.id_alerte_config AND alc.id_user = :id_user AND alc.id_condition_alerte = ala.id_condition_alerte AND ala.id_type_alerte = alt.id_type_alerte");
        $this->db->bind(':id_user', $id_user);
        $row = $this->db->fetchAll();
        return $row;
    }
    public function getConditionAlerte()
    {
        $this->db->query("SELECT * FROM `condition_alerte`");
        $row = $this->db->fetchAll();
        return $row;
        
    }
    public function addConfigAlerte()
    {
        
    }
    public function deleteAlerte($id)
    {
        $this->db->query("DELETE FROM alerte WHERE id_alerte = :id");
        $this->db->bind(':id', $id);
        if ($this->db->execute())
            return true;
        else
            return false;
    }
    public function addAlerte()
    {
        
    }
}
