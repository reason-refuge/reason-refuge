<?php include_once './views/inc/header.inc.php' ?>
<input type="hidden" value="Alertes Controle" id="activeLi">
<?php include_once './views/inc/navbarUser.inc.php' ?>
<div class="MisEnForm d-flex justify-content-center">
    <form id="addConfigAlert">
        <div class="label_input-select">
            <label for="conditionAlert">Condition Alert</label>
            <select name="conditionAlert" id="conditionAlert" required></select>
            <span id="error_conditionAlert"></span>
        </div>
        <div class="label_input-select" id="valueLimitCondition" style="display: none;"></div>
        <div class="label_input-select">
            <label for="messageAlert">Message Alert A Affiché</label>
            <input name="messageAlert" type="text" placeholder ="Message Alert A Affiché" required>
            <span id="error_messageAlert"></span>
        </div>
        <div class="label_input-select">
            <input type="hidden" id ="user_id_input" name="id_user">
            <input class = "submitAlertConfig" type="submit" value ="Save">
        </div>
    </form>
</div>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?=URLROOT?>/layout/js/alertes.js"></script>