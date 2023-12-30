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

const setModalData = (id) => {
dataList[0].src = modalData[id-1].backgroundVideo;
dataList[1].innerHTML = modalData[id-1].name;
dataList[2].innerHTML = modalData[id-1].description;
dataList[3].innerHTML = modalData[id-1].tools;
buildBar(id);
}


const buildBar = (id) => {
    langBar.innerHTML = '';
    const newBar = document.createElement('div');
    const barSecs = langBar.childNodes;
    for (let i = 0; i < modalData[id].languages.length; i++) {
        const newBar = document.createElement('div');

        newBar.style.color = 'yellow';
        newBar.style.width = `${modalData[id].languages[i]}%`;  
        
        langBar.appendChild(newBar);
    }
}