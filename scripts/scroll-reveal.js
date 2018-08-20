function init() {
	var mobileViewport = window.matchMedia("screen and (max-width: 1023px)");
      
	if(mobileViewport.matches) {
	   	window.sr = ScrollReveal();   //deklaracja biblioteki
	    sr.reveal('.projects__item',{duration: 0});  //co chcemy animowac
	} else {
	    window.sr = ScrollReveal();   //deklaracja biblioteki
	    sr.reveal('.projects__item',{duration: 1000, interval: 200});  //co chcemy animowac
	    sr.reveal('.contact__form',{duration: 2000, interval: 500});
	}
}

document.addEventListener("DOMContentLoaded", init);