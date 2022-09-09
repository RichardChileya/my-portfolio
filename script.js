const Bar = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const anchorLink = document.querySelectorAll('.anchor-link');
const Body = document.querySelector('body');

const cancelModal = document.querySelector('.cancels');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const width = window.innerWidth;

const cards = [
  {
    key: 0,
    name: 'Tonic',
    option: ['CANOPY', 'Back End Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './images/photo1dt.png',
    desktopImage: 'images/photo1dt.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
    linktosource: 'https://github.com/KayLemba/MyPortfolio2',
  },
  {
    key: 1,
    name: 'Multi-post Stories',
    option: ['FACEBOOK', 'Back End Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './images/photo2dt.png',
    desktopImage: './images/photo2dt.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://richardchileya.github.io/portfolioskeleton1/',
    linktosource: 'https://github.com/RichardChileya/portfolioskeleton1',
  },
  {
    key: 2,
    name: 'FACEBOOK 360',
    option: ['FACEBOOK', 'Full Stack Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: './images/photo3dt.png',
    desktopImage: './images/photo3dt.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://richardchileya.github.io/portfolioskeleton1//',
    linktosource: 'https://github.com/RichardChileya/portfolioskeleton1',
  },
  {
    key: 3,
    name: 'Uber Navigation',
    option: ['Uber', 'Lead Developer', '2018'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './images/photo4dt.png',
    desktopImage: './images/photo4dt.png',
    technologies: ['html', 'css', 'javascript', 'git hub', 'ruby', 'Bootstrap'],
    linktoliveversion: 'https://richardchileya.github.io/portfolioskeleton1//',
    linktosource: 'https://github.com/RichardChileya/portfolioskeleton1',
  },
];

function grab(e) {
  return document.getElementById(e);
}

const Openpopup = ({
  name, description,
  featuredImage,
  desktopImage,
  technologies,
  linktoliveversion,
  linktosource,
  option,
  optionMobile,
}) => () => {
  let displayModal = '';
  modal.classList.add('show-modal');

  displayModal += `
         <div class="modal-head">
          <h3 class="modal-title">${name}</h3>
         </div>
         <ul class="card-detail-header-container">
             <li class="card-detail canopy-modal">${width > 1024 ? option[0] : optionMobile[0]}</li>
             <li class="card-detail canopy-modal option-modal"><img src="images/bullets.png" class="bullets" alt="bullet"> ${width > 1024 ? option[1] : optionMobile[1]}</li>
             <li class="card-detail canopy-modal option-modal"><img src="images/bullets.png" class="bullets" alt="bullet">${width > 1024 ? option[2] : optionMobile[2]} </li>
           </ul>
            
          <div class='modal-img-container' >
            <img src='${width > 1024 ? desktopImage : featuredImage}' alt="modal picture" class="modal-img">
          </div>
          <div class="modal-text">
            <div class="popup-description">
            ${description}
            </div>
            <div>
              <ul class="anchor-div technologies-langu">
                <li><a href="#">${technologies[0]}</a></li>
                <li><a href="#">${technologies[1] ? technologies[1] : ''}</a></li>
                <li><a href="#">${technologies[2] ? technologies[2] : ''}</a></li>
                <li><a href="#">${technologies[3] ? technologies[3] : ''}</a></li>
              </ul>
              <div class="modal-buttons ">
                <a href='${linktoliveversion}' class="source-btn mr source-desktop">
                  See Live
                  <img src="images/Live-icon.svg" class="iconlink" alt="live icon">
                </a>
                <a href='${linktosource}' class="source-btn mr">
                  See Source
                <img src="images/Github-icon.svg" class="iconlink" alt="Git hub">
                </a>
              </div>
            </div>
          </div>
      `;

  modalInner.innerHTML = displayModal;
};

function showWorks() {
  const works = [
    {
      title: 'Tonic',
      options: ['CANOPY', 'Back End Dev', '2015'],
      imgMobile: 'images/photo1.png',
      imgDesktop: 'images/photo1dt.png',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descriptionD: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: ` <li class="langu langu-a">html</li>
      <li class="langu langu-b">css</li>
      <li class="langu langu-c">javascript</li>
      <li class="langu2">html</li>
      <li class="langu2">css</li>
      <li class="langu2">javascript</li>`,
    },
    {
      title: 'Multi-post Stories',
      options: ['FACEBOOK', 'Back End Dev', '2015'],
      imgMobile: 'images/photo2.png',
      imgDesktop: 'images/photo2dt.png',
      description: 'Experimental content creation features that allows users to add and existing story over the course of the day without spamming their friends.',
      descriptionD: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
      languages: `<li class="langu">html</li>
      <li class="langu">css</li>
      <li class="langu">javascript</li>
      <li class="langu2">html</li>
      <li class="langu2">Ruby on rails</li>
      <li class="langu2">css</li>
      <li class="langu2">javascript</li>`,
    },
    {
      title: 'Facebook 360',
      options: ['FACEBOOK', 'Full Stack Dev', '2015'],
      imgMobile: 'images/photo3.png',
      imgDesktop: 'images/photo3dt.png',
      description: "Exploring the future of media in Facebook's first Virtual Reality place to discover and enjoy 360 photos and videos on Gear VR .",
      descriptionD: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: `<li class="langu">html</li>
      <li class="langu">css</li>
      <li class="langu">javascript</li>
      <li class="langu2">html</li>
      <li class="langu2">Ruby on rails</li>
      <li class="langu2">css</li>
      <li class="langu2">javascript</li>`,
    },
    {
      title: 'Uber Navigation',
      options: ['Uber', 'Lead Developer', '2018'],
      imgMobile: 'images/photo4.png',
      imgDesktop: 'images/photo4dt.png',
      description: 'A smart assistant to make driving mode safe, efficient, and fun by unlocking your most expensive computer: your car.',
      descriptionD: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: `<li class="langu">html</li>
      <li class="langu">css</li>
      <li class="langu">javascript</li>
      <li class="langu2">html</li>
      <li class="langu2">Ruby on rails</li>
      <li class="langu2">css</li>
      <li class="langu2">javascript</li>`,
    },
  ];

  for (let k = 0; k < works.length; k++) {
    const work = works[k];
    const template = document.createElement('template');

    if (k % 2 === 0) {
      template.innerHTML = `<div class="project-card desktop">
        <div class="mobile-image">
          <img src="${work.imgMobile}" alt="First Card">
        </div>
        <div class="desktop-image">
          <img src="${work.imgDesktop}" alt="First card-desktop">
        </div>


        <div class="contents-two">
          <h2 class="head">${work.title}</h2>
          <h4 class="desktop_show">${work.title}</h4>
          <div class="card-detail-box">
            <ul class="cards-container">
              <li class="card-detail canopy">${work.options[0]}</li>
              <li class="card-detail option  "><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
              <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>

              <li class="card-detail dcanopy2_face">${work.options[0]}</li>
              <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
              <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>
            </ul>

            <p class="instruction">${work.description}</p>
            <p class="instruction-show">${work.description}</p>

            <div class="language1 inline">
              <ul>${work.languages}</ul>
            </div>
          </div>
          <button type="button" class="btn-one btns">See project</button>
        </div>
      </div>
    `.trim();
    } else {
      template.innerHTML = `<div class="project-card card-flex">
      <div class="mobile-image">
        <img src="${work.imgMobile}" alt="First Card">
      </div>
      <div class="desktop-image">
        <img src="${work.imgDesktop}" alt="First card-desktop">
      </div>


      <div class="contents">
        <h2 class="head">${work.title}</h2>
        <h4 class="desktop_show">${work.title}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            <li class="card-detail canopy">${work.options[0]}</li>
            <li class="card-detail option  "><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>

            <li class="card-detail dcanopy2_face">${work.options[0]}</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>
          </ul>

          <p class="instruction">${work.description}</p>
          <p class="instruction-show">${work.description}</p>

          <div class="language1 inline">
            <ul>${work.languages}</ul>
          </div>
        </div>
        <button type="button" class="btn-one btns">See project</button>
      </div>
    </div>
  `.trim();
    }
    const child = template.content.firstChild;
    grab('work').appendChild(child);
  }
}

function closePopup() {
  modal.classList.remove('show-modal');
}

document.addEventListener('DOMContentLoaded', () => {
  const modalButton = document.querySelectorAll('.btns');
  modalButton.forEach((button, i) => {
    button.addEventListener('click', Openpopup(cards[i]));
  });
});

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  Body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  Body.classList.remove('noscroll');
}

Bar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
cancelModal.addEventListener('click', closePopup);

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});

window.onload = showWorks();

/*FORM VALIDATION*/

const form = document.getElementById('form');
const email = document.getElementById('email');
const textMessage = document.getElementById('error');

form.addEventListener('submit', (e) => {
  email.value;
  let emailChecker = email.value.toLowerCase();
  if (email.value !== emailChecker || email.value === '') {
    e.preventDefault();
    textMessage.innerHTML = "*email must be in lower case <br> * form not sent";
  } else {
    form.submit();
  }

});
email.addEventListener('click', () => {
  textMessage.textContent = ''
});

/* Data Storage */

const Name = document.querySelector('.name');
const NameValue = localStorage.getItem('formName');

if (NameValue) {
  Name.value = NameValue;
}

const Email = document.querySelector('.email');
const EmailValue = localStorage.getItem('formEmail');

if (EmailValue) {
  Email.value = EmailValue;
}

const Texted = document.querySelector('.txtarea');
const formTextValue = localStorage.getItem('formMessage');

if (formTextValue) {
  Texted.value = formTextValue;
}

Name.addEventListener('input', (e) => {
  localStorage.setItem('formName', e.target.value);
});
Email.addEventListener('input', (e) => {
  localStorage.setItem('formEmail', e.target.value);
});
Texted.addEventListener('input', (e) => {
  localStorage.setItem('formMessage', e.target.value);
});