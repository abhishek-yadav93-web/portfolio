const roles = ["Full-Stack Developer",
    "Python & FastAPI Specialist",
    "Data Analytics Enthusiast",
    "AI & Machine Learning Engineer"];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const word = roles[ri];
  if (!deleting) {
    ci++;
    el.innerHTML = word.slice(0, ci) + '<span class="cursor"></span>';
    if (ci === word.length) { deleting = true; setTimeout(type, 1400); return; }
  } else {
    ci--;
    el.innerHTML = word.slice(0, ci) + '<span class="cursor"></span>';
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 45 : 85);
}
type();

function scroll(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
