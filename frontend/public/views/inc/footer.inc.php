<!-- script -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            emailjs.init("tlE6acu4YWsTKEHNn");
        })();
    </script>
    <script src="<?= URLROOT ?>layout/js/forgetPassword/config.js"></script>
    <script src="<?= URLROOT ?>layout/js/forgetPassword/send.email.restPassword.js"></script>
<script src="<?= URLROOT ?>layout/js/main.js"></script>
<?php if (isset($includeAlertJsFile)) { ?>
    <script src="<?= URLROOT ?>layout/js/alertUser.js"></script>
<?php } ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>