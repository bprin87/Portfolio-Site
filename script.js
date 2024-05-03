
// execute function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // event listener added to activate class when user scrolls through sections
    window.addEventListener('scroll', function() {
        
        let currentSection = '';

        // iterate through each section and check if the scroll position is within 
        // a range of the section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // if the condition is met, store the ID of the section
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // loop through each link and add/remove class based on matching the section id
        navLinks.forEach(link => {
            
            link.classList.remove('active');
            
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }

            // activate click event listener on link to scroll to section
            link.addEventListener('click', function(event) {
                
                // prevent default link behavior
                event.preventDefault();
                
                // get href attribute of the clicked link
                const targetId = link.getAttribute('href').slice(1);
                
                // get section element
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
 
                    // calculate the target scroll position
                    const targetScrollPosition = targetSection.offsetTop - 111;

                    // scroll to the target position
                    window.scrollTo({
                        top: targetScrollPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

  
    // Animation On Scroll library to display skills
    // Check if the screen size is less than 1024px
    if (window.innerWidth < 1024) {
        // If the screen size is small, initialize AOS with a negative offset to trigger animations immediately
        AOS.init({
            offset: -600, // Change offset to trigger animations sooner or later (px)
            duration: 600, // Duration of animation (ms)
            easing: 'ease-in-out', // Easing type
            delay: 100, // Delay between animations (ms)
        });
    } else {
        // If the screen size is larger than or equal to 1024px, initialize AOS with a positive offset to wait for scrolling
        AOS.init({
            offset: 600, 
            duration: 600,
            easing: 'ease-in-out',
            delay: 100, 
        });
}

  

});



   
        
  

     


    