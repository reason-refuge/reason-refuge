<?php include_once './views/inc/header.inc.php' ?>
<input type='hidden' value='Achats' id='activeLi'>
<?php include_once './views/inc/navbarFournisseur.inc.php' ?>
<div class='MisEnForm MisEnForm2'>
    <div class='cardsProduct' id='cardsProduct'>
        <span id="noProduit"></span>
    </div>
    <div id="achatProduit" class="formEditDiv"></div>
</div>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?= URLROOT ?>/layout/js/achatFournisseur.js"></script>