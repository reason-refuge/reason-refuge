<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Stock" id="activeLi">
<?php include_once './views/inc/navbarFournisseur.inc.php' ?>
<div class="MisEnForm">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="table-responsive" data-pattern="priority-columns">
                    <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Id Stock</th>
                                <th data-priority="1">Date Stock</th>
                                <th data-priority="2">Montant Total</th>
                                <th data-priority="3">Nom Produit</th>
                                <th data-priority="4">Nom Et Prénom De Vendeur</th>
                                <th data-priority="5">Quantitée Stock</th>
                                <th data-priority="6">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyTrs"></tbody>
                    </table>
                    <span id="noProduit"></span>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?= URLROOT ?>/layout/js/stockFournisseur.js"></script>