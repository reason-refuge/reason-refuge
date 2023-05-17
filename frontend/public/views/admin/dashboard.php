<link rel="stylesheet" href="<?= URLROOT ?>layout/css/dashboard.css">
<link rel="stylesheet" href="<?= URLROOT ?>layout/css/navbar.css">
<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Dashboard" id="activeLi">
<?php include_once './views/inc/navbarAdmin.inc.php' ?>

<section class="section-plans MisEnForm" id="section-plans">
    <div class="u-center-text u-margin-bottom-big">
    </div>

    <div class="row">
        <div class="w-50">
            <div class="card">
                <div class="card__side card__side--front-1">
                    <div class="card__title card__title--2">
                        <i class="fas fa-users"></i>
                        <h4 class="card__heading">Utilisateur</h4>
                    </div>

                    <div class="card__details">
                        <ul>
                            <li></li>
                            <li>
                                <p class="card__price-value" id="totalUsers"></p>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta .htmlMe">
                        <div class="button"></div>
                        <div class="menu" onclick="this.classList.toggle('open')">
                            <div class="button" onclick="addUser()" title="Ajouter Utilisateur">
                                <i class="fa fa-user-plus icon" aria-hidden="true"></i>
                            </div>
                            <div class="button" onclick="seeUsers()" title="Voir Utilisateurs">
                                <i class="fa fa-users icon" aria-hidden="true"></i>
                            </div>
                            <div class="button" onclick="editDeleteUser()" title="Modifier Ou Supprimer Utilisateur">
                                <i class="fa fa-pencil icon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?= URLROOT ?>/layout/js/dashboardAdmin.js"></script>