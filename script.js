/* eslint-disable no-use-before-define */
const hamburger = document.querySelector('.hamburger');
const navMobile = document.getElementById('navMobile');
const up = document.querySelectorAll('.menu-list');

hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('in-active');
  hamburger.classList.toggle('active');
});

const list = [...up];
list.forEach((lists) => {
  lists.addEventListener('click', () => {
    navMobile.classList.toggle('in-active');
    hamburger.classList.toggle('active');
  });
});

/* Pop UP WINDOW CODE*/

const cardProjects = [
  {
    Image: './images/snapshot4.svg',
    Title: 'Multi-Post Stories',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-up',
    Tech: ['html', 'css', 'jaavascript'],
  },
  {
    Image: './images/snapshot4.svg',
    Title: 'Multi-Post Stories',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-up',
    Tech: ['html', 'css', 'jaavascript'],
  },
  {
    Image: './images/snapshot4.svg',
    Title: 'Multi-Post Stories',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-up',
    Tech: ['html', 'css', 'jaavascript'],
  },
  {
    Image: './images/snapshot4.svg',
    Title: 'Multi-Post Stories',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-up',
    Tech: ['html', 'css', 'jaavascript'],
  },
];

const btn = document.querySelectorAll('.btn-card');
const popupContainer = document.querySelector('.popup-container');
const main = document.querySelector('main');

function displayAll(id) {
  popupContainer.style.display = 'flex';
  main.style.display = 'none';
  const card = cardProjects[id];
  popupContainer.innerHTML = `<div class="overlay"></div>
<div class="content">
  <h2>${card.Title}</h2>
  <img src="./images/snapshot4.svg" alt="">
  <p>
   ${card.Description}
  </p>
  <ul class="pop-list">
    <li>${card.Tech[0]}</li>
    <li>${card.Tech[1]}</li>
    <li>${card.Tech[2]}</li>
  </ul>
  <div class="btnContainer">
    <button type="button" class="btn-see-popup" id="live">See Live</button>
    <button type="button" class="btn-see-popup" id="sources">See Sources</button>
  </div>
</div>
`;
}

btn.forEach((eachbtn) => {
  eachbtn.addEventListener('click', (e) => {
    displayAll(e.target.id);
  });
});
