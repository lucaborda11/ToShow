
function setLanguage() {
    localStorage.setItem('language', !document.getElementById('language').value ? 'es' : document.getElementById('language').value)
}

function reloadPage() {
    setLanguage();
    location.reload();
}