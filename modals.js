const modalData = [
  {
    id: 1,
    backgroundVideo: './assets/battleshowcase.mp4',
    name: 'node.js battleship',
    description: 'build a playable, terminal-only battleship using node.js',
    thumbnail:
      'https://engeniusweb.com/wp-content/uploads/2021/04/Untitled-design-1.png',
    isMajorProject: true,
    tools: 'npm chalk, readline-sync',
    languages: [{ lang: 'JavaScript', value: '100' }],
    link: 'https://github.com/noahbazer/battleship-project',
  },
  {
    id: 2,
    backgroundVideo: './assets/saaspreview.mp4',
    name: 'saas website',
    description:
      'build a software-as-a-service website from predefined mockups',
    thumbnail: '../assets/modals/thumbnails/saas.png',
    isMajorProject: true,
    tools: 'none, all native languages',
    languages: [
      { lang: 'HTML', value: '36' },
      { lang: 'CSS', value: '64' },
    ],
  },
  {
    id: 3,
    backgroundVideo: './assets/rebrandshowcase2.mp4',
    name: 'company rebrand',
    description: 'revitalize the front-face of an existing company brand',
    thumbnail: '../assets/modals/thumbnails/rebrand.png',
    isMajorProject: true,
    tools: 'none, all native languages',
    languages: [
      { lang: 'JavaScript', value: '15' },
      { lang: 'HTML', value: '43' },
      { lang: 'CSS', value: '42' },
    ],
  },
  {
    id: 4,
    backgroundVideo: './assets/concretepreview.mp4',
    name: 'concrete world',
    description: 'redesign a concrete company website to be more modern',
    thumbnail: '../assets/modals/thumbnails/concrete.png',
    isProProject: true,
    tools: 'none, all native languages',
    languages: [
      { lang: 'JavaScript', value: '15' },
      { lang: 'HTML', value: '43' },
      { lang: 'CSS', value: '42' },
    ],
  },
  {
    id: 5,
    backgroundVideo: './assets/tavrshowcase5.mp4',
    name: 'tavr website',
    description: "build a front-face for TBVR's flagship game",
    thumbnail: '../assets/modals/thumbnails/tavr.webp',
    tools: 'none, all native languages',
    languages: [
      { lang: 'JavaScript', value: '27' },
      { lang: 'HTML', value: '34' },
      { lang: 'CSS', value: '39' },
    ],
  },
  {
    id: 6,
    backgroundVideo: './assets/ffshowcasenew.mp4',
    name: 'carrd alternative',
    description:
      'create a cheaper, more customizable alternative to static page subscriptions',
    thumbnail: '../assets/modals/thumbnails/ffxiv.png',
    isMajorProject: false,
    tools: 'none, all native languages',
    languages: [
      { lang: 'JavaScript', value: '25' },
      { lang: 'HTML', value: '34' },
      { lang: 'CSS', value: '41' },
    ],
  },
  {
    id: 7,
    backgroundVideo: './assets/asteriateaser.mp4',
    name: 'vr mmorpg',
    description:
      'build a virtual reality mmorpg that breaks from market convention',
    thumbnail: '../assets/modals/thumbnails/game.png',
    isMajorProject: false,
    tools: 'Unity 2022',
    languages: [{ lang: 'C#', value: '100' }],
  },
  {
    id: 8,
    backgroundVideo: './assets/gitartpreview2.mp4',
    name: 'HeatMap Art',
    description: 'an app that allows you to make art like a git heatmap',
    thumbnail: '../assets/modals/thumbnails/gitart.png',
    isMajorProject: false,
    tools: 'React',
    languages: [{ lang: 'JavaScript', value: '100' }],
  },
];

const fullScreenModal = document.querySelector('.modal');
const dataList = document.getElementsByClassName('modal-datalist');
const langBar = document.querySelector('.language-bar');
const langInfo = document.querySelector('.language-count');
console.log(dataList);

const langColor = (lang) => {
  const langColors = {
    HTML: 'var(--lang-color-html)',
    CSS: 'var(--lang-color-css)',
    JavaScript: 'var(--lang-color-js)',
    'C#': 'var(--lang-color-cs)',
  };
  return langColors[lang] || 'black';
};

