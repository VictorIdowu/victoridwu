'use strict';

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const introSection = document.querySelector('.intro-section');
const stackSection = document.querySelector('.stack');
const about = document.querySelector('.about');
const socials = document.querySelector('.socials');
const projectSection = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');
const projectImgs = document.querySelectorAll('.project-img');
const aboutBtn = document.querySelector('.about-link');
const contactBtn = document.querySelector('.contact-link');
// const projectsBtn = document.querySelector('.projects-link');
const footerLink = document.querySelectorAll('.nav-link');
const main = document.querySelector('.main');
const myName = document.querySelector('.my-name');
const allSections = document.querySelectorAll('.section');
const yearEl = document.querySelector('.year');
const timeEl = document.querySelector('.time');

/// Projects Section reaction
projects.forEach(project => {
  const firstChild = project.firstElementChild;
  const lastChild = project.lastElementChild;
  const children = project.children;

  /// on mouseover
  project.addEventListener('mouseover', function (e) {
    firstChild.classList.add('filter');

    [...children].forEach(child => {
      if (child !== firstChild && child !== lastChild)
        child.classList.remove('hidden');
    });
  });

  // on mouse out
  project.addEventListener('mouseout', function (e) {
    firstChild.classList.remove('filter');

    [...children].forEach(child => {
      if (child !== firstChild && child !== lastChild)
        child.classList.add('hidden');
    });
  });
});

// change to about and contact page
let html = ``;

const change = function (e) {
  if (e.target === aboutBtn) {
    html = `
  <section class="about container">
  <div class="about-section">
    <h2 class="heading-about">About me</h2>
    <p class="about-text text">Hello, my name is Victor, I'm a Front-End Developer from Lagos, Nigeria.
    </p>
    <p class="about-text text">I started my tech journey by learning about "Users Experience and User Interface design".
    
    And driven by the interest in creating real world interfaces that users can interact with in real time, I started writing codes.
    
    In less than a year I've gained visible experience in using technologies like CSS & HTML, JavaScript, and ReactJs. I've built real world projects using this skills set.
    
    I'm on a journey to becoming a Full-stack Developer.
    </p>
    <p class="about-text text">Here are a few technologies I work with:</p>
    <div class="about-stack">
      <iconify-icon class="about-icon" icon="vscode-icons:file-type-html"></iconify-icon>
      <iconify-icon class="about-icon" icon="vscode-icons:file-type-css"></iconify-icon>
      <iconify-icon class="about-icon" icon="logos:javascript"></iconify-icon>
      <iconify-icon class="about-icon" icon="logos:bootstrap"></iconify-icon>
      <iconify-icon class="about-icon" icon="logos:figma"></iconify-icon>
      <iconify-icon class="about-icon" icon="vscode-icons:file-type-reactjs"></iconify-icon>
    </div>
    <div class='other'></div>
    </div>
  </section>`;
    if (main.firstElementChild.classList.contains('about')) return;
  }

  if (e.target === contactBtn) {
    html = `
    <section class="contact container">
    <div class="about-section">
    <h2 class="heading-contact">Reach Out!</h2>
    <p class="about-text text">Got a question or proposal? Go ahead.  I'm Open To Freelance, Internship and Junior Developer Roles. Get In Touch With Me
    </p>
    
    <a href="mailto:idsonvictor@gmail.com" class="email" target="_blank">Send an Email
    </a>
    <aside class="socials-mobile">
          <a class="social" href="https://github.com/VictorIdowu" target="_blank"><iconify-icon class="social-icon" icon="uil:github"></iconify-icon></a>
          <a class="social" href="https://linkedin.com/in/vctoridowu" target="_blank"><iconify-icon class="social-icon" icon="ri:linkedin-fill"></iconify-icon></a>
          <a class="social" href="https://twitter.com/VictorIdowu_" target="_blank"><iconify-icon class="social-icon" icon="mdi:twitter"></iconify-icon></a>
        </aside>
    </div>
    <div class='other'></div>
    </section>`;
    if (main.firstElementChild.classList.contains('contact')) return;
  }

  const children = main.children;

  // clear html
  [...children].forEach(child => {
    child.style.display = 'none';
  });

  // Display new html content
  main.insertAdjacentHTML('afterbegin', html);

  setTimeout(() => {
    main.firstElementChild.classList.add('show-section');
  }, 100);
  // console.log(html);
};

footerLink.forEach(link => {
  link.addEventListener('click', change);
});

// Back to home page
myName.addEventListener('click', function () {
  window.location.reload();
});

////////////// Reveal Sections /////////////
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// window.onload = event => {
// header.classList.remove('header-hidden');
// footer.classList.remove('footer-hidden');
// socials.classList.remove('footer-hidden');
// introSection.classList.remove('intro-hidden');

// };

setTimeout(() => {
  header.classList.add('header-show');
  footer.classList.add('footer-show');
  socials.classList.add('socials-show');
  introSection.classList.add('intro-show');
}, 100);

//// To current Year ////////
const currentYear = new Date().getFullYear();
yearEl.textContent = `${currentYear}`;
