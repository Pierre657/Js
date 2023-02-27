const text = document.querySelector('.text')
const img = document.querySelector('.image')

document.addEventListener("DOMContentLoaded", function() {
     setTimeout(() => {
         text.classList.add('vis');
         setTimeout(() => {
            text.style.color = 'pink'
            // img.style.backgroundImage = 'url(/beach-1852945_1280.jpg)';
         }, 1300);
    }, 100);
    
   
})