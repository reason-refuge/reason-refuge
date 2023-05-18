<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Fournisseurs" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm">
    <form id="addFournisseur">
        <div class="divForm">
            <label for="nom">Nom</label>
            <input type="text" name="nom" placeholder="Nom" required>
            <span id="nom_error"></span>
        </div>
        <div class="divForm">
            <label for="prenom">Prenom</label>
            <input type="text" name="prenom" placeholder="Prenom" required>
            <span id="prenom_error"></span>
        </div>
        <div class="divForm">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Email" required>
            <span id="email_error"></span>
        </div>
        <div class="divForm">
            <label for="password">Mot De Passe</label>
            <input type="password" name="password" placeholder="Mot De Passe" required>
            <span id="pass_error"></span>
        </div>
        <div class="divForm">
            <label for="adresse">Adresse</label>
            <input type="text" name="adresse" placeholder="Adresse" required>
            <span id="adresse_error"></span>
        </div>
        <div class="divForm">
            <input type="hidden" name="role" value="2">
            <input type="submit" value="Save">
        </div>
    </form>
</div>

<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?=URLROOT?>/layout/js/addFournisseur.js"></script>