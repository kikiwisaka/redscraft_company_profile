document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);

  const elemsSlider = document.querySelectorAll('.slider');
  const instancesSlider = M.Slider.init(elemsSlider, {
    indicators: false,
    height: 500,
    duration: 600,
    interval: 3000
  });

  const paralax = document.querySelectorAll('.parallax');
  const instancesParalax = M.Parallax.init(paralax);
});