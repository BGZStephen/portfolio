var menuToggle = document.getElementsByClassName(`menu__toggle`)[0];
var menuContainer = document.getElementsByClassName(`menu__container`)[0];

menuToggle.addEventListener(`click`, function() {
  if(menuContainer.style.opacity == 1) {
    menuContainer.style.borderTop = ""
    menuContainer.style.opacity = `0`
  } else {
    menuContainer.style.borderTop = "1px solid #555"
    menuContainer.style.opacity = `1`
  }
})
