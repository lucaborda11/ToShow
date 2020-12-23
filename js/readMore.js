function showHidde(id, btn) {

    var language = !localStorage.getItem('language') ? 'en' : localStorage.getItem('language')

    if (id.style.display == 'block'){
        id.style.display = 'none'
        
        if(language == 'en'){
            btn.value = '<<Read more>>'
        } else {
            btn.value = '<<Leer mas>>'
        }

    } else {
        id.style.display = 'block'
                
        if(language == 'en'){
            btn.value = '<<Read less>>'
        } else {
            btn.value = '<<Leer menos>>'
        }
    }
}