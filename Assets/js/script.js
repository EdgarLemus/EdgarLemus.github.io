$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }

    // scroll spy
    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear')
  });



});

document.addEventListener('visibilitychange',
  function () {
    if (document.visibilityState === "visible") {
      document.title = "Edgar Lemus | QA Automation Engineer";
      $("#favicon").attr("href", "Assets/images/R.png");
    }
    else {
      document.title = "Volver al Portfolio";
      $("#favicon").attr("href", "Assets/images/back.png");
    }
  });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["QA Automation Engineer", "Performance Testing", "Mobile & API Testing", "Test Architecture", "IA aplicada a QA"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  const urls = {
    skills: "skills.json",
    projects: "./projects/projects.json",
    certificates: "certificates.json",
  };
  const response = await fetch(urls[type]);
  const data = await response.json();
  return data;
}



function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");

  const categories = [];
  skills.forEach(skill => {
    const cat = skill.category || "Otros";
    if (!categories.includes(cat)) categories.push(cat);
  });

  let skillHTML = "";
  categories.forEach(category => {
    skillHTML += `<h3 class="skills-category-title">${category}</h3>`;
    skillHTML += `<div class="row skills-row">`;
    skills.filter(skill => (skill.category || "Otros") === category).forEach(skill => {
      const iconSrc = /^https?:\/\//.test(skill.icon) ? skill.icon : `Assets/images/Skills/${skill.icon}`;
      skillHTML += `
        <div class="bar">
              <div class="info skills-card">
                <img class="skills-card-img" src="${iconSrc}" alt="${skill.name}" width="50" loading="lazy"/>
                <span class="skills-card-name" >${skill.name}</span>
              </div>
            </div>`
    });
    skillHTML += `</div>`;
  });

  skillsContainer.innerHTML = skillHTML;
}


/* JavaScript code for generating project cards */

function showProjects(projects) {
  let projectsContainer = document.querySelector("#projects .box-container");
  let projectHTML = "";
  projects.forEach(project => {
    projectHTML += `
        <div class="box project-card">

      <img id="projectimage" draggable="false" src="Assets/images/projects/${project.image}.png" alt="project" />

      <div>
        <div class="tag">
        <h3 class="project-title">${project.name}</h3>
        </div>
        <div class="desc">
          <p class="project-description">${project.desc}</p>
          <br>
       
          <div class="btns">
            <a href="${project.links.view}" class="btn project-deployed-link" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn project-github-link" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>

             <div id="tech2" class="project-tech-stack"><img id="tech" src="https://skillicons.dev/icons?i=${project.stacks}" alt=""></div>

        </div>
      </div>
    </div>`
  });



  projectsContainer.innerHTML = projectHTML;



  let sendbtn = document.querySelector("#send");
  sendbtn.addEventListener('click', function (e) {
    e.preventDefault()
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;
    let phone = document.querySelector("input[name='phone']").value;

    if (email.length < 7) {




      if (name.length == 0 || email.length == 0 || message.length == 0 || phone.length == 0) {


        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please make sure to fill in all the required fields before submitting the form!',
        })
        return;
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Email Address!',
      })
      return;

    }


    let bodym = 'name: ' + name + '<br/> email :' + email + '<br/> phone :' + phone + '<br/> message :' + message

    Email.send({
      SecureToken: "a5d79846-ab78-4f9c-a0a8-bf499c8aead5",
      To: 'edgar.lemus2096@gmail.com',
      From: 'edgar.lemus2096@gmail.com',
      Subject: "Message send through Portfolio by :" + name,
      Body: bodym
    }).then(
      message =>
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully!',
          showConfirmButton: false,
          timer: 1500
        })
    );
    document.querySelector("input[name='name']").value = "";
    document.querySelector("input[name='email']").value = "";
    document.querySelector("textarea[name='message']").value = "";
    document.querySelector("input[name='phone']").value = "";

  })




  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    // reset: true
  });

  /* SCROLL PROJECTS */
  srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
  showSkills(data);
});

fetchData("projects").then(data => {
  showProjects(data);
});

function showCertificates(data) {
  const renderCards = (items) => items.map(item => `
        <a class="certificate-card" target="_blank" rel="noopener" href="${item.url}">
          <i class="fas fa-award"></i>
          <h3>${item.name}</h3>
          <span>${item.desc || "Curso Platzi"}</span>
        </a>`).join("");

  document.getElementById("certificatesRutas").innerHTML = renderCards(data.rutas);
  document.getElementById("certificatesCursos").innerHTML = renderCards(data.cursos);

  document.querySelectorAll(".cert-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".cert-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("certificatesRutas").hidden = tab.dataset.tab !== "rutas";
      document.getElementById("certificatesCursos").hidden = tab.dataset.tab !== "cursos";
    });
  });
}

fetchData("certificates").then(data => {
  showCertificates(data);
});