import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrapper">
    <div class="header">
      <div class="name">
        <h1>Wichapas Pichetpongsa</h1>
      </div>
      <a href="https://github.com/Muffing21" target="_blank">
        <img width="50" height="50" alt="GitHub Logomark" class="height-auto" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png">
      </a>
      <a href="https://www.linkedin.com/in/wichapas-pichetpongsa-b17955211/" target="_blank">
        <img width="50" height="50" class="height-auto" src="img/linkedin.jpg">
      </a>
      
      
    </div>
    
    <div class="tabs">
        <button class="tab-link active" data-tab-id="tab1">Home</button>
        <button class="tab-link" data-tab-id="tab2">Projects</button>
        <button class="tab-link" data-tab-id="tab3">About me</button>
    </div>  
    <body>
      <div class="tab-content-container">
        <div id="tab1" class="tab-content" style="display: block;">
          <h1><u>Hello and welcome to my portfolio!</u></h1>
          <p>I'm a fresh graduate from University of Santa Cruz with a degree in Computer Science: Game Design. 
          Throughout the years, I have worked on a wide varity of games. One of my proudest work is my capstone project, which is an IOS build targeted for the mobile platform! 
          In that project, I focused on programming/designing the game. I'm also the assistance guy who fills in any programming/art work when the production lead requires my help.
          <br>
          One of my biggest achievement in actual work experience is my internship at Deloitte! I did Python programming under the Risk Advisory team. It was an eye opening experience as my team helped me grow out of my comfort zone. I worked on data cleaning and feature engineering to produce a model for our client. 
          <br>
          Here is a link to view my resume! (for more details about projects please stay on this site)
          <div class="title">
            <a href="img/Harry_Resume_2024.pdf" download>
              <p>Download Here!</p>
            </a>
            <img src="img/resume_img.jpg" width="560" height="720">
          </div>
        </div>

        <div id="tab2" class="tab-content">
          <div class="title">  
            <h1><u>Projects</u></h1>
          </div> 
          
          <div class="title2left">
            <h2><u>Raptoroids</u></h2>
          </div>
          <div class="aboutcontainer">
            <div class="aboutimg">
              <div class="slideshow-container">
                <div class="slide fade">
                  <img src="img/raptoroid1.jpg" alt="Slide 1">
                </div>
                <div class="slide fade">
                  <img src="img/raptoroid2.jpg" alt="Slide 2">
                </div>
                <div class="slide fade">
                  <img src="img/raptoroid3.jpg" alt="Slide 3">
                </div>  
              </div>
            </div>  
            <div class="abouttxt" id="project-section-1"></div>
          </div>

          <div class="title2left">
            <h2><u>TBD</u></h2>
          </div>
          <div class="aboutcontainer">
            <div class ="aboutimg">
              <div class="slideshow-container">
              </div>
            </div>
            <div class="abouttxt" id="project-section-2"></div>
          </div>

          
        </div>
        <div id="tab3" class="tab-content" >
            
          <div class ="title">
            <h1><u>About Me</u></h1>
          </div>  
          <div class="aboutcontainer">
            
            <div class="aboutimg">
              <img width="360" height="480" class="height-auto" src="img/IMG-6365.JPG">
            </div>
            <div class="abouttxt">
              <h2 style="color: #2ad346">Hello! I'm Wichapas Pichetpongsa.</h2>
              <h3>You can call me Harry, my real name is kind of difficult to pronounce!</h3>
              <p>My interest in games started from the good old days of Playstation 1. My first game on it was Yu-Gi-Oh! Forbidden Memories and it's a game that confuses me till today. I'm Interested in game design/programming because I can combine the technical and creative aspects into something tangible.
                <br><br><b>Some of my favourite games</b>: Dota 2, CSGO, Warframe, Yu-Gi-Oh Master Duel.
                <br><br><b>Hobbies when not working or gaming</b>: Golf, Table Tennis, Gym, making youtube videos.
                <br><br>If you're interested about me, please reach out!
                <br><br><b>Email</b>: harryex3@gmail.com
              </p>
            </div>
          </div>
            
        </div>
      </div>
    </body>  
  </div>
`
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab links
  const tabLinks = document.querySelectorAll(".tab-link");


  tabLinks.forEach((tabLink) => {
      tabLink.addEventListener("click", () => {
          tabLinks.forEach((link) => {
              link.classList.remove("active");
          });

          tabLink.classList.add("active");

          // Hide all tab content
          const tabContents = document.querySelectorAll(".tab-content");
          tabContents.forEach((content) => {
              (content as HTMLElement).style.display = "none";
          });

          const targetTabId = tabLink.getAttribute("data-tab-id");
          if(targetTabId){
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
              targetTabContent.style.display = "block";
            }
          }
          
      });
  });
});

let slideIndex = 0;
let imgTransitionSpeed: number = 5000;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, imgTransitionSpeed); // Change image every 2 seconds
}

interface ProjectSectionContent {
  overview: string;
  engine: string;
  platform: string;
  language: string;
  duration: string;
  completion: string;
  teamSize: string;
  role: string;
  highlights: string;
  archiveLink: string;
  playableLink: string;
}

function generateProjectText(content: ProjectSectionContent): string{
  const { overview, engine, platform, language, duration, completion, teamSize, role, highlights, archiveLink, playableLink } = content;

  return `
    <div class="abouttxt">
      <p><b>Overview:</b></p>
      <p>${overview}</p>
      <p><b>Engine</b>: ${engine}</p>
      <p><b>Targeted Platform</b>: ${platform}</p>
      <p><b>Language</b>: ${language}</p>
      <p><b>Duration</b>: ${duration}</p>
      <p><b>Completion</b>: ${completion}</p>
      <p><b>Team Size</b>: ${teamSize}</p>
      <p><b>Role</b>: ${role}</p>
      <p><b>Contribution Highlights</b>: ${highlights}</p>
      <p><b>Game Archive</b>: <a href="${archiveLink}">Visit the game archive here!</a></p>
      <p><b>Playable Build</b>: you can install the game from <a href="${playableLink}"><b>here</b></a></p>
    </div>
  `
}

const projectSection1 = generateProjectText({
  overview: "This is a 2D roguelite shoot em up type of game. In this game, you play as drones that shoot at big mutant bugs and earn treasures as you progress through the game. After earning some currency, you can spend them to acquire better equipments such as new drones and weapons. There are several paths to choose from, which will lead to the final boss according to the map you chose. For greater accessibility, the options provided allow the player to play in colorblind mode or play the game in another language.",
  engine: "Unity2d",
  platform: "mobile (IOS)",
  language: "C#",
  duration: "7 months",
  completion: "full production",
  teamSize: "6",
  role: "programmer + art",
  highlights: "gameplay programming, 2 bosses, Thai localization",
  archiveLink: "https://sirapatp257.github.io/RaptoroidsArchive/",
  playableLink: "https://apps.apple.com/us/app/raptoroids/id6502815414"
});

const projectSection2 = generateProjectText({
  overview: "This is a soon to be game project that I'm still currently prototyping. It will be a game inspired by my favourite game called Dota 2. Since Dota 2 is a highly competitive MOBA, my goal is to combine 2D platforming with Dota for a more story driven feel. No one will do it? Fine, I will do it myself!",
  engine: "Unity",
  platform: "PC",
  language: "C#",
  duration: "TBD",
  completion: "Still Prototyping",
  teamSize: "1",
  role: "Everything",
  highlights: "TBD",
  archiveLink: "",
  playableLink: ""
});

document.getElementById('project-section-1')!.innerHTML = projectSection1;
document.getElementById('project-section-2')!.innerHTML = projectSection2;


