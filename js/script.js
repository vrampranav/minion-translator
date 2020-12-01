// Getting the required elements
var userInput = document.querySelector("#input-text");
var btnTrans = document.querySelector("#btnTranslate");
var outputText = document.querySelector("#output-text");
var clearBtn = document.querySelector("#clrBtn");

// TranslateBtn Click Event
btnTrans.addEventListener('click', () => {
    var userText = userInput.value;
    // console.log(userText);
    if (userText.length === 0) {
        alert("Oops! Miniator didn't receive any text...");
        return;
    }
    outputText.innerText = userText;
    outputText.style.color = 'black'
    clearBtn.style.visibility = 'visible';
});

// Clear Button Click Event
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    outputText.innerText = "";
    clearBtn.style.visibility = 'hidden';
});

