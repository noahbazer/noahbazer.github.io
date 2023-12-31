const dynamicTextActive = false;
let currentWord = '<html>';
let cursorBlink = false;
let wordTally = 0;
let dynamicText = document.getElementById("dynText");
let wordColor = 'yellow';
const dynamicCursor = document.getElementById("dynCursor");
dynText.textContent = '<html>'

const dynWordList = [
{word: '<html>', color: 'var(--lang-color-html)'},
{word: '#css', color: 'var(--lang-color-css)'},
{word: 'javaScript();', color: 'var(--lang-color-js)'},
];

const functionTwo = function() {

}

functionTwo();


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

const changeWord = function() {
    if (wordTally === dynWordList.length-1) {
        wordTally = 0;
    } else {
        wordTally = wordTally + 1;
    }
    currentWord = dynWordList[wordTally].word;
    wordColor = dynWordList[wordTally].color;
};

const buildWord = function() {
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

const deleteWord = function() {
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

const startInterval = function() {
    intervalId = setInterval(() => {
        if (!document.hidden) {
            wordUpdater();
        }
    }, 5000);
}

startInterval();

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        clearInterval(intervalId)
    } else {
        startInterval();
    }
});

wordUpdater();

const modals = document.querySelectorAll('.modal');
const contents = document.querySelectorAll('.modal-content');
const modalPreviews = document.querySelectorAll('.modal-preview');


const removeModal = function() {
    for (let i = 0; i < modals.length; i++) {
        modals[i].style.opacity = 0;
        modals[i].style.pointerEvents = 'none';
        contents[i].classList.remove('visible');
        contents[i].style.pointerEvents = 'none';
    }
}

const showModal = function() {
    let modal = document.getElementById(`modal`);
    let modalContent = document.getElementById(`modal-content`);
    modal.style.opacity = 1;
    modal.style.pointerEvents = 'all';
    modalContent.classList.add('visible');
    modalContent.style.pointerEvents = 'all';
}

const filterModals = function(filter) {
    modalPreviews.forEach((card) => {
        if (filter === 'all') {
            card.style.display = 'flex';
        } else if (card.dataset.filter === filter) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    })
}

const filters = document.querySelectorAll('.sort-link');
const setActive = (child) => {
    for (let i = 0; i < filters.length; i++) {
        if (i === (child - 1)) {
            filters[i].id = 'sort-active';
        } else {
            filters[i].id = '';
        }
    }
}
