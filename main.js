const heroContent = document.getElementById("hero-content");
const aboutContent = document.getElementById("about-content");
const skillsContent = document.getElementById("skills-content");
const projectsContent = document.getElementById("projects-content");
const certificationsContent = document.getElementById("certifications-content");
const contactContent = document.getElementById("contact-content");
const footerContent = document.getElementById("footer-content");

if (heroContent) {
  heroContent.innerHTML = `
    <img src="https://ik.imagekit.io/8akopd3mp/Nishanth%20Picture.jpeg" alt="Profile Photo" class="profile-image">
    <h1>Hi, I'm Nishanth</h1>
    <p>Frontend Developer & Visual Designer | Building digital products, brands, and experiences</p>
    <div class="hero-buttons">
      <a href="https://ik.imagekit.io/8akopd3mp/Certificates/resume.jpeg" class="btn" target="_blank">Download Resume</a>
      <a href="#contact" class="btn">Connect With Me</a>
    </div>
  `;
}

if (aboutContent) {
  aboutContent.innerHTML = `
    <h2>About Me</h2>
    <p>
      I'm a 2nd-year BCA student at NGM College, currently doing a Web Development Internship
      at Prodigy InfoTech and building real-world projects.
    </p>
    <ul>
      <li><strong>Education:</strong> BCA – NGM College</li>
      <li><strong>Internship:</strong> Prodigy InfoTech (Dec 2025 – Jan 2026)</li>
    </ul>
  `;
}

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Git & GitHub", level: 75 },
];

if (skillsContent) {
  skillsContent.innerHTML = `<h2>Skills</h2><div class="skills-list"></div>`;
  const skillsList = document.querySelector(".skills-list");

  skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";
    div.innerHTML = `
      <h3>${skill.name}</h3>
      <div class="skill-track">
        <div class="skill-bar" data-level="${skill.level}"></div>
      </div>
    `;
    skillsList.appendChild(div);
  });

  const animateSkills = () => {
    document.querySelectorAll(".skill-bar").forEach(bar => {
      const level = bar.dataset.level;
      if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
        bar.style.width = level + "%";
      }
    });
  };

  window.addEventListener("scroll", animateSkills);
  window.addEventListener("load", animateSkills);
}

const projects = [
  {
    title: "Netflix Clone",
    category: "frontend",
    link: "https://nishanth1076.github.io/responsive-page-netflix-clone/",
    img: "https://ik.imagekit.io/8akopd3mp/netflix.jpeg",
  },
  {
    title: "Stopwatch Web App",
    category: "frontend",
    link: "https://nishanth1076.github.io/Stopwatch-Web-App/",
    img: "https://ik.imagekit.io/8akopd3mp/Screenshot%20(51).png",
  },
  {
    title: "Tic Tac Toe",
    category: "frontend",
    link: "https://nishanth1076.github.io/Tic-Toc-Toe-web-app/",
    img: "https://ik.imagekit.io/8akopd3mp/Screenshot%20(56).png",
  },
];

if (projectsContent) {
  projectsContent.innerHTML = `<h2>Projects</h2><div class="project-container"></div>`;
  const container = document.querySelector(".project-container");

  const renderProjects = (filter = "all") => {
    container.innerHTML = "";
    projects
      .filter(p => filter === "all" || p.category === filter)
      .forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <img src="${p.img}" alt="${p.title}">
          <h3>${p.title}</h3>
          <a href="${p.link}" target="_blank">View Project</a>
        `;
        container.appendChild(card);
      });
  };

  renderProjects();
}

const certifications = [
  {
    title: "Excel: From Beginner to Expert",
    provider: "Analytics Vidhya",
    img: "https://ik.imagekit.io/8akopd3mp/Certificates/Excel.jpeg",
  },
  {
    title: "Introduction to AI & ML",
    provider: "Analytics Vidhya",
    img: "https://ik.imagekit.io/8akopd3mp/Certificates/ai.jpeg",
  },
  {
    title: "ChatGPT as Your Assistant",
    provider: "Analytics Vidhya",
    img: "https://ik.imagekit.io/8akopd3mp/Certificates/gpt.jpeg",
  },
  {
    title: "AI-Powered Ads Certification",
    provider: "Google",
    img: "https://ik.imagekit.io/8akopd3mp/Certificates/google.jpeg",
  },
  {
    title: "Introduction to Python",
    provider: "Analytics Vidhya",
    img: "https://ik.imagekit.io/8akopd3mp/Certificates/python.jpeg",
  },
  {
    title: "Essential SQL Skills",
    provider: "Analytics Vidhya",
    img: "https://ik.imagekit.io/8akopd3mp/Certificates/Excel.jpeg",
  },
];

if (certificationsContent) {
  certificationsContent.innerHTML = `<h2>Certifications</h2><div class="cert-list"></div>`;
  const certList = document.querySelector(".cert-list");

  certifications.forEach(cert => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `
      <a href="${cert.img}" target="_blank">
        <img src="${cert.img}" alt="${cert.title}">
        <h3>${cert.title}</h3>
      </a>
      <p>${cert.provider}</p>
    `;
    certList.appendChild(card);
  });
}

if (contactContent) {
  contactContent.innerHTML = `
    <h2>Contact Me</h2>
    <form id="contact-form" class="contact-container">
      <input type="text" id="name" placeholder="Your Name" required>
      <input type="email" id="email" placeholder="Your Email" required>
      <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `;
}

if (footerContent) {
  footerContent.innerHTML = `
    <p>© 2025 Nishanth. All Rights Reserved</p>
  `;
}

const themeSwitch = document.getElementById("theme-switch");
if (themeSwitch) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeSwitch.checked);
    localStorage.setItem("theme", themeSwitch.checked ? "dark" : "light");
  });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    navMenu.classList.remove("active");
  });

if (contactContent && !document.querySelector(".contact-info")) {
  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";
  contactInfo.innerHTML = `
    <strong>Email:</strong> <a href="mailto:nishanthnishanth53000@gmail.com">nishanthnishanth53000@gmail.com</a><br>
    <strong>Phone:</strong> <a href="tel:+919342421076">+91 9342421076</a><br>
    <a href="https://wa.me/919342421076" target="_blank" class="whatsapp-btn">
      <i class="fab fa-whatsapp"></i> Message on WhatsApp
    </a>
  `;
  contactContent.appendChild(contactInfo);
}


const contactForm = document.getElementById("contact-form");
if (contactForm && !document.getElementById("success-popup")) {
  const successPopup = document.createElement("div");
  successPopup.id = "success-popup";
  successPopup.textContent = "Message sent successfully!";
  successPopup.style.position = "fixed";
  successPopup.style.top = "20px";
  successPopup.style.right = "20px";
  successPopup.style.background = "#4BB543";
  successPopup.style.color = "#fff";
  successPopup.style.padding = "10px 20px";
  successPopup.style.borderRadius = "5px";
  successPopup.style.display = "none";
  successPopup.style.zIndex = "9999";
  document.body.appendChild(successPopup);

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    successPopup.style.display = "block";
    setTimeout(() => (successPopup.style.display = "none"), 3000);
    contactForm.reset();
  });
}
});