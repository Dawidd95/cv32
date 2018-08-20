function init() {
	let navbar = document.querySelector(".page-head__navbar");

	window.addEventListener("scroll", stickyNavbar);

	function stickyNavbar() {
		let windowPosition = window.pageYOffset;

		if (windowPosition >= 10) {
			navbar.classList.add("sticky-navbar");
		} else {
			navbar.classList.remove("sticky-navbar");
		}
	}
}

document.addEventListener("DOMContentLoaded", init)