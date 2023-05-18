<script src=" <?= URLROOT ?>/layout/js/main.js"></script>
<script>
    var ID_USER_CHARGE = 'null'
    var ROLE_USER_CHARGE = 3
    localStorage.setItem("ID_USER", ID_USER_CHARGE);
    localStorage.setItem("ROLE_USER", ROLE_USER_CHARGE);
    location.replace(`${URLROOT}fournisseur`)
</script>