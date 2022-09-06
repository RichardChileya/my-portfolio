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