function init() {
	let projectsItem = document.getElementsByClassName("projects__item");

	for ( let i = 0; i < projectsItem.length; i++) {
		projectsItem[i].addEventListener("mouseover", showContent);
		projectsItem[i].addEventListener("mouseout", hideContent);
	}

	function showContent() {
        this.classList.add("show-content");
	}
	function hideContent() {
        this.classList.remove("show-content");
	}
}

document.addEventListener("DOMContentLoaded", init);