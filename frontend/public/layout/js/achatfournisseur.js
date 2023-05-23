const ROLE_USER = localStorage.getItem("ROLE_USER");
const ID_USER = localStorage.getItem("ID_USER");
if (
  !ID_USER ||
  ID_USER === "null" ||
  ID_USER === "undefined" ||
  (ROLE_USER == 3 || ROLE_USER == 1 || ROLE_USER == 0)
) {
  location.replace(`${URLROOT}fournisseur`);
} else {
  const cardsProduct = document.getElementById("cardsProduct");
  const noProduit = document.getElementById("noProduit");

  fetch(`${BACK_URLROOT}Stocks/GetProduitsForUser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.message == "Products Isset In Stock") {
        var card = ``;
        for (let i = 0; i < data.result.length; i++) {
          card += `<div class="card cardMe">
                          <div class="card-body">
                              <h5 class="card-title">${data.result[i]
                                .nom_produit}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">${data
                                .result[i].price_produit}DH</h6>
                              <span class="btn btn-success" onclick="achatFournisseur(${data
                                .result[i].id_stock})">
                                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              </span>
                          </div>
                      </div>`;
        }
        cardsProduct.innerHTML = card;
      } else {
        noProduit.innerText = "Pas De Produit";
      }
    });
  function achatFournisseur(id) {
    const achatProduit = document.getElementById("achatProduit");
    fetch(`${BACK_URLROOT}Stocks/SearchProduitsById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == "Produit Isset In Stock") {
          var result = data.result;
          var form = `<form id="achatProduitForm">
                          <div class="divForm">
                              <label for="nom">Nom</label>
                              <input type="text" name="nom" placeholder="Nom" readonly value="${result.nom_produit}">
                              <input type="hidden" name="id_vendeur" value="${result.id_acheteur}">
                              <input type="hidden" name="id_produit" value="${result.id_produit}">
                          </div>
                          <div class="divForm">
                              <label for="prix">Prix</label>
                              <input type="text" name="prix" placeholder="Prix" readonly value="${result.price_produit}" id="prix_produit">
                          </div>
                          <div class="divForm">
                              <label for="quantité">Quantité</label>
                              <input type="number" name="quantité" placeholder="Quantité" required id="changeQuantite" value="1">
                          </div>
                          <div class="divForm">
                              <input type="submit" value="Achat">
                          </div>
                        </form>
                        <span id="alertInForm"></span>`;
          achatProduit.innerHTML = form;
          achatProduit.style.display = "block";

          const prix_produit = document.getElementById("prix_produit");
          const changeQuantite = document.getElementById("changeQuantite");
          const achatProduitForm = document.getElementById("achatProduitForm");
          const alertInForm = document.getElementById("alertInForm");

          changeQuantite.addEventListener("input", () => {
            if (changeQuantite.value < 1) {
              changeQuantite.value = 1;
              prix_produit.value = result.price_produit;
            } else {
              prix_produit.value = result.price_produit * changeQuantite.value;
            }
          });

          achatProduitForm.addEventListener("submit", event => {
            event.preventDefault();
            const formData = new FormData(achatProduitForm);
            const data = Object.fromEntries(formData);

            if (data.quantité > result.quantite_stock) {
              var alertDiv = `<div class="alert alert-warning" role="alert">
                                      La quantité ${data.quantité} que vous entrer est superieur de ${result.quantite_stock} qui est la quantité qui se trouve dans le stock. Entrez-une nouvelle quantité
                                  </div>`;
              alertInForm.innerHTML = alertDiv;
            } else {
              var alertDiv = `<div class="alert alert-success" role="alert">
                                      La commande est confirmé
                                  </div>`;
              alertInForm.innerHTML = alertDiv;

              var newQuantite = result.quantite_stock - data.quantité;
              var id_vendeur = data.id_vendeur;
              var roleVendeur = 0;

              var id_acheteur = ID_USER;
              var quantiteAchete = data.quantité;
              var montantTotalAchat = data.prix;
              var id_produit = data.id_produit;

              var achatData = {
                id_stock: parseInt(id),
                newQuantite: parseInt(newQuantite),
                id_produit: parseInt(id_produit),
                id_vendeur: parseInt(id_vendeur),
                id_acheteur: parseInt(id_acheteur),
                quantiteAchete: parseInt(quantiteAchete),
                montantTotalAchat: parseFloat(montantTotalAchat),
                roleVendeur: parseInt(roleVendeur)
              };
              // console.log(achatData);
              // throw new Error("Terminating the script");
              fetch(`${BACK_URLROOT}Achats/AddFournisseurUser`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(achatData)
              })
                .then(res => res.json())
                .then(data => {
                  setTimeout(function() {
                    location.reload();
                  }, 1000);
                });
            }
          });
        }
      });
  }
}
