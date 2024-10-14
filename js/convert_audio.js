function textoParaAudio(idBbotao, IdTexto) {
    let speech = new SpeechSynthesisUtterance()
    let botaoFalar = document.getElementById(idBbotao)
    let ariaTexto = document.getElementById(IdTexto)

    botaoFalar.addEventListener("click", () => {
        speech.text = ariaTexto.innerHTML;
        window.speechSynthesis.speak(speech)
    })
}