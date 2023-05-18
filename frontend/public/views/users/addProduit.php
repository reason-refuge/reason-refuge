<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Produits" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm">
    <form id="addProduit">
        <div class="divForm">
            <label for="nom">Nom</label>
            <input type="text" name="nom" placeholder="Nom" required>
            <span id="nom_error"></span>
        </div>
        <div class="divForm">
            <label for="quantité">Quantité</label>
            <input type="number" name="quantité" placeholder="Quantité" required>
            <span id="quantité_error"></span>
        </div>
        <div class="divForm">
            <label for="prix">Prix</label>
            <input type="text" name="prix" placeholder="Prix" required>
            <span id="prix_error"></span>
        </div>
        <div class="divForm">
            <input type="submit" value="Save">
        </div>
    </form>
</div>

<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?=URLROOT?>/layout/js/addProduit.js"></script>