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
const c = document.querySelector('.popup-container');
const main = document.querySelector('main');

function displayAll(id) {
  popupContainer.style.display = 'flex';
  main.style.display = 'none';
  const card = cardProjects[id];
  popupContainer.innerHTML = `<div class="overlay"></div>
  <div class="content">
  <div class="titles-section">
  <h2>Multi-Post Stories</h2>
  <i class="bi bi-x-lg"></i></div>
  <div class="list-class">
    <ul>
      <li>Canopy</li>
      <li class="circle-iron"></li>
      <li>Back end Dev</li>
      <li class="circle-iron"></li>
      <li>2015</li>
    </ul>
  </div>

  <div class="image-class-section">
    <img class="mobile" src="./images/snapshot4.svg">
    <img class="desktop" src="./images/sampleDesktopImage.png">
  </div>
  <div  class="container-description">
    <div class="text-paragraph"><p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
    </p></div>
    <div class="button-container-popup">
      <ul class="pop-list">
        <li>html</li>
        <li>bootstrap</li>
        <li>ruby</li>
      </ul>
      <ul class="link-action pop-list">
        <li >Javascript</li>
        <li >css</li>
        <li >github</li>

      </ul>
      <div class="btnContainer">
        <button type="button" class="btn-see-popup" id="live">See Live<img src="./images/Icon.svg"></button>
        <button type="button" class="btn-see-popup" id="sources">See Sources<img src="./images/Vector.svg"></button>
      </div>
    </div>
    
  </div>
  
  
</div>
`;

}

btn.forEach((eachbtn) => {
  eachbtn.addEventListener('click', (e) => {
    displayAll(e.target.id);
  });
});
