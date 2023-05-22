const ID_USER = localStorage.getItem("ID_USER");

const AlertId = document.getElementById("AlertId");
const saidBar = document.getElementById("saidBar");

function cacherAlert() {
  AlertId.setAttribute("onclick", "afficherAlert()");
  saidBar.setAttribute("class", "topMe");
}

function afficherAlert() {
  AlertId.setAttribute("onclick", "cacherAlert()");
  saidBar.setAttribute("class", "bottomMe");

  fetch(`${BACK_URLROOT}Alertes/getAlertesByUserId/${ID_USER}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.message == "Alertes Issets") {
        var result = data.result
        var alertes = ``;
        for (let i = 0; i < result.length; i++) {
          alertes += `<div class="alert alert-${result[i].type_alerte} AlertMe" role="alert" id=divAlert${result[i].id_alerte}>
                        <dateMe>${result[i].date_alerte}</dateMe>
                        <span>${result[i].message_alerte}</span>
                        <i class = "fa fa-close" onclick = "deleteAlert(${result[i].id_alerte})"></i>
                    </div>`;
        }
        alertes += 'Alerts'
        saidBar.innerHTML = alertes;
      } else {
        saidBar.innerHTML = data.message;
      }
    });
}
function deleteAlert(id) {
    const divAlert = document.getElementById(`divAlert${id}`);

    fetch(`${BACK_URLROOT}Alertes/deleteAlerte/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Alerte Deleted") {
            divAlert.style.display = "none";
        }
      });
}
function addAlerteNonLierAuStock(id_alerte_config) {
  fetch(
    `${BACK_URLROOT}Alertes/getIdsAlerteConfig/${id_alerte_config}/${ID_USER}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      if (data.message == "Ids Alerte Config Isset") {
        var result = data.result;
        for (let i = 0; i < result.length; i++) {
          const ids = result[i];
          fetch(
            `${BACK_URLROOT}Alertes/addAlerte/${ids}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
            .then(res => res.json())
            .then(data => {console.log(data);
            });
        }
      }
    });
}