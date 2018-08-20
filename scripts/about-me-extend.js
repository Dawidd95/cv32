let button = document.querySelector(".button-section__button");
let content = document.querySelectorAll(".content__extend");
let container = document.querySelector(".container__about-me");


button.addEventListener("click", function() {
	button.classList.toggle("button-click");
	content[0].classList.toggle("extend-content");
	content[1].classList.toggle("extend-content");
	container.classList.toggle("about-me__active");
})