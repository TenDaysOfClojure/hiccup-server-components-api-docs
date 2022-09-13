function manageSideBarLinksActiveClass(){
  var sideBarLinks = document.getElementsByClassName('side-bar-element-link');

  for (var i = 0; i < sideBarLinks.length; i++) {

    sideBarLinks[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += ' active';
      });

  }
}

window.addEventListener('load', (event) => {
  manageSideBarLinksActiveClass();
});