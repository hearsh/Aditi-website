const slider = document.getElementById('main-slider');
const sliderVals = [
  { bg: 'aditi.jpg', card: 'card-01'},
  { bg: 'bg7.jpg', card: 'card-02'},
  { bg: 'bg8.jpg', card: 'card-03'}];
let count = 0;
let myTimeout;

const setCount = (num) => {
  count = num;
}

const unHignlightBtn = (className) => {
  var divsToHide = document.getElementsByClassName(`${className}`); //divsToHide is an array
  for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].className = "slider-btn";
  }
}

const changeBtnHighlight = (num) => {
  const btn = document.getElementById(`slider-0${num}`);
  btn.className = 'slider-btn active';
}

const hideAllCards = (className) => {
  var divsToHide = document.getElementsByClassName(`${className}`); //divsToHide is an array
  for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none";
  }
}

const changeSlider = (num) => {
  if (num >= 0 && num < sliderVals.length) {
    setCount(num);
  }
  if (count >= sliderVals.length) {
    setCount(0);
  }
  const slider = document.getElementById('banner-01');
  slider.style.backgroundImage = `url('./img/bg/${sliderVals[count].bg}')`;
  hideAllCards('banner-card');
  unHignlightBtn('slider-btn')
  changeBtnHighlight(count);
  $(`#${sliderVals[count].card}`).fadeIn();
  count = count + 1;
  return;
}

const startSlider = () => {
  changeSlider()
  myTimeout = setInterval(changeSlider, 5000);
}

startSlider();