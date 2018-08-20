function init() {
	let portfolioBtn = document.querySelector(".buttons__portfolio");
	let contactBtn = document.querySelector(".buttons__contact");
	let buttonsSection = document.querySelector(".page-head__buttons");

	contactBtn.addEventListener("mouseover", function() {
		portfolioBtn.style.backgroundColor = "transparent";
		portfolioBtn.style.color = "white";
		contactBtn.style.backgroundColor = "#9bd3d9";
		contactBtn.style.color = "black";
	});

	portfolioBtn.addEventListener("mouseover", function() {
		portfolioBtn.style.backgroundColor = "#9bd3d9";
		portfolioBtn.style.color = "black";
		contactBtn.style.backgroundColor = "transparent";
		contactBtn.style.color = "white";
		contactBtn.style.transition ="1s";
	});

	buttonsSection.addEventListener("mouseout", function() {
		portfolioBtn.style.backgroundColor = "transparent";
		portfolioBtn.style.color = "white";
		portfolioBtn.style.transition = "1s";
		contactBtn.style.backgroundColor = "#9bd3d9";
		contactBtn.style.color = "white";
		contactBtn.style.transition = "1s";
	});
}

document.addEventListener("DOMContentLoaded", init);