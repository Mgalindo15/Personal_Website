/* -------- Javascript Functions -------- */

/* Scroll & Visibility Event Handlers for Title Animations */
document.addEventListener("DOMContentLoaded", () => {
    // For Profile Headings
    const overview = document.querySelector(".overview_title");
    const projects = document.querySelectorAll(".Project");
    // Flag to track scrolling
    let hasScrolled = false;
    // funciton checks if Title is in viewport (visible)
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      );
    }
    //function that only triggers when scroll event happened at least once
    function triggerVisibleProjects() {
      if (!hasScrolled) return;
        //will check piecewise visibility, trigger project title anim if true
      projects.forEach((project) => {
        if (isInViewport(project)) {
          project.classList.add("visible");
        }
      });
    }
    // controller for scroll event
    function handleScroll() {
      if (!hasScrolled) {
        hasScrolled = true;
        //action to trigger overview title anim
        if (overview) {
          overview.classList.add("overview_animate");
        }
      }
  
      triggerVisibleProjects();
    }
  
    //for refresh
    window.addEventListener("scroll", handleScroll);
    triggerVisibleProjects();
  });