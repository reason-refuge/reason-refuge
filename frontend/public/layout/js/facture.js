const ROLE_USER = localStorage.getItem("ROLE_USER");

if (
  !ID_USER ||
  ID_USER === "null" ||
  ID_USER === "undefined" ||
  (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 1)
) {
  location.replace(`${URLROOT}users`);
} else {
  const archive_desarchive = document.getElementById("archive_desarchive");
  const exportTable = document.getElementById("exportTable");
  const tbodyTrs = document.getElementById("tbodyTrs");
  const noFacture = document.getElementById("noFacture");

  cacherLesArchives();

  function afficherLesArchives() {
    var span = `<i class="fa fa-eye-slash" aria-hidden="true"></i> Cacher Les Factures Archivées`;
    archive_desarchive.innerHTML = span;
    archive_desarchive.setAttribute("onclick", "cacherLesArchives()");
    fetch(`${BACK_URLROOT}Factures/getAllFacture/${ID_USER}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Factures Issets") {
          var result = data.result;
          tr = ``;
          for (let i = 0; i < result.length; i++) {
            var archivation;
            if (result[i].archive == 0) {
              archivation = "Non Archiver";
              tr += `<tr id="tr${result[i].id_facture}">
                        <td>${result[i].id_facture}</td>
                        <td>${result[i].date_facture}</td>
                        <td>${result[i].montantTotal_facture}DH</td>
                        <td id="archivation${result[i]
                          .id_facture}">${archivation}</td>
                        <td>
                          <span class="btnActionUser">
                            <i id = "changeFunction${result[i]
                              .id_facture}" class ="fa fa-eye" aria-hidden="true" onclick="archiver(${result[
                i
              ].id_facture},'AllFacture')"></i>
                            <i class ="fa fa-close" onclick="supprimer(${result[
                              i
                            ].id_facture})"></i>
                          </span>
                        </td>
                      </tr>`;
            }
            if (result[i].archive == 1) {
              archivation = "Archiver";
              tr += `<tr id="tr${result[i].id_facture}">
                        <td>${result[i].id_facture}</td>
                        <td>${result[i].date_facture}</td>
                        <td>${result[i].montantTotal_facture}DH</td>
                        <td id="archivation${result[i]
                          .id_facture}">${archivation}</td>
                        <td>
                          <span class="btnActionUser">
                            <i id = "changeFunction${result[i]
                              .id_facture}" class ="fa fa-eye-slash" aria-hidden="true" onclick="desArchiver(${result[
                i
              ].id_facture})"></i>
                            <i class ="fa fa-close" onclick="supprimer(${result[
                              i
                            ].id_facture})"></i>
                          </span>
                        </td>
                      </tr>`;
            }
          }
          tbodyTrs.innerHTML = tr;
          noFacture.innerText = "";
        } else {
          tbodyTrs.innerHTML = "";
          noFacture.innerText = data.message;
        }
      });
  }
  function cacherLesArchives() {
    var span = `<i class="fa fa-eye" aria-hidden="true"></i> Afficher Les Factures Archivées`;
    archive_desarchive.innerHTML = span;
    archive_desarchive.setAttribute("onclick", "afficherLesArchives()");
    fetch(`${BACK_URLROOT}Factures/getFactureNonArchiver/${ID_USER}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Factures Issets") {
          var result = data.result;
          console.log(data);
          tr = ``;
          for (let i = 0; i < result.length; i++) {
            var archivation = "Non Archiver";
            tr += `<tr id="tr${result[i].id_facture}">
                        <td>${result[i].id_facture}</td>
                        <td>${result[i].date_facture}</td>
                        <td>${result[i].montantTotal_facture}DH</td>
                        <td id="archivation${result[i]
                          .id_facture}">${archivation}</td>
                        <td>
                          <span class="btnActionUser">
                            <i id = "changeFunction${result[i]
                              .id_facture}" class ="fa fa-eye" aria-hidden="true" onclick="archiver(${result[
              i
            ].id_facture},'FactureNonArchiver')"></i>
                            <i class ="fa fa-close" onclick="supprimer(${result[
                              i
                            ].id_facture})"></i>
                          </span>
                        </td>
                      </tr>`;
          }
          tbodyTrs.innerHTML = tr;
          noFacture.innerText = "";
        } else {
          tbodyTrs.innerHTML = "";
          noFacture.innerText = data.message;
        }
      });
  }
  function archiver(id, archivation) {
    const trId = document.getElementById(`tr${id}`);
    const changeFunctionId = document.getElementById(`changeFunction${id}`);
    const archivationId = document.getElementById(`archivation${id}`);

    fetch(`${BACK_URLROOT}Factures/archivation/${id}/archiver`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Success") {
          if (archivation == "FactureNonArchiver") {
            trId.style.display = "none";
          }
          if (archivation == "AllFacture") {
            archivationId.innerText = "Archiver";
            changeFunctionId.setAttribute("onclick", `desArchiver(${id})`);
            changeFunctionId.setAttribute("class", "fa fa-eye-slash");
          }
        }
      });
  }
  function desArchiver(id) {
    const changeFunctionId = document.getElementById(`changeFunction${id}`);
    const archivationId = document.getElementById(`archivation${id}`);

    fetch(`${BACK_URLROOT}Factures/archivation/${id}/desArchiver`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Success") {
          archivationId.innerText = "Non Archiver";
          changeFunctionId.setAttribute(
            "onclick",
            `archiver(${id},"AllFacture")`
          );
          changeFunctionId.setAttribute("class", "fa fa-eye");
        }
      });
  }
  function supprimer(id) {
    const trId = document.getElementById(`tr${id}`);

    fetch(`${BACK_URLROOT}Factures/deleteFacture/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Facture Deleted") {
            trId.style.display = "none";
        }
      });
  }
  function exportFacture(filename = "") {
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableHTML = exportTable.outerHTML.replace(/ /g, "%20");

    // Specify file name
    filename = filename ? filename + ".xls" : "Table_Du_Facture.xls";

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      var blob = new Blob(["\ufeff", tableHTML], {
        type: dataType
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = "data:" + dataType + ", " + tableHTML;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }
  }
}
