/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Student","FreeLancer","No Code Developer","Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Define the download link and file name
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1C4NBkV7h81wdqHa-SQdkndmlGDGeGtme';
    const fileName = 'CV.pdf';

    // Function to handle the download
    function handleDownload(e) {
        e.preventDefault(); // Prevent the default button behavior
        const link = document.createElement('a'); // Create a new anchor element
        link.href = downloadUrl; // Set the href attribute to the download link
        link.download = fileName; // Specify the file name for the download
        document.body.appendChild(link); // Append the link to the body
        link.click(); // Programmatically click the link to trigger the download
        document.body.removeChild(link); // Remove the link from the body
    }

    // Select and add event listener to the "Download CV" button
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.innerHTML.includes('Download CV')) {
            btn.addEventListener('click', handleDownload);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Define URLs for social media profiles
  const socialLinks = {
      'uil-instagram': 'https://www.instagram.com/jay.dharun/',
      'uil-linkedin-alt': 'https://www.linkedin.com/in/jayadharunr/',
      'uil-dribbble': 'https://dribbble.com/jayadharunr/', // Corrected the URL for Dribbble
      'uil-github-alt': 'https://github.com/Kenway45'
  };

  // Function to handle social media redirection
  function handleSocialRedirect(e) {
      const iconClass = e.currentTarget.querySelector('i').classList[1]; // Get the icon class
      const url = socialLinks[iconClass]; // Get the corresponding URL

      if (url) {
          window.open(url, '_blank'); // Open the URL in a new tab
      }
  }

  // Add event listeners to each social media icon
  document.querySelectorAll('.social_icons .icon').forEach(icon => {
      icon.addEventListener('click', handleSocialRedirect);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = {
      "instagram-icon": "https://www.instagram.com/jay.dharun",
      "linkedin-icon": "https://www.linkedin.com/in/jayadharunr/",
      "dribbble-icon": "https://dribbble.com/your-profile",
      "github-icon": "https://github.com/kenway45"
  };

  for (const [id, url] of Object.entries(socialLinks)) {
      const iconElement = document.getElementById(id);
      if (iconElement) {
          iconElement.addEventListener('click', function() {
              window.open(url, '_blank');
          });
      }
  }
});


