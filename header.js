document.addEventListener("DOMContentLoaded", function() {
    let scrollpos = window.scrollY;
    const header = document.querySelector(".header");
    const header_height = header.offsetHeight;
  
    const add_class_on_scroll = () => {
      header.classList.add("headersticky");
      console.log('Added class');
    };
    
    const remove_class_on_scroll = () => {
      header.classList.remove("headersticky");
      console.log('Removed class');
    };
    
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
    
      if (scrollpos >= header_height) { 
        add_class_on_scroll();
      } else { 
        remove_class_on_scroll();
      }
    
      console.log('Scroll Position:', scrollpos);
    });
});