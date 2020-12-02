// Getting the required elements
var userInput = document.querySelector("#input-text");
var btnTrans = document.querySelector("#btnTranslate");
var outputText = document.querySelector("#output-text");
var clearBtn = document.querySelector("#clrBtn");

var mockServerUrl = 'https://mockserver.vrampranav.repl.co/translate/rp.json';
//function to append userInput to url
function urlGenerator(text) {
    return mockServerUrl + '?text=' + text;
};
//Function Error
function catchError(e) {
    console.log("Error Occured" + e);
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

    //Changing the output color to black, timeout is used as the response from server slightly gets delayed!
    setTimeout(() => {
        outputText.style.color = 'black'
    }, 400);
    // Making the clear button visible after geting translation!
    clearBtn.style.visibility = 'visible';
});

// Clear Button Click Event
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    outputText.innerText = "Minion Text will come here!";
    outputText.style.color = 'gray';
    clearBtn.style.visibility = 'hidden';
});

