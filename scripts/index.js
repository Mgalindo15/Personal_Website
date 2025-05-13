/* -------- Javascript Functions -------- */

// Scrolldown Activates Details Section
document.addEventListener("DOMContentLoaded", () => {
    const overview = document.querySelector(".overview_title");
  
    const handleFirstScroll = () => {
      if (overview) {
        overview.classList.add("overview_animate");
      }
      // Clean Up
      window.removeEventListener("scroll", handleFirstScroll);
    };
  
    window.addEventListener("scroll", handleFirstScroll);
  });
  