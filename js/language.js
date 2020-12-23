
function setSelect(len) {
    document.getElementById('language').value = len
    setLanguage()
    reloadPage()
}

function setLanguage() {
    localStorage.setItem('language', !document.getElementById('language').value ? 'en' : document.getElementById('language').value)
}

function reloadPage() {
    setLanguage();
    location.reload();
}