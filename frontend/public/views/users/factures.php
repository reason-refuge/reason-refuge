<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Factures" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <span class="btn btn-info my-2" id="archive_desarchive">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    archive
                </span>
                <div class="table-responsive" data-pattern="priority-columns">
                    <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Id Facture</th>
                                <th data-priority="1">Date Facture</th>
                                <th data-priority="2">Montant Total Facture</th>
                                <th data-priority="3">Archivation</th>
                                <th data-priority="4">Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyTrs"></tbody>
                    </table>
                    <span id="noFacture"></span>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?= URLROOT ?>/layout/js/facture.js"></script>