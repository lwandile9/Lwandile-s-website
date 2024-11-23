document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".project-card");
	const buttons = document.querySelectorAll(".filter-btn");

	// GSAP animation
	const animateCards = (category) => {
		gsap.to(cards, {
			opacity: 0,
			y: 50,
			duration: 0.5,
			onComplete: () => {
				cards.forEach((card) => {
					card.style.display =
						category === "all" || card.dataset.category === category
							? "block"
							: "none";
				});
				gsap.fromTo(
					cards,
					{ opacity: 0, y: 50 },
					{ opacity: 1, y: 0, duration: 0.5 }
				);
			},
		});
	};

	// Filter functionality
	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const category = btn.dataset.category;
			animateCards(category);
		});
	});

	// Show all on load
	animateCards("all");
});

//contuct

const contactButton = document.getElementById("contactButton");

gsap.to(contactButton, {
	scale: 1.3,
	rotation: 15,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
	duration: 1.5,
});

contactButton.addEventListener("click", function () {
	const modal = new bootstrap.Modal(document.getElementById("contactModal"));

	modal.show();

	const modalContent = document.querySelector(".modal-content");
	gsap.from(modalContent, {
		opacity: 0,
		y: 50,
		duration: 0.6,
		ease: "power3.out",
	});
});

document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	const progressBars = document.querySelectorAll(".progress-bar");

	progressBars.forEach((bar) => {
		const widthValue = bar.getAttribute("aria-valuenow") + "%";

		gsap.fromTo(
			bar,
			{
				width: "0%",
				opacity: 0,
			},
			{
				width: widthValue,
				opacity: 1,
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: bar,
					start: "top 80%",
					end: "top 40%",
					scrub: true,
				},
			}
		);
	});
});
