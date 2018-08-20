function init() {
	let acc = document.getElementsByClassName("open-button");

	for ( let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", showContent);
	}

	function showContent() {
        this.nextElementSibling.classList.toggle("open-overlay");
        this.classList.toggle("menu-active");
    }
}

document.addEventListener("DOMContentLoaded", init);