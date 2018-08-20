function init() {
	let navLink = document.querySelectorAll(".navbar__links a");
	let underline = document.querySelectorAll(".underline");

	navLink[0].addEventListener("mouseover", function() {
		underline[0].style.width = "100%";
		underline[0].style.paddingRight = "20px";
		underline[0].style.backgroundColor = "white";			
	});
	navLink[1].addEventListener("mouseover", function() {
		underline[1].style.width = "100%";
		underline[1].style.paddingRight = "20px";
		underline[1].style.backgroundColor = "white";
	});
	navLink[2].addEventListener("mouseover", function() {
		underline[2].style.width = "100%";
		underline[2].style.paddingRight = "20px";
		underline[2].style.backgroundColor = "white";
	});
	navLink[3].addEventListener("mouseover", function() {
		underline[3].style.width = "100%";
		underline[3].style.paddingRight = "20px";
		underline[3].style.backgroundColor = "white";
	});
	navLink[4].addEventListener("mouseover", function() {
		underline[4].style.width = "100%";
		underline[4].style.paddingRight = "20px";
		underline[4].style.backgroundColor = "white";
	});

	navLink[0].addEventListener("mouseout", function() {
		underline[0].style.width = "0%";
		underline[0].style.paddingRight = "0";
		underline[0].style.backgroundColor = "white";
	});
	navLink[1].addEventListener("mouseout", function() {
		underline[1].style.width = "0%";
		underline[1].style.paddingRight = "0";
		underline[1].style.backgroundColor = "white";
		underline[1].style.transition = "0.6s";
	});
	navLink[2].addEventListener("mouseout", function() {
		underline[2].style.width = "0%";
		underline[2].style.paddingRight = "0";
		underline[2].style.backgroundColor = "white";
		underline[2].style.transition = "0.6s";
	});
	navLink[3].addEventListener("mouseout", function() {
		underline[3].style.width = "0%";
		underline[3].style.paddingRight = "0";
		underline[3].style.backgroundColor = "white";
		underline[3].style.transition = "0.6s";
	});
	navLink[4].addEventListener("mouseout", function() {
		underline[4].style.width = "0%";
		underline[4].style.paddingRight = "0";
		underline[4].style.backgroundColor = "white";
		underline[4].style.transition = "0.6s";
	});
}

document.addEventListener("DOMContentLoaded", init);