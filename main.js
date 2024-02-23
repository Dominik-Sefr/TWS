window.onload = function () {
  const heady = document.getElementById('heady');
  const p1 = document.getElementById('p1');
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < p1.offsetTop) {
      console.log("true");
      heady.style.backgroundColor = '#ff8000';
    } else if (scrollPosition > p1.offsetTop) {
      console.log("false");
      heady.style.backgroundColor = '#ddd';
    }
  };

  window.addEventListener('scroll', handleScroll);
}
