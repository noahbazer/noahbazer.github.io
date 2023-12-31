const modalData = [
    {   id: 1,
        backgroundVideo: './assets/battleshowcase.mp4',
        name: 'node.js battleship', 
        description: 'build a playable, terminal-only battleship using node.js',
        tools: 'npm chalk, readline-sync',
        languages: [{lang: 'javascript', value: '100'}]
     },
    {   id: 2,
        backgroundVideo: './assets/tavrshowcase5.mp4',
        name: 'tavr website', 
        description: 'build a front-face for TBVR\'s flagship game',
        tools: 'none, all native languages',
        languages: [{lang: 'javascript', value: '27'}, 
                    {lang: 'html', value: '34'},
                    {lang: 'css', value: '39'}, ]
     },
    {   id: 3,
        backgroundVideo: './assets/ffshowcasenew.mp4',
        name: 'carrd alternative', 
        description: 'create a cheaper, more customizable alternative to static page subscriptions',
        tools: 'none, all native languages'
     },
    {   id: 4,
        backgroundVideo: './assets/asteriateaser.mp4',
        name: 'vr mmorpg', 
        description: 'build a virtual reality mmorpg that breaks from market convention',
        tools: 'Unity 2022'
     },
    {   id: 5,
        backgroundVideo: './assets/asteriateaser.mp4',
        name: 'company website rebrand', 
        description: 'revitalize the front-face of an existing company brand',
        tools: 'none, all native languages'
     },
];

const fullScreenModal = document.querySelector('.modal');
const dataList = document.getElementsByClassName('modal-datalist')
const langBar = document.querySelector('.languagebar');
console.log(dataList);

const langColor = (lang) => {
    switch (lang) {
        case 'html':
            return 'red';
        case 'css':
            return 'blue';
        case 'javascript':
            return 'yellow';
        default:
            return 'black';
    }
}

const buildBar = (id) => {
    console.log("Entering buildBar function for id:", id);

    langBar.innerHTML = '';
    console.log("Cleared langBar inner HTML");

    const newBar = document.createElement('div');
    
    if (modalData[id - 1] && modalData[id - 1].languages) {
        console.log("Languages found for id:", id);

        for (let i = 0; i < modalData[id - 1].languages.length; i++) {
            const barSection = document.createElement('div');
            barSection.style.color = langColor(modalData[id - 1].languages[i].lang);
            barSection.style.width = `${modalData[id - 1].languages[i].value}%`;
            
            console.log("Creating barSection:", barSection);

            langBar.appendChild(barSection);
        }

    } else {
        console.log("No languages found for id:", id);
    }

    console.log("Exiting buildBar function for id:", id);
}

const setModalData = (id) => {
    if (dataList.length >= 4 && modalData[id - 1]) {
        dataList[0].src = modalData[id - 1].backgroundVideo || '';
        dataList[1].innerHTML = modalData[id - 1].name || '';
        dataList[2].innerHTML = modalData[id - 1].description || '';
        dataList[3].innerHTML = modalData[id - 1].tools || '';
        buildBar(id);
    }
}