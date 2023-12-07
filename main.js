const dynamicTextActive = false;
let currentWord = '<html>';
let cursorBlink = false;
let wordTally = 0;
let dynamicText = document.getElementById("dynText");
let wordColor = 'yellow';
const dynamicCursor = document.getElementById("dynCursor");
dynText.textContent = '<html>'

const dynWordList = [
{word: '<html>', color: 'red'},
{word: '#css', color: 'cyan'},
{word: 'javaScript();', color: 'yellow'}
];

function blinkCursor() {
    if (cursorBlink === true) {
        dynamicCursor.style.visibility = "hidden";
        setTimeout(() => {
            dynamicCursor.style.visibility = "visible";
            setTimeout(() => {
                blinkCursor();
            }, 500);
        }, 500);
    } else if (cursorBlink === false) {
        dynamicCursor.style.visibility = "visible";
        setTimeout(() => {
            blinkCursor();
        }, 1000);
    }
}

const changeWord = function () {
    if (wordTally === dynWordList.length-1) {
        wordTally = 0;
    } else {
        wordTally = wordTally + 1;
    }
    currentWord = dynWordList[wordTally].word;
    wordColor = dynWordList[wordTally].color;
};

function buildWord() {
    let j = 0;
    dynamicText.style.color = wordColor;

    return new Promise((resolve) => {
        const buildInt = setInterval(() => {
            dynamicText.textContent += currentWord[j];

            if (j === currentWord.length - 1) {
                clearInterval(buildInt);
                resolve();
            }

            j++;
        }, 100);
    });
}

function deleteWord() {
    let i = dynamicText.textContent.length;

    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            dynamicText.textContent = dynamicText.textContent.slice(0, -1);
            i--;

            if (i === 0) {
                clearInterval(intervalId);
                resolve();
            }
        }, 100);
    });
}

blinkCursor();

const wordUpdater = async function () {
    dynamicCursor.style.visibility = "visible";
    cursorBlink = false;
    await deleteWord();
    cursorBlink = true;
    changeWord();
    await new Promise((resolve) => setTimeout(resolve, 500));
    dynamicCursor.style.visibility = "visible";
    cursorBlink = false;
    await buildWord();
    cursorBlink = true;
};

let intervalId;

function startInterval() {
    intervalId = setInterval(() => {
        if (!document.hidden) {
            wordUpdater();
        }
    }, 5000);
}

startInterval();

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        startInterval();
    } else {
        clearInterval(intervalId);
    }
});

wordUpdater();

let modalcontent = document.getElementsByClassName('modalcontent');
let modal = document.getElementsByClassName('modal');


const removeModal = function() {
    modal[0].style.opacity = 0;
    modal[0].style.pointerEvents = 'none';
    modalcontent[0].classList.remove('visible');
}

const showModal = function() {
    modal[0].style.opacity = 1;
    modal[0].style.pointerEvents = 'all';
    modalcontent[0].classList.add('visible');
}