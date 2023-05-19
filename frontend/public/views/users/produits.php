<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Produits" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="search">
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
                                <th>Id Produit</th>
                                <th data-priority="1">Nom</th>
                                <th data-priority="2">Quantité</th>
                                <th data-priority="3">Prix</th>
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
<script src=" <?= URLROOT ?>/layout/js/produit.js"></script>