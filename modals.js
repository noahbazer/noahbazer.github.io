const modalData = [
    {   id: 1,
        backgroundVideo: './assets/battleshowcase.mp4',
        name: 'node.js battleship', 
        description: 'build a playable, terminal-only battleship using node.js',
        tools: 'npm chalk, readline-sync'
     },
    {   id: 2,
        backgroundVideo: './assets/tavrshowcase5.mp4',
        name: 'tavr website', 
        description: 'build a front-face for TBVR\'s flagship game',
        tools: 'none, all native languages'
     },
    {   id: 3,
        backgroundVideo: './assets/ffshowcasenew.mp4',
        name: 'carrd alternative', 
        description: 'create a cheaper, more customizable alternative to static page subscriptions',
        tools: 'none, all native languages'
     },
    {   id: 4,
        backgroundVideo: './assets/asteriateaser.mp4',
        name: 'VR MMORPG', 
        description: 'build a virtual reality mmorpg that breaks from market convention',
        tools: 'Unity 2022'
     }
];


const fullScreenModal = document.querySelector('.modal');
const dataList = document.getElementsByClassName('modal-datalist')
console.log(dataList);

const setModalData = (id) => {
dataList[0].src = modalData[id-1].backgroundVideo; 
dataList[1].innerHTML = modalData[id-1].name;
dataList[2].innerHTML = modalData[id-1].description;
dataList[3].innerHTML = modalData[id-1].tools;
}
