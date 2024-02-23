window.onload = function () {
  const uiElements = document.querySelectorAll('.navbar a');
  const logo = document.querySelectorAll('.logo');
  const heady = document.getElementById('heady');
  const p1 = document.getElementById('p1');
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < p1.offsetTop) {
      if ($(window).width() < 700) {
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(0%) sepia(3%) saturate(7488%) hue-rotate(122deg) brightness(99%) contrast(103%)');
        heady.style.backgroundColor = '#ff8000';        
        changeclasscolor(uiElements, '#ff8000');
      }
      else{
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(61%) sepia(51%) saturate(5520%) hue-rotate(3deg) brightness(105%) contrast(105%)');
        heady.style.backgroundColor = '#00000001';
        heady.style.backdropFilter = 'blur(5px)';
        changeclasscolor(uiElements, '#ff8000');
      }
    } else if (scrollPosition > p1.offsetTop) {
      if ($(window).width() < 700) {
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(0%) sepia(3%) saturate(7488%) hue-rotate(122deg) brightness(99%) contrast(103%)');
        heady.style.backgroundColor = '#ddd';
        changeclasscolor(uiElements, '#ddd');
      }
      else{
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(96%) sepia(0%) saturate(1147%) hue-rotate(203deg) brightness(92%) contrast(96%)');
        heady.style.backgroundColor = '#00000001';
        heady.style.backdropFilter = 'blur(5px)';
        changeclasscolor(uiElements, '#ddd');
      }
    }
  };
  window.onresize = handleScroll;
  handleScroll();
  window.addEventListener('scroll', handleScroll);

}
function changeclassfilter(el, col){
  el.forEach(el => {
    el.style.filter = col;
  })
}

function changeclasscolor(el, col){
  el.forEach(el => {
    el.style.color = col;
  })
}