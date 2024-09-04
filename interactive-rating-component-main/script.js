const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const rating = document.querySelector(".li-num");
const number = document.querySelector(".num");
const sbtBtn = document.querySelector(".sbmt-btn");

sbtBtn.addEventListener("click", function () {
	container1.classList.add("hidden");
	container2.classList.remove("hidden");
});

function rate(event) {
	number.textContent = event.target.textContent;
}