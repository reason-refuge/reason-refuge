<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Alertes Controle" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm d-flex justify-content-center">
    <form id="addConfigAlert">
        <div class="label_input-select">
            <label for="conditionAlert">Condition Alert</label>
            <select name="conditionAlert" id="conditionAlert">
                <option value="">Condition Alert</option>
                <option value="1">Condition 1</option>
                <option value="2">Condition 2</option>
                <option value="3">Nombre de Produit dans le stock inferieur de</option>
            </select>
        </div>
        <div class="label_input-select">
            <label for="valueLimitCondition">La Valeur Limite De Condition</label>
            <input name="valueLimitCondition" type="number" placeholder ="La Valeur Limite De Condition">
        </div>
        <div class="label_input-select">
            <label for="messageAlert">Message Alert A Affiché</label>
            <input name="messageAlert" type="text" placeholder ="Message Alert A Affiché">
        </div>
        <div class="label_input-select">
            <input type="hidden" value ="id_user" name="id_user">
            <input class = "submitAlertConfig" type="submit" value ="Save">
        </div>
    </form>
</div>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?=URLROOT?>/layout/js/alertes.js"></script>