const buildBar = (id) => {
  console.log('Entering buildBar function for id:', id);

  langBar.innerHTML = '';
  console.log('Cleared langBar inner HTML');

  if (modalData[id - 1] && modalData[id - 1].languages) {
    console.log('Languages found for id:', id);

    for (let i = 0; i < modalData[id - 1].languages.length; i++) {
      const barSection = document.createElement('div');
      barSection.style.backgroundColor = langColor(
        modalData[id - 1].languages[i].lang
      );
      barSection.style.width = `${modalData[id - 1].languages[i].value}%`;

      console.log('Creating barSection:', barSection);

      langBar.appendChild(barSection);
    }
  } else {
    console.log('No languages found for id:', id);
  }

  console.log('Exiting buildBar function for id:', id);
};

const displayLangs = (id) => {
  console.log('Entering displayLang function for id:', id);

  langInfo.innerHTML = '';
  console.log('Cleared langInfo inner HTML');

  if (modalData[id - 1] && modalData[id - 1].languages) {
    console.log('Languages found for id:', id);

    for (let i = 0; i < modalData[id - 1].languages.length; i++) {
      const langLine = document.createElement('p');
      langClass = '';
      langClass = `${modalData[id - 1].languages[i].lang}`;
      if (modalData[id - 1].languages[i].lang === 'C#') {
        langClass = 'cs';
      }
      langLine.innerHTML = `<p class='${langClass}'>${
        modalData[id - 1].languages[i].lang
      } <span> - ${modalData[id - 1].languages[i].value}%</span><p>`;
      langInfo.appendChild(langLine);
    }
  } else {
    console.log('No languages found for id:', id);
  }

  console.log('Exiting buildBar function for id:', id);
};

const setLink = (id) => {
  const gitLink = document.querySelector('.git-link');
  if (modalData[id - 1].link) {
    gitLink.innerHTML = `<a class="git-link" target="_blank" href = ${
      modalData[id - 1].link
    } rel="noreferrer noopener">
        open on <span class="fa-brands fa-github" aria-hidden="true"></span>
      </a>`;
  } else {
    gitLink.innerHTML =
      '<p class="gray git-link-failed">private repository</p>';
    gitLink.href = '';
  }
};

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
};

const carouselItems = document.querySelector('.carousel-items');

modalData.forEach((item, i) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  if (item.isMajorProject) {
    const majorProjectBanner = document.createElement('div');
    majorProjectBanner.className = 'major-project-banner';

    const majorProjectText = document.createElement('p');
    majorProjectText.textContent = 'Major Project';
    majorProjectBanner.appendChild(majorProjectText);

    const majorProjectImage = document.createElement('img');
    majorProjectImage.src = './assets/majoricon.png';
    majorProjectBanner.appendChild(majorProjectImage);

    wrapper.appendChild(majorProjectBanner);
    wrapper.style.marginBottom = '28px';
  }

  if (item.isProProject) {
    const proProjectBanner = document.createElement('div');
    proProjectBanner.className = 'pro-project-banner';

    const proProjectText = document.createElement('p');
    proProjectText.textContent = 'Pro Project';
    proProjectBanner.appendChild(proProjectText);

    const proProjectImage = document.createElement('img');
    proProjectImage.src = './assets/proicon.png';
    proProjectBanner.appendChild(proProjectImage);

    wrapper.appendChild(proProjectBanner);
    wrapper.style.marginBottom = '28px';
  }

  const modalPreview = document.createElement('div');
  modalPreview.className = 'modal-preview';
  modalPreview.style.backgroundImage = `url(${item.thumbnail})`;
  modalPreview.style.backgroundSize = 'cover';
  modalPreview.dataset.filter = item.filter;
  modalPreview.onclick = function () {
    setModalData(i + 1);
    showModal();
  };

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  const p = document.createElement('p');
  p.textContent = item.name;

  textContainer.appendChild(p);
  modalPreview.appendChild(textContainer);
  wrapper.appendChild(modalPreview);
  carouselItems.appendChild(wrapper);
});
