const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

if ((!ID_USER || ID_USER === "null" || ID_USER === "undefined") || (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 0)) {
  location.replace(`${URLROOT}admin`);
} else {
  const addUser = document.getElementById("addUser");

  const nom_error = document.getElementById("nom_error");
  const prenom_error = document.getElementById("prenom_error");
  const email_error = document.getElementById("email_error");
  const pass_error = document.getElementById("pass_error");
  const adresse_error = document.getElementById("adresse_error");

  var errorNom = 0;
  var errorPrenom = 0;
  var errorEmail = 0;
  var errorPass = 0;
  var errorAdresse = 0;

  // 0 = No Error | 1 = Error

  addUser.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(addUser);
    const data = Object.fromEntries(formData);

    if (data.nom == " ") {
      errorNom = 1;
      nom_error.innerHTML = "Nom Ne Peut Pas Être Vide";
      nom_error.classList = "error_danger";
    } else {
      errorNom = 0;
      nom_error.innerHTML = "Nom Est Succès";
      nom_error.classList = "error_success";
    }
    if (data.prenom == " ") {
      errorPrenom = 1;
      prenom_error.innerHTML = "Prenom Ne Peut Pas Être Vide";
      prenom_error.classList = "error_danger";
    } else {
      errorPrenom = 0;
      prenom_error.innerHTML = "Prenom Est Succès";
      prenom_error.classList = "error_success";
    }
    if (data.email == " ") {
      errorEmail = 1;
      email_error.innerHTML = "Email Ne Peut Pas Être Vide";
      email_error.classList = "error_danger";
    } else {
      errorEmail = 0;
      email_error.innerHTML = "Email Est Succès";
      email_error.classList = "error_success";
    }
    if (data.adresse == " ") {
      errorAdresse = 1;
      adresse_error.innerHTML = "Adresse Ne Peut Pas Être Vide";
      adresse_error.classList = "error_danger";
    } else {
      errorAdresse = 0;
      adresse_error.innerHTML = "Adresse Est Succès";
      adresse_error.classList = "error_success";
    }

    var checkErrorPass = " ";
    if (data.password.length < 8) {
      checkErrorPass += "Mot De Passe Doit Comporter Au Moins 8 Caractères ";
    }
    if (!/[A-Z]/.test(data.password)) {
      checkErrorPass +=
        "Mot De Passe Doit Comporter Au Moins Une Lettre Majuscule ";
    }
    if (!/[a-z]/.test(data.password)) {
      checkErrorPass +=
        "Mot De Passe Doit Comporter Au Moins Une Lettre Minuscule ";
    }
    if (!/\d/.test(data.password)) {
      checkErrorPass += "Mot De Passe Doit Comporter Au Moins Un Nombre ";
    }
    if (data.password == " ") {
      checkErrorPass = "Mot De Passe Ne Peut Pas Être Vide";
    }

    if (checkErrorPass == " ") {
      errorPass = 0;
      pass_error.innerHTML = "Mot De Passe Est Succès";
      pass_error.classList = "error_success";
    } else {
      errorPass = 1;
      pass_error.innerHTML = checkErrorPass;
      pass_error.classList = "error_danger";
    }

    if (
      errorNom == 0 &&
      errorPrenom == 0 &&
      errorEmail == 0 &&
      errorPass == 0 &&
      errorAdresse == 0
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
            location.replace(`${URLROOT}admin/utilisateurs`);
          } else {
            email_error.innerHTML = data.messageEmail;
            email_error.classList = "error_danger";
          }
        });
    }
  });
}
