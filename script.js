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

/* Pop UP WINDOW CODE */

const cardProjects = [
  {
    Image: './images/snapshot.png',
    Image2: './images/sampleDesktopImage.png',
    header: 'Tonic',
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    Tech1: ['html', 'css', 'jaavascript'],
    Tech2: ['github', 'bootstrap', 'ruby'],
    Canopy: ['Canopy', 'Back-end', '2015'],
  },
];

const btn = document.querySelectorAll('.btn-card');
const popupContainer = document.querySelector('.popup-container');
const main = document.querySelector('main');

function displayAll(id) {
  popupContainer.style.display = 'flex';
  main.style.display = 'none';
  const card = cardProjects[id];
  popupContainer.innerHTML = `
  <div class="content">
  <div class="close-btn">&times;</div>
  <div class="titles-section">
   <h2> Tonic</h2>
    
  </div>
  <div class="list-class">
    <ul>
      <li>${card.Canopy[0]}</li>
      <li class="circle-iron"></li>
      <li>${card.Canopy[1]}</li>
      <li class="circle-iron"></li>
      <li>${card.Canopy[2]}</li>
    </ul>
  </div>

  <div class="image-class-section">
    <img class="mobile" src="${card.Image}">
    <img class="desktop" src="${card.Image2}">
    
  </div>
  <div  class="container-description">
    <div class="text-paragraph"><p> ${card.Description}</p></div>
    <div class="button-container-popup">
      <ul class="pop-list desktop">
        <li>${card.Tech2[0]}</li>
        <li>${card.Tech2[2]}</li>
        <li>${card.Tech2[1]}</li>
      </ul>
      <ul class="link-action pop-list mobile">
      <li>${card.Tech1[0]}</li>
      <li>${card.Tech1[1]}</li>
      <li>${card.Tech1[2]}</li>
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
