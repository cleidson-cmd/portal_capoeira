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

//selecionar voz
/* let voices = document.getElementById('voices')
console.log('abriu normal')
window.onload = () => {
    let voicesList = window.speechSynthesis.getVoices()
    console.log(voicesList)
    for (let voz in voicesList) {
        let optionEl = document.createElement('option')
        optionEl.setAttribute('value', voz)
        optionEl.innerText = voz.name
        voices.appendChild(optionEl)
    }
} */

