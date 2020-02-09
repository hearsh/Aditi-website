$(document).foundation()


const showThisImg = (img) => {
  var popup = new Foundation.Reveal($('#my-img-modal'));
  const myDiv = document.getElementById('img-show');
  myDiv.src = `img/Labfun/grid-images/${img}`;
  popup.open();
}
