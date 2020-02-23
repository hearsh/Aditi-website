$(document).foundation()
let last_known_scroll_position = 0;
let ticking = false;

function checkHeader(scroll_pos) {
  console.log(scroll_pos);
  if (scroll_pos > 100) {
    const myHeader = document.getElementById('header');
    myHeader.className = 'fixit';
    const logo = document.getElementById('header-logo');
    logo.className = 'header-logo';
    logo.src = './img/logos/small_logo.png';
  } else {
    const myHeader = document.getElementById('header');
    myHeader.className = '';
    const logo = document.getElementById('header-logo');
    logo.className = 'top-bar-logo';
    logo.src = './img/logos/logo.png';
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      checkHeader(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

const showThisImg = (img) => {
  var popup = new Foundation.Reveal($('#my-img-modal'));
  const myDiv = document.getElementById('img-show');
  myDiv.src = `img/Labfun/grid-images/${img}`;
  popup.open();
}
