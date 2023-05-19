const ID_USER = localStorage.getItem("ID_USER");
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

    function afficherLesArchives(){
        var span = `<i class="fa fa-eye" aria-hidden="true"></i> Afficher Les Factures Archivées`
        archive_desarchive.innerHTML = span
        archive_desarchive.setAttribute('onclick',"cacherLesArchives()")
    }
    function cacherLesArchives(){
        var span = `<i class="fa fa-eye-slash" aria-hidden="true"></i> Cacher Les Factures Archivées`
        archive_desarchive.innerHTML = span
        archive_desarchive.setAttribute('onclick',"afficherLesArchives()")
    }
    function archiver(id) {
        
    }
    function desArchiver(id) {
        
    }
    function exportFacture() {
        
    }
}