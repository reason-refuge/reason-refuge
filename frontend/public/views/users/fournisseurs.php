<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Fournisseurs" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="search">
                    <a href="<?= URLROOT ?>users/addFournisseur" class="btn btn-primary btnMeAdd">
                        <i class="fa fa-plus"></i>
                        Ajouter Fournisseur
                    </a>
                    <form onsubmit="event.preventDefault();" role="search">
                        <input id="searchByIDInput" type="search" placeholder="Search By ID" autofocus required />
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    <form onsubmit="event.preventDefault();" role="search">
                        <input id="searchInput" type="search" placeholder="Search ..." autofocus required />
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
                <div class="table-responsive" data-pattern="priority-columns">
                    <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Id Fournisseur</th>
                                <th data-priority="1">Nom</th>
                                <th data-priority="2">Prenom</th>
                                <th data-priority="3">Email</th>
                                <th data-priority="4">Adresse</th>
                                <th data-priority="4">Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyTrs"></tbody>
                    </table>
                    <span id="noFournisseur"></span>
                </div>
            </div>
        </div>
        <div id="formEditDiv" class="formEditDiv"></div>
    </div>
</div>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?= URLROOT ?>/layout/js/fournisseur.js"></script>