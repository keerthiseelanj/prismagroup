setTimeout(
function myFunction(){
    let x = document.getElementById("loader");
    x.style.display="none"
}, 4000)
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().bottom;
      var positionFromTop1 = elements[0].getBoundingClientRect().bottom;
      var x = positionFromTop1 - windowHeight;
     

      if (positionFromTop - windowHeight <= 100) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

// left

 (function() {
  var elements;
  var windowHeight;

  function init1() {
    elements = document.querySelectorAll('.hidden-left');
    windowHeight = window.innerHeight;
  }

  function checkPosition1() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().bottom;

      if (positionFromTop - windowHeight <= 100) {
        element.classList.add('fade-in-element-left');
        element.classList.remove('hidden-left');
      }
    }
  }

  window.addEventListener('scroll', checkPosition1);
  window.addEventListener('resize', init1);

  init1();
  checkPosition1();
})();

// top
(function() {
  var elements;
  var windowHeight;

  function init2() {
    elements = document.querySelectorAll('.hidden-top');
    windowHeight = window.innerHeight;
  }

  function checkPosition2() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element-top');
        element.classList.remove('hidden-top');
      }
    }
  }

  window.addEventListener('scroll', checkPosition2);
  window.addEventListener('resize', init2);

  init2();
  checkPosition2();
})();