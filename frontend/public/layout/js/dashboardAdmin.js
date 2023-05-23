const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

if ((!ID_USER || ID_USER === "null" || ID_USER === "undefined") || (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 0) ) {
    location.replace(`${URLROOT}admin`)
}else{
    function addUser() {
        location.replace(`${URLROOT}admin/addUser`);
    }
    function seeUsers() {
        location.replace(`${URLROOT}admin/seeUsers`);
    }
    function editDeleteUser() {
        location.replace(`${URLROOT}admin/utilisateurs`);
    }

    var totalUsers = document.getElementById('totalUsers')
    fetch(`${BACK_URLROOT}Users/TotalUsersAdminFournisseur/0`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(data => { 
            totalUsers.innerText = data.result
        })
}