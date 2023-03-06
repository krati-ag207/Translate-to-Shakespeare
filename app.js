var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
// console.log(txtInput)
var outputDiv = document.querySelector("#output")
// outputDiv.innerHTML = "Krati Agrawal"

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
}

function clickEventHandler(){

    var inputTxt = txtInput.value   // taking input


    // calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated
        outputDiv.innerHTML = translateText // output
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)

