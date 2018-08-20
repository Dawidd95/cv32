function init() {
	let linkToHome = document.querySelector("a[href='#Home']");
	let linkToAboutMe = document.querySelector("a[href='#About-me']");
	let linkToPortfolio = document.querySelectorAll("a[href='#Portfolio']");
	let linkToSkills = document.querySelector("a[href='#Skills']");	
	let linkToContact = document.querySelectorAll("a[href='#Contact']");


	linkToHome.addEventListener("click", function() {
		document.querySelector(".page-head").scrollIntoView({
			behavior: 'smooth'
		})
	})

	linkToAboutMe.addEventListener("click", function() {
		document.querySelector(".container__about-me").scrollIntoView({
			behavior: 'smooth'
		})
	})

	linkToPortfolio[0].addEventListener("click", function() {
		document.querySelector(".container__portfolio").scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})

	linkToPortfolio[1].addEventListener("click", function() {
		document.querySelector(".container__portfolio").scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})

	linkToSkills.addEventListener("click", function() {
		document.querySelector(".container__skills").scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		})
	})

	linkToContact[0].addEventListener("click", function() {
		document.querySelector(".container__footer").scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		})
	})

	linkToContact[1].addEventListener("click", function() {
		document.querySelector(".container__footer").scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		})
	})
}

document.addEventListener("DOMContentLoaded", init)