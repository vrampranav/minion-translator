// Getting the required elements
var userInput = document.querySelector("#input-text");
var btnTrans = document.querySelector("#btnTranslate");
var outputText = document.querySelector("#output-text");
var clearBtn = document.querySelector("#clrBtn");

// var mockServerUrl = 'https://mockserver.vrampranav.repl.co/translate/rp.json';
var minionUrl = 'https://api.funtranslations.com/translate/minion.json';
//function to append userInput to url
function urlGenerator(text) {
    // console.log(encodeURI(minionUrl + '?text=' + text))
    return minionUrl + '?text=' + text;
};
//Function Error
function catchError(e) {
    window.location.replace('/error.html');
    return;
}
// TranslateBtn Click Event
btnTrans.addEventListener('click', () => {
    var userText = userInput.value;
    // console.log(userText);
    if (userText.length === 0) {
        alert("Oops! Miniator didn't receive any text...");
        return;
    }

    //Fetching the translation from the mock server
    fetch(urlGenerator(userText.trim()))
        .then(response => response.json())
        .then(jsonResponse => {
            outputText.innerText = jsonResponse.contents.translated;
        })
        .catch(e => catchError(e))
    // console.log(res);
    //Changing the output color to black
    // Making the clear button visible after geting translation!
    outputText.style.color = 'black';
    clearBtn.style.visibility = 'visible';
});

// Clear Button Click Event
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    outputText.innerText = "Minion translation here!";
    outputText.style.color = 'gray';
    clearBtn.style.visibility = 'hidden';
});



