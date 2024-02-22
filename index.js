const currentYearEl = document.querySelector("span#current-year");

currentYearEl.innerHTML = new Date().getUTCFullYear();

const skillsTag = document.querySelector("section#skills");
const skillsFront = ["HTML", "CSS", "JavaScript", "React", "React Native"];
