function textoParaAudio(IdTexto) {
    let speech = new SpeechSynthesisUtterance()
    let ariaTexto = document.getElementById(IdTexto)

    var falar = window.speechSynthesis
    if (falar.speaking) {
        falar.cancel()
    } else {
        speech.text = ariaTexto.innerHTML;
        falar.speak(speech)
    }

}

