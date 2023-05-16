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
        location.replace(`${URLROOT}admin/editDeleteUser`);
    }
}