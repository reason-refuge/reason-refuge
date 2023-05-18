<?php include_once './views/inc/header.inc.php' ?>
<link rel="stylesheet" href="<?= URLROOT ?>layout/css/formAdmin.css">
<section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
                <div class="wrap d-md-flex">
                    <div class="img" style="background-image: url(<?= URLROOT ?>layout/image/bg-2.jpg);">
                    </div>
                    <div class="login-wrap p-4 p-md-5" id="changeForm">
                    <div class="d-flex">
                            <div class="w-100">
                                <h3 class="mb-4" id="click" onclick="SignIn()">Sign In User</h3>
                            </div>
                            <div class="w-100">
                                <p class="social-media d-flex justify-content-end">
                                    <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                                    <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                                </p>
                            </div>
                        </div>
                        <form action="#" class="signin-form" id = "form">
                            <div class="form-group mb-3">
                                <label class="label" for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Email" required name = "email">
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="password">Password</label>
                                <input type="password" class="form-control" placeholder="Password" required name = "password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                            </div>
                            <div class="form-group d-md-flex">
                                <div class="w-100 text-md-right">
                                    <span  onclick="ForgotPassword()">Forgot Password</span>
                                </div>
                            </div>
                        </form>
                        <p class="text-center">Not a user? <span onclick="SignUp()">Sign Up</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include_once './views/inc/footer.inc.php' ?>
<script src=" <?=URLROOT?>/layout/js/formUser.js"></script>