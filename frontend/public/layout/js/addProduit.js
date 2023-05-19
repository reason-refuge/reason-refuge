const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

if (
  !ID_USER ||
  ID_USER === "null" ||
  ID_USER === "undefined" ||
  (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 1)
) {
  location.replace(`${URLROOT}users`);
} else {
  const addProduit = document.getElementById("addProduit");

  const nom_error = document.getElementById("nom_error");
  const quantité_error = document.getElementById("quantité_error");
  const prix_error = document.getElementById("prix_error");

  const changeQuantite = document.getElementById("changeQuantite");

  var errorNom = 0;
  var errorQuantité = 0;
  var errorPrix = 0;

  // 0 = No Error | 1 = Error

  changeQuantite.addEventListener('input',()=>{
    if(changeQuantite.value<1){
      changeQuantite.value=1
    }
  })

  addProduit.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(addProduit);
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
    if (data.quantité == " ") {
      errorQuantité = 1;
      quantité_error.innerHTML = "Quantité Ne Peut Pas Être Vide";
      quantité_error.classList = "error_danger";
    } else {
      errorQuantité = 0;
      quantité_error.innerHTML = "Quantité Est Succès";
      quantité_error.classList = "error_success";
    }
  
    if (data.prix == " ") {
      errorPrix = 1;
      prix_error.innerHTML = "Prix Ne Peut Pas Être Vide";
      prix_error.classList = "error_danger";
    } else {
      errorPrix = 0;
      prix_error.innerHTML = "Prix Est Succès";
      prix_error.classList = "error_success";
    }
    if (errorNom == 0 && errorQuantité == 0 && errorPrix == 0) {
      fetch(`${BACK_URLROOT}Produits/AddProduit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          if (data.message == "Produit Added") {
            location.replace(`${URLROOT}users/produits`);
          }
        });
    }
  });
}
