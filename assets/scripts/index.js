const scrollToTopButton = document.getElementById('back-top');

const showButton = () => {
  let y = window.scrollY;

  if (y > 0) {
    scrollToTopButton.className = 'button__icon--back-top show';
  }
  else {
    scrollToTopButton.className = 'button__icon--back-top hide';
  }
};

window.addEventListener('scroll', showButton);

const scrollUp = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c < 0) {
    window.requestAnimationFrame(scrollUp);
  }
  else {
    window.scrollTo(0, c - c);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollUp();
}


const nav = document.getElementById('nav');
const navTop = nav.offsetTop;

const stickyNav = () => {


  if (window.scrollY > navTop) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNav);


const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');


hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});
