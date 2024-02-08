let currentWord = '<html>';
let cursorBlink = false;
let wordTally = 0;
const dynText = document.getElementById('dynText');
let wordColor = 'yellow';
const dynamicCursor = document.getElementById('dynCursor');
if (dynText) {
    dynText.textContent = '<html>';
}

const dynWordList = [
    { word: '<html>', color: 'var(--lang-color-html)' },
    { word: '#css', color: 'var(--lang-color-css)' },
    { word: 'javaScript();', color: 'var(--lang-color-js)' },
    { word: '<React />', color: '#61DBFB' },
    { word: 'TypeScript', color: '#007acc' },
];

function blinkCursor() {
if (cursorBlink === true) {
    if (dynamicCursor) {
        dynamicCursor.style.visibility = 'hidden';
    }
    setTimeout(() => {
        if (dynamicCursor) {
            dynamicCursor.style.visibility = 'visible';
        }
        setTimeout(() => {
            blinkCursor();
        }, 500);
    }, 500);
} else if (cursorBlink === false) {
    if (dynamicCursor) {
        dynamicCursor.style.visibility = 'visible';
    }
    setTimeout(() => {
        blinkCursor();
    }, 1000);
}}

const changeWord = function () {
  if (wordTally === dynWordList.length - 1) {
    wordTally = 0;
  } else {
    wordTally = wordTally + 1;
  }
  currentWord = dynWordList[wordTally].word;
  wordColor = dynWordList[wordTally].color;
};

const buildWord = function () {
    let j = 0;
    if (dynText) {
        dynText.style.color = wordColor;
    }

    return new Promise<void>((resolve) => {
        const buildInt = setInterval(() => {
            if (dynText) {
                dynText.textContent += currentWord[j];
            }

            if (j === currentWord.length - 1) {
                clearInterval(buildInt);
                resolve();
            }

            j++;
        }, 100);
    });
};

const deleteWord = function () {
    let i = dynText?.textContent?.length ?? 0;

    return new Promise<void>((resolve) => {
        const intervalId = setInterval(() => {
            if (dynText) {
                dynText.textContent = dynText.textContent?.slice(0, -1) ?? '';
            }
            i--;

            if (i === 0) {
                clearInterval(intervalId);
                resolve();
            }
        }, 100);
    });
};

blinkCursor();

const wordUpdater = async function () {
    if (dynamicCursor) {
        dynamicCursor.style.visibility = 'visible';
    }
    cursorBlink = false;
    await deleteWord();
    cursorBlink = true;
    changeWord();
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (dynamicCursor) {
        dynamicCursor.style.visibility = 'visible';
    }
    cursorBlink = false;
    await buildWord();
    cursorBlink = true;
};

let intervalId;

const startInterval = function () {
  intervalId = setInterval(() => {
    if (!document.hidden) {
      wordUpdater();
    }
  }, 5000);
};

startInterval();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(intervalId);
  } else {
    startInterval();
  }
});