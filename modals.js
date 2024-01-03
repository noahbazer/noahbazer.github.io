const modalData = [
    {   id: 1,
        backgroundVideo: './assets/battleshowcase.mp4',
        name: 'node.js battleship', 
        description: 'build a playable, terminal-only battleship using node.js',
        tools: 'npm chalk, readline-sync',
        languages: [{lang: 'javascript', value: '100'}],
        link: 'test-link'
     },
    {   id: 2,
        backgroundVideo: './assets/tavrshowcase5.mp4',
        name: 'tavr website', 
        description: 'build a front-face for TBVR\'s flagship game',
        tools: 'none, all native languages',
        languages: [{lang: 'javaScript', value: '27'}, 
                    {lang: 'html', value: '34'},
                    {lang: 'css', value: '39'}, ]
     },
    {   id: 3,
        backgroundVideo: './assets/ffshowcasenew.mp4',
        name: 'carrd alternative', 
        description: 'create a cheaper, more customizable alternative to static page subscriptions',
        tools: 'none, all native languages',
        languages: [{lang: 'javascript', value: '25'}, 
                    {lang: 'html', value: '34'},
                    {lang: 'css', value: '41'}, ]
     },
    {   id: 4,
        backgroundVideo: './assets/asteriateaser.mp4',
        name: 'vr mmorpg', 
        description: 'build a virtual reality mmorpg that breaks from market convention',
        tools: 'Unity 2022',
        languages: [{lang: 'c#', value: '100'}]
     },
    {   id: 5,
        backgroundVideo: './assets/asteriateaser.mp4',
        name: 'company website rebrand', 
        description: 'revitalize the front-face of an existing company brand',
        tools: 'none, all native languages',
        languages: [{lang: 'javascript', value: '15'}, 
                    {lang: 'html', value: '43'},
                    {lang: 'css', value: '42'}, ]
     },
    {   id: 6,
        backgroundVideo: './assets/timerpreview23.mp4',
        name: 'stream timer', 
        description: 'build a web-based, no-download stream timer for streamers',
        tools: 'none, all native languages',
        languages: [{lang: 'javascript', value: '80'}, 
                    {lang: 'html', value: '7'},
                    {lang: 'css', value: '13'}, ]
     },
];

const fullScreenModal = document.querySelector('.modal');
const dataList = document.getElementsByClassName('modal-datalist')
const langBar = document.querySelector('.language-bar');
const langInfo = document.querySelector('.language-count');
console.log(dataList);

const langColor = (lang) => {
    switch (lang) {
        case 'html':
            return 'var(--lang-color-html)';
        case 'css':
            return 'var(--lang-color-css)';
        case 'javascript':
            return 'var(--lang-color-js)';
        case 'c#':
            return 'var(--lang-color-cs)';
        default:
            return 'black';
    }
}

const buildBar = (id) => {
    console.log("Entering buildBar function for id:", id);

    langBar.innerHTML = '';
    console.log("Cleared langBar inner HTML");
    
    if (modalData[id - 1] && modalData[id - 1].languages) {
        console.log("Languages found for id:", id);

        for (let i = 0; i < modalData[id - 1].languages.length; i++) {
            const barSection = document.createElement('div');
            barSection.style.backgroundColor = langColor(modalData[id - 1].languages[i].lang);
            barSection.style.width = `${modalData[id - 1].languages[i].value}%`;
            
            console.log("Creating barSection:", barSection);

            langBar.appendChild(barSection);
        }

    } else {
        console.log("No languages found for id:", id);
    }

    console.log("Exiting buildBar function for id:", id);
}

const displayLangs = (id) => {
    console.log("Entering displayLang function for id:", id);

    langInfo.innerHTML = '';
    console.log("Cleared langInfo inner HTML");
    
    if (modalData[id - 1] && modalData[id - 1].languages) {
        console.log("Languages found for id:", id);

        for (let i = 0; i < modalData[id - 1].languages.length; i++) {
            const langLine = document.createElement('p');
            let langclass = `${modalData[id - 1].languages[i].lang}`;
        if (modalData[id - 1].languages[i].lang = 'c#') {
            langclass = 'cs'
        }
            langLine.innerHTML = 
            `<p class='${langclass}'>${modalData[id - 1].languages[i].lang} <span> - ${modalData[id - 1].languages[i].value}%</span><p>`
            langInfo.appendChild(langLine);
        }

    } else {
        console.log("No languages found for id:", id);
    }

    console.log("Exiting buildBar function for id:", id);
}

const setLink = (id) => {
    const gitLink = document.querySelector('.git-link')
    if (modalData[id - 1].link) {
        gitLink.innerHTML = `<a class="git-link" target="_blank" href = ${modalData[id - 1].link} rel="noreferrer noopener">
        open on <span class="fa-brands fa-github" aria-hidden="true"></span>
      </a>`
    } else {
        gitLink.innerHTML = '<p class="gray git-link-failed">private repository</p>'
        gitLink.href = '';
    }
}

const setModalData = (id) => {
    if (dataList.length >= 4 && modalData[id - 1]) {
        dataList[0].src = modalData[id - 1].backgroundVideo || '';
        dataList[1].innerHTML = modalData[id - 1].name || '';
        dataList[2].innerHTML = modalData[id - 1].description || '';
        dataList[3].innerHTML = modalData[id - 1].tools || '';
        buildBar(id);
        displayLangs(id);
        setLink(id);
    }
}