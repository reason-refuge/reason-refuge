const ID_USER = localStorage.getItem("ID_USER");

if (!ID_USER || ID_USER === "null" || ID_USER === "undefined") {
  location.replace(`${URLROOT}admin`);
} else {
  const tbodyTrs = document.getElementById("tbodyTrs");
  const noUser = document.getElementById("noUser");
  const searchByIDInput = document.getElementById("searchByIDInput");
  const searchInput = document.getElementById("searchInput");
  fetch(`${BACK_URLROOT}Users/GetUsersAdminFournisseur/0`, {
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
          tr += `<tr>
                            <td>${data.result[i].id_user}</td>
                            <td>${data.result[i].nom_user}</td>
                            <td>${data.result[i].prenom_user}</td>
                            <td>${data.result[i].email_user}</td>
                            <td>${data.result[i].adresse_user}</td>
                           </tr>`;
        }
        tbodyTrs.innerHTML = tr;
      } else {
        noUser.innerText = "Pas D'Utilisateur";
      }
    });

  searchByIDInput.addEventListener("input", () => {
    var valueInput = searchByIDInput.value;
    if (isNaN(valueInput)) {
      searchByIDInput.value = "";
      fetch(`${BACK_URLROOT}Users/GetUsersAdminFournisseur/0`, {
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
              tr += `<tr>
                            <td>${data.result[i].id_user}</td>
                            <td>${data.result[i].nom_user}</td>
                            <td>${data.result[i].prenom_user}</td>
                            <td>${data.result[i].email_user}</td>
                            <td>${data.result[i].adresse_user}</td>
                           </tr>`;
            }
            tbodyTrs.innerHTML = tr;
            noUser.innerText = "";
          } else {
            noUser.innerText = "Pas D'Utilisateur";
          }
        });
    } else {
      fetch(
        `${BACK_URLROOT}Users/SearchUsersAdminFournisseurById/0/${valueInput}`,
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
            tr = `<tr>
                        <td>${data.result.id_user}</td>
                        <td>${data.result.nom_user}</td>
                        <td>${data.result.prenom_user}</td>
                        <td>${data.result.email_user}</td>
                        <td>${data.result.adresse_user}</td>
                      </tr>`;
            tbodyTrs.innerHTML = tr;
            noUser.innerText = "";
          } else {
            tbodyTrs.innerHTML = "";
            noUser.innerText = `Pas D'Utilisateur Avec Id = ${valueInput}`;
          }
        });
    }
  });
  searchInput.addEventListener("input", () => {
    var valueInput = searchInput.value;
    fetch(
      `${BACK_URLROOT}Users/SearchUsersAdminFournisseurByLibel/0/${valueInput}`,
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
                           </tr>`;
          }
          tbodyTrs.innerHTML = tr;
          noUser.innerText = "";
        } else {
          tbodyTrs.innerHTML = "";
          noUser.innerText = `Pas D'Utilisateur Avec ${valueInput}`;
        }
      });
  });
}
