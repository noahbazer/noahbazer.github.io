const dynamicTextActive = false;
let currentWord = '<html>';
let cursorBlink = false;
let wordTally = 0;
let dynamicText = document.getElementById("dynText");
let wordColor = 'yellow';
const dynamicCursor = document.getElementById("dynCursor");
dynText.textContent = '<html>'

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

const htmlFix = '<html>'

const changeTally = function () {
    if (wordTally === 2) {
        wordTally = 0;
    } else {
        wordTally = wordTally + 1;
    }
};

const front = '&lt';
const back = '&gt';

const changeWord = function () {
    switch (wordTally) {
        case 0:
            currentWord = '<html>';
            wordColor = 'red';
            break;
        case 1:
            currentWord = '#CSS';
            wordColor = 'cyan';
            break;
        case 2:
            currentWord = 'JavaScript();';
            wordColor = 'yellow';
            break;
    }
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
    changeTally();
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

// Check for visibility changes
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        // Resume interval when tab becomes visible
        startInterval();
    } else {
        // Pause interval when tab becomes hidden
        clearInterval(intervalId);
    }
});

wordUpdater();