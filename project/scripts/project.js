
//Get year and last update
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


//HamButton

const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation");


hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

//Arrays titles and subtitles

const titles = [
    { title: "Home", subtitle: "Welcome to Break Dancing Worldwide!" },
    { title: "History", subtitle: "A Brief Historical Overview of Breaking" },
    { title: "Moves", subtitle: "Moves and tricks" },
    { title: "Competitions", subtitle: "Major Competitions" }
];

//Detect page

const titleElement = document.getElementById("title");
const subtitleContainer = document.getElementById("subtitles");

const page = window.location.pathname.split("/").pop();

let sectionName = "";

if (page === "index.html" || page === "") {
    sectionName = "Home";
} else if (page === "history.html") {
  sectionName = "History";
} else if (page === "moves.html") {
  sectionName = "Moves";  
} else if (page === "competitions.html") {
  sectionName = "Competitions"  
}

//Display tittles and subtitles 

const section = titles.find(item => item.title === sectionName);

if (section) {
    titleElement.textContent = `${section.title}`;

    subtitleContainer.innerHTML = "";

    Object.keys(section).forEach(key => {
        if (key !== "title") {
            const h3 = document.createElement("h3");
            h3.textContent = `${section[key]}`;
            subtitleContainer.appendChild(h3);
        }
    });
}

//LocalStorage number of visits

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;   
}       else {
    visitsDisplay.textContent = "This is your first visit. Thank you for visiting us!";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

