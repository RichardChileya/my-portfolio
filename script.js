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
    name: 'Geolex Digital Events',
    option: ['CANOPY', 'Back End Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Geolex Digital Space is an online events website designed to showcase digital events happening across the globe. As a Capstone project, the website is built using HTML, CSS, and JavaScript. It offers users a comprehensive and user-friendly platform to explore various digital events, including webinars, conferences, and virtual workshops The website iss design is modern and visually appealing, making it easy to navigate and browse through different events. The website is responsiveness ensures that users can access it on any device, including smartphones and tablets.',
    featuredImage: './images/photo1dt.png',
    desktopImage: 'images/photo1dt.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://richardchileya.github.io/capstone-project-1/',
    linktosource: 'https://github.com/RichardChileya/capstone-project-1',
  },
  {
    key: 1,
    name: 'Around the World',
    option: ['React Capstone', 'FrontEnd ', 'Oct-2022'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Around the World is a React application that showcases various core features of the React framework. The project displays information about different countries around the world fetched from an API. It implements React features such as components, props, states, and API requests, as well as loggers for troubleshooting. The application is a valuable tool for enhancing React development skills while also exploring the worlds various countries and cultures.',
    featuredImage: './images/Around the world.png',
    desktopImage: './images/Around the world.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://expolore-countries.netlify.app/',
    linktosource: 'https://github.com/RichardChileya/portfolioskeleton1',
  },
  {
    key: 2,
    name: 'Awesome Books Store',
    option: ['MicroV', 'Full Stack Dev', 'Sept-2022'],
    optionMobile: ['Geolex', 'Frontend Dev', '2022'],
    description: 'The Bookstore web app is a React-based platform that enables users to explore a collection of books, add their favorite authors to a library, and leave reviews. It fetches data from an API and uses Redux middleware for asynchronous communication, providing users with an exceptional experience. With a user-friendly interface and features such as book discovery and discussion. Excellent resource for book enthusiasts who wish to expand their literary horizons and track their  progress.',
    featuredImage: './images/Awesome Books.png',
    desktopImage: './images/Awesome Books.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://awesome-books-rico.netlify.app/',
    linktosource: 'https://github.com/RichardChileya/book-store.git',
  },
  {
    key: 3,
    name: 'Space Travellers Hub', // modal popup
    option: ['NASA ', 'Lead Developer', '2022'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './images/SpaceHub.png',
    desktopImage: './images/SpaceHub.png',
    technologies: ['html', 'css', 'javascript', 'git hub', 'ruby', 'Bootstrap'],
    linktoliveversion: 'https://space-travellers-hub-rwk.netlify.app/',
    linktosource: 'https://github.com/RichardChileya/space-traveler-s-hub.git',
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
      title: 'Geolex Digital Space',
      options: ['Capstone Project 1', 'Full-stack', '2022'],
      imgMobile: 'images/first-capstone.png',
      imgDesktop: 'images/first-capstone.png',
      description: 'Geolex Digital Space is a project showcasing an online events website that highlights digital events happening worldwide. Built using HTML, CSS, and JavaScript, the website provides a comprehensive and user-friendly platform for users to explore webinars, conferences, virtual workshops, and more. Its modern and visually appealing design allows for easy navigation.',
      descriptionD: 'A Project about Cyber Security and Digital Safety.',
      languages: ` <li class="langu langu-a">html</li>
      <li class="langu langu-b">css</li>
      <li class="langu langu-c">javascript</li>
      <li class="langu2">html</li>
      <li class="langu2">css</li>
      <li class="langu2">javascript</li>`,
    },
    {
      title: 'Around the World',
      options: ['Capstone Project', 'Frontend Dev', '2022'],
      imgMobile: 'images/photo2.png',
      imgDesktop: 'images/Around the world.png',
      description: 'Around the word, A React application : Implementing React Core features varying from components, Props, States, API, To Loggers, the project displays content fetched from an API for world information on countries and more.',
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
      title: 'Awesome Books ',
      options: ['MicroV Library', 'Full Stack Dev', 'Sept-2022'],
      imgMobile: 'images/Awesome Books.png',
      imgDesktop: 'images/Awesome Books.png',
      description: "The Bookstore web app is a React-based application that allows users to search for books, add books from their favorite authors to a personal library, leave reviews and ratings, and discover new books. The app makes use of Redux middleware for asynchronous communication between the app and the API.",
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
      title: 'Space Travellers Rico',
      options: ['Uber', 'Lead Developer', '2018'],
      imgMobile: './images/SpaceHub.png',
      imgDesktop: './images/SpaceHub.png',
      description: 'A website that uses a real live api from space x and displays it, You are able to Reserve a rocket and you will have it on your profile page aslo join missions which you will be able to see it on your profile..',
      descriptionD: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: `<li class="langu">html</li>
      <li class="langu">css</li>
      <li class="langu">javascript</li>
      <li class="langu2">html</li>
      <li class="langu2">DOM</li>
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
