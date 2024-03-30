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
          <p>I'm a senior at University of Santa Cruz studying computer science game design. 
          Throughout the years, I have worked on a wide varity of games. One of my proudest work is my capstone project, which is a WebGL build targeted for the mobile platform! 
          In that project, I focused on designing the game. My roles in the project were design and playtest lead. I also fill in any programming work when the production lead requires my assistance.
          <br>
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
            <div class="abouttxt">
              <p><b>Overview:</b></p>
              <p>This is a 2D roguelite shoot em up type of game. In this game, you play as drones that shoot at big mutant bugs and earn treasures as you progress through the game. After earning some currency, you can spend them to acquire better equipments such as new drones and weapons. There are several paths to choose from, which will lead to the final boss according to the map you chose. For greater accessibility, the options provided allow the player to play in colorblind mode or play the game in another language.</p>
      
              <p><b>Engine</b>: Unity2d</p>
              <p><b>Targeted Platform</b>: Mobile (WebGL build)</p>
              <p><b>Language</b>: C#</p>
              <p><b>Duration</b>: 3 months</p>
              <p><b>Completion</b>: Vertical Slice</p>
              <p><b>Team Size</b>: 3</p>
              <p><b>Role</b>: Design + Playtest Lead</p>
              <p><b>Contribution Highlights</b>: Scene flow, splash experience, player combat abilities programming, UI/UX</p>
              <p><b>Game Archive + Playable Build</b>: <a href="https://sirapatp257.github.io/RaptoroidsArchive/">Visit the official game site here!</a></p>

            </div>
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
              <p>I'm a senior at University of California Santa Cruz studying Computer Science: Computer Game Design. My passion for games started from the good old days of Playstation 1. My first game on it was Yu-Gi-Oh! Forbidden Memories and it's a game that confuses me till today. I'm passionate about game design/programming because I can combine the technical and creative aspects into a product.
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

