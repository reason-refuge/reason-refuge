const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

function generateCode() {
  var code = "";
  for (var i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

if ((!ID_USER || ID_USER === "null" || ID_USER === "undefined") || (ROLE_USER == 3 || ROLE_USER == 1 || ROLE_USER == 0)) {
  var changeForm = document.getElementById("changeForm");
  function ForgotPassword() {
    var newForm = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Forgot Password Fournisseur</h3>
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
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Confirm Email</button>
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
        fetch(`${BACK_URLROOT}Users/GetUserByEmail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            var message = data.message;
            if (message == "Account Not Isset") {
              email_error.innerHTML = message;
            } else {
              email_error.innerHTML = message;
              email_error.setAttribute(
                "style",
                "color: green; cursor:default"
              );
var emailUpdate = data.result.email_user;
              var idUpdate = data.result.id_user;
              var code = sendMail(emailUpdate);
                alert("check your inbox or spam in your gmail");

                var newForm2 = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Forgot Password Fournisseur</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                                        <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                                    </p>
                                </div>
                            </div>
                            <form action="#" class="signin-form" id = "form2">
                                <div class="form-group mb-3">
                                    <label class="label" for="codeConfirmation">Code Confirmation</label>
                                    <input type="text" class="form-control" placeholder="Code Confirmation" required name = "codeConfirmation">
                                    <span id="code_confirm_error"></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Confirm Code</button>
                                </div>
                            </form>
                            <p class="text-center"><span onclick="SignIn()">Cancel</span></p>`;
                changeForm.innerHTML = newForm2;
                var form2 = document.getElementById("form2");
                var code_confirm_error = document.getElementById(
                  "code_confirm_error"
                );
                form2.addEventListener("submit", event => {
                  event.preventDefault();
                  const formData2 = new FormData(form2);
                  const data2 = Object.fromEntries(formData2);
                  const codeInput = data2.codeConfirmation;
                  if (code == codeInput) {
                    code_confirm_error.innerHTML = "Code Is Valid";
                    code_confirm_error.setAttribute(
                      "style",
                      "color: green; cursor:default"
                    );

                    var newForm3 = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Forgot Password Fournisseur</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                                        <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                                    </p>
                                </div>
                            </div>
                            <form action="#" class="signin-form" id = "form3">
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" required name = "password">
                                    <span id="password_error"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="confirm_password">Confirmation Password</label>
                                    <input type="password" class="form-control" placeholder="Confirmation Password" required name = "confirm_password">
                                    <span id="confirm_password_error"></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Confirm Email</button>
                                </div>
                            </form>
                            <p class="text-center"><span onclick="SignIn()">Cancel</span></p>`;
                    changeForm.innerHTML = newForm3;

                    var form3 = document.getElementById("form3");
                    var password_error = document.getElementById(
                      "password_error"
                    );
                    var confirm_password_error = document.getElementById(
                      "confirm_password_error"
                    );
                    form3.addEventListener("submit", event => {
                      event.preventDefault();
                      const formData3 = new FormData(form3);
                      const data3 = Object.fromEntries(formData3);
                      const pass = data3.password;
                      const confirmPass = data3.confirm_password;

                      if (pass == confirmPass) {
                        confirm_password_error.innerHTML =
                          "Password = Confirm Password";
                        confirm_password_error.setAttribute(
                          "style",
                          "color: green; cursor:default"
                        );
                        fetch(
                          `${BACK_URLROOT}Users/updatePassword/${idUpdate}`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                          }
                        )
                          .then(res => res.json())
                          .then(data => {
                            if (data.message == "Password Updated") {
                              setTimeout(function() {
                                location.reload();
                              }, 1000);
                            }
                          });
                      } else {
                        confirm_password_error.innerHTML =
                          "Password != Confirm Password";
                        confirm_password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      }

                      var errorPass = " ";
                      if (data.password.length < 8) {
                        errorPass +=
                          "Password must be at least 8 characters long ";
                        password_error.innerHTML = errorPass;
                        password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      }
                      if (!/[A-Z]/.test(data.password)) {
                        errorPass +=
                          "Password must contain at least one uppercase letter ";
                        password_error.innerHTML = errorPass;
                        password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      }
                      if (!/[a-z]/.test(data.password)) {
                        errorPass +=
                          "Password must contain at least one lowercase letter ";
                        password_error.innerHTML = errorPass;
                        password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      }
                      if (!/\d/.test(data.password)) {
                        errorPass +=
                          "Password must contain at least one number ";
                        password_error.innerHTML = errorPass;
                        password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      }
                      if (data.password == " ") {
                        errorPass = "Password Can't Be Empty";
                        password_error.innerText = errorPass;
                        password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      } else {
                        password_error.innerText = errorPass;
                        password_error.setAttribute(
                          "style",
                          "color: red; cursor:default"
                        );
                      }
                    });
                  } else {
                    code_confirm_error.innerHTML = "Code Is Invalid";
                    code_confirm_error.setAttribute(
                      "style",
                      "color: red; cursor:default"
                    );
                  }
                });
            }
          });
      }
    });
  }
  function SignUp() {
    var newForm = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign UP Fournisseur</h3>
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
                                <input type="hidden" name="role" value="1">
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                                </div>
                            </form>
                            <p class="text-center">Fournisseur? <span onclick="SignIn(password_error)">Sign In</span></p>`;
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
        password_error.innerText = errorPass;
      } else {
        password_error.innerText = errorPass;
      }
      if (
        (errorPass == " " || !errorPass) &&
        (errorEmail == " " || !errorEmail) &&
        (errorAdresse == " " || !errorAdresse) &&
        (errorPrenom == " " || !errorPrenom) &&
        (errorNom == " " || !errorNom)
      ) {
        fetch(`${BACK_URLROOT}Users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if (data.message == "Account Added") {
              alert("Votre Account a eté crier");
              location.replace(`${URLROOT}Fournisseur`);
            } else {
              errorEmail = data.messageEmail;
              email_error.innerText = errorEmail;
            }
          });
      }
    });
  }
  function SignIn() {
    var newForm = `<div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In Fournisseur</h3>
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
                                    <span id="check_result"></span>
                                    </div>
                                    <input type="hidden" name="role" value="2">
                                    <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                    </div>
                                <div class="form-group d-md-flex">
                                    <div class="w-100 text-md-right">
                                        <span  onclick="ForgotPassword()">Forgot Password</span>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center">Not a Fournisseur? <span onclick="SignUp()">Sign Up</span></p>`;
    changeForm.innerHTML = newForm;
    var form = document.getElementById("form");
    var email_error = document.getElementById("email_error");
    var password_error = document.getElementById("password_error");
    var check_result = document.getElementById("password_error");
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
        password_error.innerText = errorPass;
      } else {
        password_error.innerText = errorPass;
      }
      if (
        (errorPass == " " || !errorPass) &&
        (errorEmail == " " || !errorEmail)
      ) {
        fetch(`${BACK_URLROOT}Users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if (data.message == "Account Susses") {
              var result = data.result;
              var ID_USER_CHARGE = result.id_user;
              var NOM_USER_CHARGE = result.nom_user;
              var ROLE_USER_CHARGE = result.role_user;
              localStorage.setItem("ID_USER", ID_USER_CHARGE);
              localStorage.setItem("NOM_USER", NOM_USER_CHARGE);
              localStorage.setItem("ROLE_USER", ROLE_USER_CHARGE);
              check_result.innerText = data.message;
              check_result.setAttribute(
                "style",
                "color: green; cursor:default"
              );
              location.replace(`${URLROOT}Fournisseur/home`);
            } else {
              check_result.innerText = data.message;
              check_result.setAttribute("style", "color: red; cursor:default");
            }
          });
      }
    });
  }
  var clickMe = document.getElementById("click");
  clickMe.click();
} else {
  location.replace(`${URLROOT}Fournisseur/produits`);
}
