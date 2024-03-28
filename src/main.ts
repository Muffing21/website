import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="header">
      
      <h1>Wichapas Pichetpongsa</h1>
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
          <h1>Hello and welcome to my portfolio!</h1>
          <p>I'm a senior at University of Santa Cruz studying computer science game design. 
          Throughout the years, I have worked on a wide varity of games. One of my proudest work is my capstone project, which is a WebGL build targeted for the mobile platform!
          In that project, I focused on designing the game. My roles in the project were design and playtest lead. I also fill in any programming work when the production lead requires my assistance.
          <br>
          <br>
          Here is a link to download my resume! (for more details about projects please stay on this site)
          <a href="img/Harry_Resume_2024.pdf" download>
            <p>Download Here!</p>
          </a>
          <img src="img/resume_img.jpg" width="250" height="480">
        </div>

        <div id="tab2" class="tab-content">
            <h1>Projects</h1>
            <p>'m a senior at University<br>
              of Santa Cruz studying<br>
              computer science game design<br>. 
            Throughout the years, <br>I have worked on a wide varity of <br>games. One of my proudest work is my capstone project, which is a WebGL build targeted for the mobile platform!
        </div>
        
        <div id="tab3" class="tab-content" >
            <h1>About Me</h1>
            <img width="360" height="480" class="height-auto" src="img/IMG-6365.JPG">
            </a>
            <div class="text-color">
              <p>Hello!</p>
            </div>
            <div class="body-text">
              <p>I'm a senior at University of California Santa Cruz studying Computer Science: Computer Game Design.</p>
            </div>
        </div>
      </div>
    </body>  
  </div>
`
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab links
  const tabLinks = document.querySelectorAll(".tab-link");

  // Add click event listeners to each tab link
  tabLinks.forEach((tabLink) => {
      tabLink.addEventListener("click", () => {
          // Remove 'active' class from all tab links
          tabLinks.forEach((link) => {
              link.classList.remove("active");
          });

          // Add 'active' class to the clicked tab link
          tabLink.classList.add("active");

          // Hide all tab content
          const tabContents = document.querySelectorAll(".tab-content");
          tabContents.forEach((content) => {
              (content as HTMLElement).style.display = "none";
          });

          // Show the corresponding tab content for the clicked link
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

