const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

if (
  !ID_USER ||
  ID_USER === "null" ||
  ID_USER === "undefined" ||
  (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 1)
) {
  location.replace(`${URLROOT}admin`);
} else {
  const tbodyTrs = document.getElementById("tbodyTrs");
  const noProduit = document.getElementById("noProduit");
  const searchByIDInput = document.getElementById("searchByIDInput");
  const searchInput = document.getElementById("searchInput");
  fetch(`${BACK_URLROOT}Produits/GetProduits`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.message == "Produits Issets") {
        var tr = ``;
        for (let i = 0; i < data.result.length; i++) {
          tr += `<tr id="tr${data.result[i].id_produit}">
                        <td>${data.result[i].id_produit}</td>
                        <td id="nom${data.result[i].id_produit}">${data.result[
            i
          ].nom_produit}</td>
                        <td id="quantité${data.result[i].id_produit}">${data
            .result[i].quantite_produit}</td>
                        <td id="prix${data.result[i].id_produit}">${data
            .result[i].price_produit}DH</td>
                        <td>
                          <span class="btnActionUser">
                                  <i class ="fa fa-edit" onclick="editProduit(${data
                                    .result[i].id_produit})"></i>
                                  <i class ="fa fa-close" onclick="deleteProduit(${data
                                    .result[i].id_produit})"></i>
                          </span>
                        </td>
                      </tr>`;
        }
        tbodyTrs.innerHTML = tr;
      } else {
        noProduit.innerText = "Pas De Produit";
      }
    });

  searchByIDInput.addEventListener("input", () => {
    var valueInput = searchByIDInput.value;
    if (isNaN(valueInput)) {
      searchByIDInput.value = "";
      fetch(`${BACK_URLROOT}Produits/GetProduits`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.message == "Produits Issets") {
            var tr = ``;
            for (let i = 0; i < data.result.length; i++) {
              tr += `<tr id="tr${data.result[i].id_produit}">
                        <td>${data.result[i].id_produit}</td>
                        <td id="nom${data.result[i].id_produit}">
                          ${data.result[i].nom_produit}
                        </td>
                        <td id="quantité${data.result[i].id_produit}">
                          ${data.result[i].quantite_produit}
                        </td>
                        <td id="prix${data.result[i].id_produit}">
                          ${data.result[i].price_produit}DH
                        </td>
                        <td>
                          <span class="btnActionUser">
                                  <i class ="fa fa-edit" onclick="editProduit(${data
                                    .result[i].id_produit})"></i>
                                  <i class ="fa fa-close" onclick="deleteProduit(${data
                                    .result[i].id_produit})"></i>
                          </span>
                        </td>
                      </tr>`;
            }
            tbodyTrs.innerHTML = tr;
            noProduit.innerText = "";
          } else {
            noProduit.innerText = "Pas De Produit";
          }
        });
    } else {
      fetch(`${BACK_URLROOT}Produits/SearchProduitsById/${valueInput}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          if (data.message == "Produit Isset") {
            tr = `<tr id="tr${data.result.id_produit}">
                        <td>${data.result.id_produit}</td>
                        <td id="nom${data.result.id_produit}">
                          ${data.result.nom_produit}
                        </td>
                        <td id="quantité${data.result.id_produit}">
                          ${data.result.quantite_produit}
                        </td>
                        <td id="prix${data.result.id_produit}">
                          ${data.result.price_produit}DH
                        </td>
                        <td>
                          <span class="btnActionUser">
                            <i class ="fa fa-edit" onclick="editProduit(${data
                              .result.id_produit})"></i>
                            <i class ="fa fa-close" onclick="deleteProduit(${data
                              .result.id_produit})"></i>
                          </span>
                        </td>
                      </tr>`;
            tbodyTrs.innerHTML = tr;
            noProduit.innerText = "";
          } else {
            tbodyTrs.innerHTML = "";
            noProduit.innerText = `Pas De Produit Avec Id = ${valueInput}`;
          }
        });
    }
  });
  function editProduit(id) {
    const formEditDiv = document.getElementById("formEditDiv");
    fetch(`${BACK_URLROOT}Produits/SearchProduitsById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Produit Isset") {
          var result = data.result;
          var form = `<form id="editProduit">
                          <div class="divForm">
                              <label for="nom">Nom</label>
                              <input type="text" name="nom" placeholder="Nom" required value="${result.nom_produit}">
                              <span id="nom_error"></span>
                          </div>
                          <div class="divForm">
                          <label for="quantité">Quantité</label>
                              <input type="number" name="quantité" placeholder="Quantité" required id="changeQuantite" value="${result.quantite_produit}">
                              <span id="quantité_error"></span>
                          </div>
                          <div class="divForm">
                          <label for="prix">Prix</label>
                          <input type="text" name="prix" placeholder="Prix" required value="${result.price_produit}">
                          <span id="prix_error"></span>
                          </div>
                          <div class="divForm">
                              <input type="submit" value="Save">
                          </div>
                      </form>`;
          formEditDiv.innerHTML = form;
          formEditDiv.style.display = "block";

          const editProduit = document.getElementById("editProduit");

          const nom_error = document.getElementById("nom_error");
          const quantité_error = document.getElementById("quantité_error");
          const prix_error = document.getElementById("prix_error");

          var errorNom = 0;
          var errorQuantité = 0;
          var errorPrix = 0;

          // 0 = No Error | 1 = Error
          changeQuantite.addEventListener('input',()=>{
            if(changeQuantite.value<1){
              changeQuantite.value=1
            }
          })

          editProduit.addEventListener("submit", event => {
            event.preventDefault();
            const formData = new FormData(editProduit);
            const data = Object.fromEntries(formData);

            var newNom = data.nom;
            var newQuantité = data.quantité;
            var newPrix = data.prix;

            if (newNom == " ") {
              errorNom = 1;
              nom_error.innerHTML = "Nom Ne Peut Pas Être Vide";
              nom_error.classList = "error_danger";
            } else {
              errorNom = 0;
              nom_error.innerHTML = "Nom Est Succès";
              nom_error.classList = "error_success";
            }
            if (newQuantité == " ") {
              errorQuantité = 1;
              quantité_error.innerHTML = "Quantité Ne Peut Pas Être Vide";
              quantité_error.classList = "error_danger";
            } else {
              errorQuantité = 0;
              quantité_error.innerHTML = "Quantité Est Succès";
              quantité_error.classList = "error_success";
            }
            if (newPrix == " ") {
              errorPrix = 1;
              prix_error.innerHTML = "Prix Ne Peut Pas Être Vide";
              prix_error.classList = "error_danger";
            } else {
              errorPrix = 0;
              prix_error.innerHTML = "Prix Est Succès";
              prix_error.classList = "error_success";
            }

            if (errorNom == 0 && errorQuantité == 0 && errorPrix == 0) {
              fetch(`${BACK_URLROOT}Produits/UpdateProduit/${id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.message == "Produit Updated") {
                    formEditDiv.style.display = "none";

                    const nom = document.getElementById(`nom${id}`);
                    const quantité = document.getElementById(`quantité${id}`);
                    const prix = document.getElementById(`prix${id}`);

                    nom.innerText = newNom;
                    quantité.innerText = newQuantité;
                    var newPrixDH=`${newPrix}DH`
                    console.log(newPrixDH);
                    console.log(prix);
                    prix.innerText = newPrixDH;
                  }
                });
            }
          });
        }
      });
  }
  function deleteProduit(id) {
    fetch(`${BACK_URLROOT}Produits/Delete/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Produit Deleted") {
          const tr = document.getElementById(`tr${id}`);
          tr.style.display = "none";
        }
      });
  }
  searchInput.addEventListener("input", () => {
    var valueInput = searchInput.value;
    fetch(`${BACK_URLROOT}Produits/SearchProduits/${valueInput}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.message == "Produits Issets") {
          var tr = ``;
          for (let i = 0; i < data.result.length; i++) {
            tr += `<tr>
                            <td>${data.result[i].id_produit}</td>
                            <td>${data.result[i].nom_produit}</td>
                            <td>${data.result[i].quantite_produit}</td>
                            <td>${data.result[i].price_produit}DH</td>
                            <td>
                                <span class="btnActionUser">
                                    <i class ="fa fa-edit" onclick="editProduit(${data
                                      .result[i].id_produit})"></i>
                                    <i class ="fa fa-close" onclick="deleteProduit(${data
                                      .result[i].id_produit})"></i>
                                </span>
                            </td>
                           </tr>`;
          }
          tbodyTrs.innerHTML = tr;
          noProduit.innerText = "";
        } else {
          tbodyTrs.innerHTML = "";
          noProduit.innerText = `Pas De Produit Avec ${valueInput}`;
        }
      });
  });
}
