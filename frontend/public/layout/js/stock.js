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

  fetch(`${BACK_URLROOT}Stocks/getProductInStockByIdAcheteur/${ID_USER}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.message == "Products Isset In Stock") {
        var tr = ``;
        for (let i = 0; i < data.result.length; i++) {
          tr += `<tr id="tr${data.result[i].id_stock}">
                    <td>${data.result[i].id_stock}</td>
                    <td>${data.result[i].date_stock}</td>
                    <td>${data.result[i].montantTotal_stock}DH</td>
                    <td>${data.result[i].nom_produit}</td>
                    <td>${data.result[i].nom_user} ${data.result[i].prenom_user}</td>
                    <td>${data.result[i].quantite_stock}</td>
                    <td>
                      <span class="btnActionUser">
                        <i style="background-color: red;" class ="fa fa-close" onclick="deleteProduit(${data.result[i].id_stock})"></i>
                      </span>
                    </td>
                  </tr>`;
        }
        tbodyTrs.innerHTML = tr;
      } else {
        noProduit.innerText = data.message;
      }
    });
    function deleteProduit(id) {
      fetch(`${BACK_URLROOT}Stocks/delete/${id}`, {
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
            addAlerteNonLierAuStock(2)
          }
        });
    }
}
