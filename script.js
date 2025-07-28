const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const switchModeBtn = document.querySelector(".switch-btn");

function setClock() {
	const now = new Date();

	let hh = now.getHours() * 30;
	let mm = now.getMinutes() * deg;
	let ss = now.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;

	// Digital clock values
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
	let am = h >= 12 ? "PM" : "AM";

	// Convert 24hr to 12hr
	if (h > 12) h -= 12;
	if (h === 0) h = 12;

	// Zero padding
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	hours.textContent = h;
	minutes.textContent = m;
	seconds.textContent = s;
	ampm.textContent = am;
}

setClock();
setInterval(setClock, 1000);

// Theme Switching Logic
function switchTheme() {
	const html = document.documentElement;
	const currentTheme = html.getAttribute("data-theme");

	if (currentTheme === "light") {
		html.setAttribute("data-theme", "dark");
		switchModeBtn.textContent = "Light";
	} else {
		html.setAttribute("data-theme", "light");
		switchModeBtn.textContent = "Dark";
	}
}

switchModeBtn.addEventListener("click", switchTheme);


document.documentElement.setAttribute("data-theme", "dark");
switchModeBtn.textContent = "Light";
