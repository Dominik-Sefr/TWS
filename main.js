window.onload = function () {
  const uiElements = document.querySelectorAll('.navbar a');
  const nav = document.querySelectorAll('.navbar');
  const logo = document.querySelectorAll('.logo');
  const heady = document.getElementById('heady');
  const menu = document.getElementById('menu-icon');
  const close = document.getElementById('close-icon');
  const p1 = document.getElementById('p1');
  const indy = document.getElementById('indy');
  const gtr = document.getElementById('gtr');
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < p1.offsetTop - 50) {
      if ($(window).width() < 700) {
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(0%) sepia(3%) saturate(7488%) hue-rotate(122deg) brightness(99%) contrast(103%)');
        heady.style.backgroundColor = '#ff8000';     
        menu.style.color = '#000'; 
        close.style.color = '#000';    
        changeclasscolor(uiElements, '#ff8000');        
      }
      else{
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(61%) sepia(51%) saturate(5520%) hue-rotate(3deg) brightness(105%) contrast(105%)');
        heady.style.backgroundColor = '#00000001';
        heady.style.backdropFilter = 'blur(5px)';
        changeclasscolor(uiElements, '#ff8000');
      }
    } else if (scrollPosition > p1.offsetTop - 50 && scrollPosition < indy.offsetTop - 50) {
      if ($(window).width() < 700) {
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(0%) sepia(3%) saturate(7488%) hue-rotate(122deg) brightness(99%) contrast(103%)');
        heady.style.backgroundColor = '#ddd';
        menu.style.color = '#000'; 
        close.style.color = '#000'; 
        changeclasscolor(uiElements, '#ddd');
      }
      else{
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(96%) sepia(0%) saturate(1147%) hue-rotate(203deg) brightness(92%) contrast(96%)');
        heady.style.backgroundColor = '#00000001';
        heady.style.backdropFilter = 'blur(5px)';
        changeclasscolor(uiElements, '#ddd');
      }
    } else if (scrollPosition > indy.offsetTop - 50 && scrollPosition < gtr.offsetTop - 50) {
      if ($(window).width() < 700) {
        changeclassfilter(logo, 'invert(99%) sepia(0%) saturate(7471%) hue-rotate(50deg) brightness(103%) contrast(106%)');
        heady.style.backgroundColor = '#000'; 
        menu.style.color = '#fff'; 
        close.style.color = '#fff';        
        changeclasscolor(uiElements, '#000');
      }
      else{
        changeclassfilter(logo, 'invert(0%) sepia(100%) saturate(0%) hue-rotate(182deg) brightness(97%) contrast(105%)');
        heady.style.backgroundColor = '#00000001';
        heady.style.backdropFilter = 'blur(5px)';
        changeclasscolor(uiElements, '#000');
      }
    } else if (scrollPosition > gtr.offsetTop - 50) {
      if ($(window).width() < 700) {
        changeclassfilter(logo, 'brightness(0) saturate(100%) invert(61%) sepia(51%) saturate(5520%) hue-rotate(3deg) brightness(105%) contrast(105%)');
        heady.style.backgroundColor = '#c9dfec'; 
        menu.style.color = '#ff8000'; 
        close.style.color = '#ff8000';        
        changeclasscolor(uiElements, '#c9dfec');
      }
      else{
        changeclassfilter(logo, 'invert(88%) sepia(22%) saturate(191%) hue-rotate(162deg) brightness(96%) contrast(93%)');
        heady.style.backgroundColor = '#00000001';
        heady.style.backdropFilter = 'blur(5px)';
        changeclasscolor(uiElements, '#c9dfec');
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
function changeclassbgcolor(el, col){
  el.forEach(el => {
    el.style.backgroundColor = col;
  })
}
function changeclasscolor(el, col){
  el.forEach(el => {
    el.style.color = col;
  })
}