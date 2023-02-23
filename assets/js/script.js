const toTop = document.querySelectorAll(".to-top");
toTop.forEach((e) => {
  e.addEventListener("click", () =>
    window.scroll({ behavior: "smooth", top: 0 })
  );
});

const year = document.querySelector(".year");
let date = new Date();
year.innerHTML = date.getFullYear();

let tools = [
  "html5",
  "css3",
  "bootstrap",
  "javascript",
  "reactjs",
  "github",
  "gitbash",
  "vscode",
  "photoshop",
  "illustrator",
];

let bagianTools = document.querySelector(".tools");
let delay = 0;

let isiTools = `${tools
  .map(
    (e) =>
      `<div class="col-4 col-md-3 col-lg-2 m-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 50)}">
        <img src="assets/img/logo/${e}.png" alt="${e}" class="img-fluid">
      </div>`
  )
  .join("")}`;

bagianTools.innerHTML = isiTools;

let project = document.querySelector(".project");
let myProject = [
  {
    title: "Calculator",
    github: "https://anasfaisalamri.github.com/calculator",
    url: "https://anasfaisalamri.github.io/calculator",
  },
  {
    title: "To-do-List",
    github: "https://github.com/anasfaisalamri/to-do-list",
    url: "https://anasfaisalamri.github.io/to-do-list",
  },
  {
    title: "Wedding Invitation",
    github: "https://github.com/anasfaisalamri/wedding-inv",
    url: "https://anasfaisalamri.github.io/wedding-inv",
  },
];

let isiProject = `${myProject
  .map(
    (e) =>
      `<div class="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 50)}">
        <div class="card">
          <img class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <a href="${
              e.github
            }" target="_blank" class="btn btn-primary">Github</a>
            <a href="${e.url}" target="_blank" class="btn btn-primary">Open</a>
          </div>
        </div>
      </div>`
  )
  .join("")}`;

project.innerHTML = isiProject;

let designs = [
  "cyborgguppy",
  "luwakmotobike",
  "kingfarmer",
  "homesteak",
  "seafoodjulid",
  "butetjayatas",
];

let items = [];

designs.forEach((value, index) => {
  items.push(`assets/img/thumb/${value}.png`);
});

items.forEach((item) => {
  let img = document.createElement("img");
  img.setAttribute("src", item);
  let design = document.querySelector(".design");
  design.appendChild(img);
});

let contacts = [
  {
    logo: "github",
    url: "https://github.com/anasfaisalamri",
  },
  {
    logo: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=085161552498",
  },
  {
    logo: "instagram",
    url: "https://instagram.com/anasfaisalamri",
  },
];

let bagianContact = document.querySelector(".contacts");

let isiContact = `${contacts
  .map(
    (contact) =>
      `<div class="col-sm-3 col-md-3 m-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 20)}">
        <a href="${contact.url}" target="_blank" rel="noopener noreferrer">
          <img src="assets/img/logo/${contact.logo}.png" alt="${contact.logo}">
        </a>
      </div>`
  )
  .join("")}`;

bagianContact.innerHTML = isiContact;
