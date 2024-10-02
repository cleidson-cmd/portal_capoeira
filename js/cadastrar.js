function cadastrar(event) {
    var formulario = document.getElementById('formulario');
    /* formulario.event.preventDefault() 
    imagem: ${formulario.imagem.value} 
     logo: ${formulario.logo.value}
    */
    var url
    if (formulario.nome.value && formulario.menssagem.value) {
        url = `https://api.whatsapp.com/send?phone=5571987364641&text=Olá, me chamo ${formulario.nome.value}. ${formulario.email.value ?? ''} ${formulario.menssagem.value}`;

        enviarCagastro(url)

    } else {
        alert("O campo Nome e Menssagem são obrigatórios ")
    }

}

function enviarCagastro(url) {
    var win = window.open(url, '_blank');
    win.focus();
}






