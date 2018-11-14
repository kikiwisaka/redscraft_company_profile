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

  const elemMaterialBoxed = document.querySelectorAll('.materialboxed');
  const instancesBoxed = M.Materialbox.init(elemMaterialBoxed);

  const elemScrollSpy = document.querySelectorAll('.scrollspy');
  const instanceScrollSpy = M.ScrollSpy.init(elemScrollSpy, {
    scrollOffset: 50
  });
});