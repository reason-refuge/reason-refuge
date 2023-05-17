const ID_USER = localStorage.getItem("ID_USER");

if (!ID_USER || ID_USER === "null" || ID_USER === "undefined") {
    location.replace(`${URLROOT}admin`)
}else{
    const tbodyTrs = document.getElementById('tbodyTrs')
    const noUser = document.getElementById('noUser')
    fetch(`${BACK_URLROOT}Users/GetUsersAdminFournisseur/0`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(data => {
            if (data.message == 'Users Issets') {
                var tr = ``
                for (let i = 0; i < data.result.length; i++) {
                    tr += `<tr>
                            <td>${data.result[i].id_user}</td>
                            <td>${data.result[i].nom_user}</td>
                            <td>${data.result[i].prenom_user}</td>
                            <td>${data.result[i].email_user}</td>
                            <td>${data.result[i].adresse_user}</td>
                           </tr>`
                }
                tbodyTrs.innerHTML=tr
            } else {
                noUser.innerText= "Pas D'Utilisateur"
            }

        })
}