var contextosMenu = {
   Fechados: 0,
   Menu: 1,
   MenuSubMenu: 2,
   MenuDesktop: 3,
};
var contextoMenuAtual = contextosMenu.MenuDesktop;

document.addEventListener("DOMContentLoaded", function () {
   ajustaConfig();
   document.getElementById("btn-menu-mobile").addEventListener("click", exibeMenuMobile);
   let btnItemMenu = document.getElementsByClassName("btn-item-menu");
   for (let x = 0; x < btnItemMenu.length; x++) {
      btnItemMenu[x].addEventListener("click", fechaMenus);
   }
   window.addEventListener("resize", ajustaConfig);
});

function ajustaConfig() {
   if (window.innerWidth > 1275) {
      document.getElementById("nav-menu").style.display = "flex";
      contextoMenuAtual = contextosMenu.MenuDesktop;
   } else {
      document.getElementById("nav-menu").style.display = "none";
      contextoMenuAtual = contextosMenu.Fechados;
   }
}

function exibeMenuMobile() {
   if (contextoMenuAtual == contextosMenu.Fechados) {
      document.getElementById("nav-menu").style.display = "block";
      contextoMenuAtual = contextosMenu.Menu;
   } else {
      fechaMenus();
   }
}

function fechaMenus() {
   if (contextoMenuAtual != contextosMenu.MenuDesktop) {
      document.getElementById("nav-menu").style.display = "none";
      contextoMenuAtual = contextosMenu.Fechados;
      console.log("menu fechado");
   }
}
