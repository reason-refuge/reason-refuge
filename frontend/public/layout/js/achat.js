const ID_USER = localStorage.getItem("ID_USER");
const ROLE_USER = localStorage.getItem("ROLE_USER");

if ((!ID_USER || ID_USER === "null" || ID_USER === "undefined") || (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 1)) {
    location.replace(`${URLROOT}users`);
} else {
    const cardsProduct = document.getElementById("cardsProduct");

}