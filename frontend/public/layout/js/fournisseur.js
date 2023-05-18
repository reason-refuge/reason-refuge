const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

if ((!ID_USER || ID_USER === "null" || ID_USER === "undefined") || (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 1)) {
  location.replace(`${URLROOT}admin`);
} else {
  const tbodyTrs = document.getElementById("tbodyTrs");
  const noFournisseur = document.getElementById("noFournisseur");
  const searchByIDInput = document.getElementById("searchByIDInput");
  const searchInput = document.getElementById("searchInput");
  fetch(`${BACK_URLROOT}Users/GetUsersAdminFournisseur/2`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.message == "Users Issets") {
        var tr = ``;
        for (let i = 0; i < data.result.length; i++) {
          tr += `<tr id="tr${data.result[i].id_user}">
                        <td>${data.result[i].id_user}</td>
                        <td id="nom${data.result[i].id_user}">${data.result[i]
            .nom_user}</td>
                        <td id="prenom${data.result[i].id_user}">${data.result[
            i
          ].prenom_user}</td>
                        <td id="email${data.result[i].id_user}">${data.result[i]
            .email_user}</td>
                        <td id="adresse${data.result[i].id_user}">${data.result[
            i
          ].adresse_user}</td>
                        <td>
                          <span class="btnActionUser">
                                  <i class ="fa fa-edit" onclick="editFournisseur(${data
                                    .result[i].id_user})"></i>
                                  <i class ="fa fa-close" onclick="deleteFournisseur(${data
                                    .result[i].id_user})"></i>
                          </span>
                        </td>
                      </tr>`;
        }
        tbodyTrs.innerHTML = tr;
      } else {
        noFournisseur.innerText = "Pas D'Fournisseur";
      }
    });

  searchByIDInput.addEventListener("input", () => {
    var valueInput = searchByIDInput.value;
    if (isNaN(valueInput)) {
      searchByIDInput.value = "";
      fetch(`${BACK_URLROOT}Users/GetUsersAdminFournisseur/2`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.message == "Users Issets") {
            var tr = ``;
            for (let i = 0; i < data.result.length; i++) {
              tr += `<tr id="tr${data.result[i].id_user}">
                        <td>${data.result[i].id_user}</td>
                        <td id="nom${data.result[i].id_user}">
                          ${data.result[i].nom_user}
                        </td>
                        <td id="prenom${data.result[i].id_user}">
                          ${data.result[i].prenom_user}
                        </td>
                        <td id="email${data.result[i].id_user}">
                          ${data.result[i].email_user}
                        </td>
                        <td id="adresse${data.result[i].id_user}">
                          ${data.result[i].adresse_user}
                        </td>
                        <td>
                          <span class="btnActionUser">
                                  <i class ="fa fa-edit" onclick="editFournisseur(${data
                                    .result[i].id_user})"></i>
                                  <i class ="fa fa-close" onclick="deleteFournisseur(${data
                                    .result[i].id_user})"></i>
                          </span>
                        </td>
                      </tr>`;
            }
            tbodyTrs.innerHTML = tr;
            noFournisseur.innerText = "";
          } else {
            noFournisseur.innerText = "Pas D'Fournisseur";
          }
        });
    } else {
      fetch(
        `${BACK_URLROOT}Users/SearchUsersAdminFournisseurById/2/${valueInput}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          if (data.message == "User Isset") {
            tr = `<tr id="tr${data.result.id_user}">
                        <td>${data.result.id_user}</td>
                        <td id="nom${data.result.id_user}">
                          ${data.result.nom_user}
                        </td>
                        <td id="prenom${data.result.id_user}">
                          ${data.result.prenom_user}
                        </td>
                        <td id="email${data.result.id_user}">
                          ${data.result.email_user}
                        </td>
                        <td id="adresse${data.result.id_user}">
                          ${data.result.adresse_user}
                        </td>
                        <td>
                          <span class="btnActionUser">
                            <i class ="fa fa-edit" onclick="editFournisseur(${data.result.id_user})"></i>
                            <i class ="fa fa-close" onclick="deleteFournisseur(${data.result.id_user})"></i>
                          </span>
                        </td>
                      </tr>`;
            tbodyTrs.innerHTML = tr;
            noFournisseur.innerText = "";
          } else {
            tbodyTrs.innerHTML = "";
            noFournisseur.innerText = `Pas D'Fournisseur Avec Id = ${valueInput}`;
          }
        });
    }
  });
  function editFournisseur(id) {
    const formEditDiv = document.getElementById("formEditDiv");
    fetch(`${BACK_URLROOT}Users/Info/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Account Info") {
          var result = data.result;
          var form = `<form id="editFournisseur">
                          <div class="divForm">
                              <label for="nom">Nom</label>
                              <input type="text" name="nom" placeholder="Nom" required value="${result.nom_user}">
                              <span id="nom_error"></span>
                          </div>
                          <div class="divForm">
                              <label for="prenom">Prenom</label>
                              <input type="text" name="prenom" placeholder="Prenom" required value="${result.prenom_user}">
                              <span id="prenom_error"></span>
                          </div>
                          <div class="divForm">
                              <label for="adresse">Adresse</label>
                              <input type="text" name="adresse" placeholder="Adresse" required value="${result.adresse_user}">
                              <span id="adresse_error"></span>
                          </div>
                          <div class="divForm">
                              <input type="submit" value="Save">
                          </div>
                      </form>`;
          formEditDiv.innerHTML = form;
          formEditDiv.style.display = "block";

          const editFournisseur = document.getElementById("editFournisseur");

          const nom_error = document.getElementById("nom_error");
          const prenom_error = document.getElementById("prenom_error");
          const adresse_error = document.getElementById("adresse_error");

          var errorNom = 0;
          var errorPrenom = 0;
          var errorAdresse = 0;

          // 0 = No Error | 1 = Error

          editFournisseur.addEventListener("submit", event => {
            event.preventDefault();
            const formData = new FormData(editFournisseur);
            const data = Object.fromEntries(formData);

            var newNom = data.nom;
            var newPrenom = data.prenom;
            var newAdresse = data.adresse;

            if (newNom == " ") {
              errorNom = 1;
              nom_error.innerHTML = "Nom Ne Peut Pas Être Vide";
              nom_error.classList = "error_danger";
            } else {
              errorNom = 0;
              nom_error.innerHTML = "Nom Est Succès";
              nom_error.classList = "error_success";
            }
            if (newPrenom == " ") {
              errorPrenom = 1;
              prenom_error.innerHTML = "Prenom Ne Peut Pas Être Vide";
              prenom_error.classList = "error_danger";
            } else {
              errorPrenom = 0;
              prenom_error.innerHTML = "Prenom Est Succès";
              prenom_error.classList = "error_success";
            }
            if (newAdresse == " ") {
              errorAdresse = 1;
              adresse_error.innerHTML = "Adresse Ne Peut Pas Être Vide";
              adresse_error.classList = "error_danger";
            } else {
              errorAdresse = 0;
              adresse_error.innerHTML = "Adresse Est Succès";
              adresse_error.classList = "error_success";
            }

            if (errorNom == 0 && errorPrenom == 0 && errorAdresse == 0) {
              fetch(`${BACK_URLROOT}Users/UpdateUser/${id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.message == "Account Updated") {
                    formEditDiv.style.display = "none";

                    const nom = document.getElementById(`nom${id}`);
                    const prenom = document.getElementById(`prenom${id}`);
                    const adresse = document.getElementById(`adresse${id}`);

                    nom.innerText = newNom;
                    prenom.innerText = newPrenom;
                    adresse.innerText = newAdresse;
                  }
                });
            }
          });
        }
      });
  }
  function deleteFournisseur(id) {
    fetch(`${BACK_URLROOT}Users/Delete/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Account Deleted") {
          const tr = document.getElementById(`tr${id}`);
          tr.style.display = "none";
        }
      });
  }
  searchInput.addEventListener("input", () => {
    var valueInput = searchInput.value;
    fetch(
      `${BACK_URLROOT}Users/SearchUsersAdminFournisseurByLibel/2/${valueInput}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.message == "Users Issets") {
          var tr = ``;
          for (let i = 0; i < data.result.length; i++) {
            tr += `<tr>
                            <td>${data.result[i].id_user}</td>
                            <td>${data.result[i].nom_user}</td>
                            <td>${data.result[i].prenom_user}</td>
                            <td>${data.result[i].email_user}</td>
                            <td>${data.result[i].adresse_user}</td>
                            <td>
                                <span class="btnActionUser">
                                    <i class ="fa fa-edit" onclick="editFournisseur(${data
                                      .result[i].id_user})"></i>
                                    <i class ="fa fa-close" onclick="deleteFournisseur(${data
                                      .result[i].id_user})"></i>
                                </span>
                            </td>
                           </tr>`;
          }
          tbodyTrs.innerHTML = tr;
          noFournisseur.innerText = "";
        } else {
          tbodyTrs.innerHTML = "";
          noFournisseur.innerText = `Pas D'Fournisseur Avec ${valueInput}`;
        }
      });
  });
}
