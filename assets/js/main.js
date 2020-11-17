// Navbar
var section = [];
var offsetHeight = 0;
const links = document.querySelectorAll('.navbar .nav-menu ul li a');

for (var i = 0;i < links.length;i++) {
  let href = links[i].getAttribute('href');
  if (href == "#") break;
  
  let element = document.querySelector(href);
  let offsetTop = element.offsetTop;
  offsetHeight = offsetHeight + element.offsetHeight;

  let item = {
    "menu": href,
    "offTop": offsetTop,
    "offHeight": offsetHeight
  }
  section.push(item);
}

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let valueY = window.scrollY;

  (valueY > 1)
    ? navbar.classList.add('nav-scroll')
    : navbar.classList.remove('nav-scroll');
  
  for (var item of section) {
    let el = document.querySelector(`[href="${item.menu}"]`);
    if ((valueY+28) >= item.offTop && valueY < item.offHeight) {
      el.parentNode.classList.add('active');
    }else {
      el.parentNode.classList.remove('active');
    }
  }
});

// Toggle Navbar
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function() {
  Array.from(navbar.classList).includes("toggle-on")
  navbar.classList.toggle('toggle-on');
});

// Resize Screen
window.addEventListener('resize', function() {
  let width = window.innerWidth
  
  if (width >= 992) {
    navbar.classList.remove('toggle-on');
  }
});

// Click Navbar Menu
for (link of links) {
  link.addEventListener('click', clickLinks);
}

function clickLinks(e) {
  e.preventDefault();
  let href = this.getAttribute('href');
  let element = document.querySelector(href);

  element.scrollIntoView({
    behavior: "smooth"
  });
}

// Indicator Skill
var indicator = document.querySelectorAll('.skills .skill .indicator .space .fill');

for (item of indicator) {
  let val = item.getAttribute('data-fill');
  val = `${val}%`

  let txt = document.createElement("h3");
  txt.innerHTML = val;

  item.style.width = val;
  item.parentNode.append(txt);
}