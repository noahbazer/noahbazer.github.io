const disclaimer = document.getElementById('disclaimer'); 
const disHead = document.getElementById('header');

const setDisclaimer = () => {
    console.log("setDisclaimer called");
    if (window.localStorage.getItem('disclaimDisabled') === '1') {
        disclaimer.style.display = 'none';
    } else {
        disclaimer.style.display = 'flex';
    }
    disHead.style.top = `${disclaimer.offsetHeight}px`; 
}



const removeDisclaimer = () => {
    console.log("removeDisclaimer called");
    disclaimer.style.display = 'none';
    disHead.style.top = `0`
}

const deleteDisclaimer = () => {
    console.log("deleteDisclaimer called");
    disclaimer.style.display = 'none';
    disHead.style.top = `0`
    window.localStorage.setItem('disclaimDisabled', '1');
}

setDisclaimer();