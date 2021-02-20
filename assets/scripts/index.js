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
