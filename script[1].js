// CUSTOMIZE THESE THREE VALUES BEFORE PUBLISHING.
const CONTACT = {
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN/",
  github: "https://github.com/YOUR-GITHUB/"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// A visitor can preview a profile photo locally. It is not uploaded anywhere.
const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");
photoInput.addEventListener("change", event => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = e => { profilePhoto.src = e.target.result; };
  reader.readAsDataURL(file);
});

// Apply contact links from the values above.
const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Project inquiry")}`;
document.getElementById("linkedinLink").href = CONTACT.linkedin;
document.getElementById("githubLink").href = CONTACT.github;
