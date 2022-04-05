//About Me Text Display

const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent =
  "I am a frontend developer in the making. With a great desire to learn new technologies as well as new knowledge. I do everything with great motivation and with a CAN DO approach.";
Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  aboutMeText.appendChild(span);

  //About Me Text Animation
  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutMeTextAnimation 5s infinite";
  });
});

//Projects
const projects = document.querySelectorAll(".project");
projects.forEach((project, i) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });
  project.addEventListener("mouseleave", () => {
    project.firstElementChild.style.top = "2rem";
  });
  //Show Only 3 Projects
  if (i >= 3) {
    project.style.cssText = "display:none;opacity:0";
  }
});

//Show More Projects Button
const projectsBtn = document.querySelector(".projects-btn");
const projectsBtnText = document.querySelector(".projects-btn span");
let showHideBool = true;

projectsBtn.addEventListener("click", (e) => {
  e.preventDefault();

  projects.forEach((project, i) => {
    if (i >= 3) {
      if (showHideBool) {
        project.style.display = "flex";
        project.style.opacity = "1";
        projectsBtnText.textContent = "Show Less";
      } else {
        project.style.display = "none";
        project.style.opacity = "0";
        projectsBtnText.textContent = "Show More";
      }
    }
  });
  showHideBool = !showHideBool;
});

//Section 4
document.querySelectorAll(".skills-btn").forEach((skill) => {
  skill.addEventListener("click", (e) => {
    e.preventDefault();

    const skillText = skill.nextElementSibling;
    skillText.classList.toggle("change");
  });
});

//Navigation scroll-event
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const heightOfSection1 = document.querySelector(".section-1").offsetHeight;

document.addEventListener("scroll", () => {
  menuIcon.classList.add("show-menu-icon");
  navbar.classList.add("hide-navbar");
  if (window.scrollY <= heightOfSection1) {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
  }
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("show-menu-icon");
  navbar.classList.remove("hide-navbar");
});

//Section 5
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });
});

formInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Let`s Talk";
      formHeading.style.opacity = "1";
    }, 300);
  });
});
