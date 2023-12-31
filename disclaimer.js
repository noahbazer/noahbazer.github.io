const disclaimer = document.getElementById('disclaimer'); 
const disHead = document.getElementById('header');

const setDisclaimer = () => {
    console.log("setDisclaimer called");
    if (localStorage.disclaimDisabled) {
        disclaimer.style.display = 'none';
    }
    disHead.style.top = `${disclaimer.offsetHeight}px`; 
}

const clearDisclaimer = () => {
    console.log("clearDisclaimer called");
    disclaimer.style.display = 'none';
}

setDisclaimer();