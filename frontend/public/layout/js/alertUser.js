const AlertId = document.getElementById('AlertId');
const saidBar = document.getElementById('saidBar');

function cacherAlert() {
    AlertId.setAttribute('onclick', 'afficherAlert()')
    saidBar.setAttribute('class', 'topMe')
}

function afficherAlert() {
    AlertId.setAttribute('onclick', 'cacherAlert()')
    saidBar.setAttribute('class', 'bottomMe')
}