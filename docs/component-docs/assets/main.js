function manageSideBarLinksActiveClass(currentLinkHash){
  var sideBarLinks = document.getElementsByClassName('side-bar-element-link');

  for (var i = 0; i < sideBarLinks.length; i++) {
    var link = sideBarLinks[i];

    if(currentLinkHash && link.href.split("#")[1] == currentLinkHash){
      link.className += ' active';
    }

    link.addEventListener('click', function() {

      var current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += ' active';
      });
  }
}

window.addEventListener('load', (event) => {
  manageSideBarLinksActiveClass(window.location.hash.split('#')[1]);
});