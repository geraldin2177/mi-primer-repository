document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("open");
      if (navMenu) {
        navMenu.classList.toggle("show");
      }
    });
  }
});
//bloqueo del clik derecho
document.addEventListener('contextmenu',function(e){
  e.preventDefault();
  alert("Click derecho bloqueado")
});
//bloqueo  de la convinación de teclas (ctrl + c)



document.addEventListener('keydown',function(e){
  if(e.ctrlKey && e.key === 'c'){
 e.preventDefault();
   alert("presionaste una tecla")}
});