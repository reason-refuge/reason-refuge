const ID_USER = localStorage.getItem("ID_USER");

if (!ID_USER || ID_USER === "null" || ID_USER === "undefined") {
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