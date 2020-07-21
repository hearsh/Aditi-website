$(document).foundation()
let last_known_scroll_position = 0;
let ticking = false;
let images = [];
let imgCount = 0;
let imageDir = '';

document.getElementById('mobile-menu-icon').addEventListener('click', mobileMenu)

const addClassName = (id, className) => {
  const myHeader = document.getElementById(`${id}`);
    myHeader.className = `${className}`;
}

function checkHeader(scroll_pos) {
  const host = window.location.hostname;
  if (scroll_pos > 100) {
    addClassName('header', 'fixit');
    addClassName('header-menu-items', 'dropdown menu show-for-medium');
    const logo = document.getElementById('header-logo');
    logo.className = 'header-logo';
    logo.src = `http://${host}/img/logos/small_logo.png`;
    checkMobileMenu(scroll_pos);
  } else {
    addClassName('header', '');
    addClassName('header-menu-items', 'dropdown menu show-for-medium white');
    const logo = document.getElementById('header-logo');
    logo.className = 'top-bar-logo';
    logo.src = `http://${host}/img/logos/logo.png`;
    checkMobileMenu(scroll_pos);
  }
}

function checkMobileMenu(scroll_pos) {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) {
    return false;
  }
  if (mobileMenu && scroll_pos > 100) {
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.top = '54px';
  } else if (mobileMenu && scroll_pos <= 100) {
    mobileMenu.style = '';
  }
}

function mobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && mobileMenu.classList.contains('hide')) {
    mobileMenu.className = 'mobile-menu show';
  } else {
    mobileMenu.className = 'mobile-menu hide';
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

const changeImageCount = (count) => {
  imgCount = imgCount + count;
  if (imgCount >= images.length) {
    imgCount = 0
  }
   if (imgCount < 0) {
    imgCount = images.length - 1;
  }
}

const goNext = () => {
  changeImageCount(+1);
  changeImg();
}

const goPrev = () => {
  changeImageCount(-1);
  changeImg();
}

const changeImg = () => {
  const myDiv = document.getElementById('img-show');
  myDiv.src = `img/Labfun/grid-images/${imageDir}/${images[imgCount]}`;
}

const showThisImg = (img, dir) => {
  const imgarr = img.split(',');
  if (imgarr.length) {
    var popup = new Foundation.Reveal($('#my-img-modal'));
    images = imgarr;
    imageDir = dir;
    changeImg();
    popup.open();
  }
}

const runStartScripts = () => {
  checkHeader();
}


runStartScripts();