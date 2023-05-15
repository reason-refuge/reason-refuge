if (ID_USER == null) {
  var changeForm = document.getElementById("changeForm");
  function ForgotPassword() {
    var newForm = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Forgot Password Admin</h3>
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
                                    <span id="email_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                </div>
                            </form>
                            <p class="text-center"><span onclick="SignIn()">Cancel</span></p>`;
    changeForm.innerHTML = newForm;
    var form = document.getElementById("form");
    var email_error = document.getElementById("email_error");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      if (data.email == " ") {
        errorEmail = "Email Can't Be Empty";
        email_error.innerText = errorEmail;
      } else {
        errorEmail = "";
        email_error.innerText = errorEmail;
      }
    });
  }
  function SignUp() {
    var newForm = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign UP Admin</h3>
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
                                    <label class="label" for="name">Nom</label>
                                    <input type="text" class="form-control" placeholder="Nom" required name = "nom">
                                    <span id="nom_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Prenom</label>
                                    <input type="text" class="form-control" placeholder="Prenom" required name = "prenom">
                                    <span id="prenom_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="adresse">Adresse</label>
                                    <input type="text" class="form-control" placeholder="Adresse" required name = "adresse">
                                    <span id="adresse_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="email">Email</label>
                                    <input type="email" class="form-control" placeholder="Email" required name = "email">
                                    <span id="email_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" required name = "password">
                                    <span id="password_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                </div>
                            </form>
                            <p class="text-center">Admin? <span onclick="SignIn(password_error)">Sign In</span></p>`;
    changeForm.innerHTML = newForm;
    var form = document.getElementById("form");
    var nom_error = document.getElementById("nom_error");
    var prenom_error = document.getElementById("prenom_error");
    var adresse_error = document.getElementById("adresse_error");
    var email_error = document.getElementById("email_error");
    var password_error = document.getElementById("password_error");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      if (data.adresse == " ") {
        errorAdresse = "Adresse Can't Be Empty";
        adresse_error.innerText = errorAdresse;
      } else {
        errorAdresse = "";
        adresse_error.innerText = errorAdresse;
      }
      if (data.nom == " ") {
        errorNom = "Nom Can't Be Empty";
        nom_error.innerText = errorNom;
      } else {
        errorNom = "";
        nom_error.innerText = errorNom;
      }
      if (data.prenom == " ") {
        errorPrenom = "Prenom Can't Be Empty";
        prenom_error.innerText = errorPrenom;
      } else {
        errorPrenom = "";
        prenom_error.innerText = errorPrenom;
      }
      if (data.email == " ") {
        errorEmail = "Email Can't Be Empty";
        email_error.innerText = errorEmail;
      } else {
        errorEmail = "";
        email_error.innerText = errorEmail;
      }
      var errorPass = " ";
      if (data.password.length < 8) {
        errorPass += "Password must be at least 8 characters long ";
        password_error.innerHTML = errorPass;
      }
      if (!/[A-Z]/.test(data.password)) {
        errorPass += "Password must contain at least one uppercase letter ";
        password_error.innerHTML = errorPass;
      }
      if (!/[a-z]/.test(data.password)) {
        errorPass += "Password must contain at least one lowercase letter ";
        password_error.innerHTML = errorPass;
      }
      if (!/\d/.test(data.password)) {
        errorPass += "Password must contain at least one number ";
        password_error.innerHTML = errorPass;
      }
      if (data.password == " ") {
        errorPass = "Password Can't Be Empty";
        password_error.innerText = errorPass ;
      } else {
        errorPass += " ";
        password_error.innerText = errorPass ;
      }
    });
  }
  function SignIn() {
    var newForm = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In Admin</h3>
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
                                    <span id="email_error" style = "color: red; cursor:default"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" required name = "password">
                                    <span id="password_error" style = "color: red; cursor:default"></span>
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
                            <p class="text-center">Not a admin? <span onclick="SignUp()">Sign Up</span></p>`;
    changeForm.innerHTML = newForm;
    var form = document.getElementById("form");
    var email_error = document.getElementById("email_error");
    var password_error = document.getElementById("password_error");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      if (data.email == " ") {
        errorEmail = "Email Can't Be Empty";
        email_error.innerText = errorEmail;
      } else {
        errorEmail = "";
        email_error.innerText = errorEmail;
      }
      var errorPass = " ";
      if (data.password.length < 8) {
        errorPass += "Password must be at least 8 characters long ";
        password_error.innerHTML = errorPass;
      }
      if (!/[A-Z]/.test(data.password)) {
        errorPass += "Password must contain at least one uppercase letter ";
        password_error.innerHTML = errorPass;
      }
      if (!/[a-z]/.test(data.password)) {
        errorPass += "Password must contain at least one lowercase letter ";
        password_error.innerHTML = errorPass;
      }
      if (!/\d/.test(data.password)) {
        errorPass += "Password must contain at least one number ";
        password_error.innerHTML = errorPass;
      }
      if (data.password == " ") {
        errorPass = "Password Can't Be Empty";
        password_error.innerText = errorPass ;
      } else {
        errorPass += " ";
        password_error.innerText = errorPass ;
      }
    });
  }
  var clickMe = document.getElementById("click");
  clickMe.click();
} else {
  location.replace(`${URLROOT}admin/dashboard`);
}
