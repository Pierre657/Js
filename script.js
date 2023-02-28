const text = document.querySelector('.text')
const img = document.querySelector('.image')
const ici = document.querySelector('.ici')
const burger = document.querySelector('.fa-bars')
const side = document.querySelector('.side')


document.addEventListener("DOMContentLoaded", function() {
     setTimeout(() => {
         text.classList.add('vis');
         ici.style.opacity = 1;
    }, 0);
})

burger.addEventListener('click', function() {
    side.classList.toggle('active')
})

window.addEventListener('resize', function () {
  if (window.innerWidth > 1100) side.classList.remove('active');
});


function showNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  text.appendChild(notification);

  setTimeout(() => {
    let opacity = 1;
    const intervalId = setInterval(() => {
      opacity -= 0.1;
      notification.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(intervalId);
        notification.remove();
      }
    }, 50); // Fades the notification out over 1 second
  }, 2000); // Displays the notification for 3 seconds before fading it out
}

//   setTimeout(() => {
//     notification.remove();
//   }, 3000); // Removes the notification after 3 seconds
// }

showNotification('Your profile has been updated successfully!');


//  setTimeout(() => {
        //     text.style.color = 'pink'
        //     ici.style.border = '10px solid white'
        //     ici.style.borderRadius = '30px'
        //     // img.style.backgroundImage = 'url(/beach-1852945_1280.jpg)';
        //  }, 1000);

let num = Math.ceil(Math.random() * 100)


console.log(num);

let randomf;


//   fetch('https://api.imgflip.com/get_memes')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//       const memes = data.data.memes.map((meme) => {
//         return {
//           id: meme.id,
//           name: meme.name,
//           url: meme.url,
//         };
//       });
//       console.log(memes);
//     })
//     .catch((error) => {
//       console.error('Error fetching memes:', error);
//     });

    // fetch('https://api.imgflip.com/get_memes')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const memesList = document.getElementById('memes-list');
    //     const memes = data.data.memes;
    //     memes.forEach((meme) => {
    //       const memeItem = document.createElement('div');
    //       memeItem.innerHTML = `ID: ${meme.id}, Name: ${meme.name}, URL: ${meme.url}`;
    //       memesList.appendChild(memeItem);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching memes:', error);
    //   });

    // fetch('https://api.imgflip.com/get_memes')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const memesList = document.getElementById('memes-list');
    //     const memes = data.data.memes;
    //     memes.forEach((meme) => {
    //       const memeItem = document.createElement('li');
    //       memeItem.classList.add('meme-item'); // add class name to the list item
    //       memeItem.innerHTML = `ID: ${meme.id}, Name: ${meme.name}, URL: ${meme.url}`;
    //       memesList.appendChild(memeItem);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching memes:', error);
    //   });

    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        const memesList = document.getElementById('memes-list');
        const memes = data.data.memes;
        memes.forEach((meme) => {
          const memeItem = document.createElement('div');
          memeItem.classList.add('meme-item'); // add class name to the list item
          memeItem.innerHTML = `<div class='red'>${meme.name}</div>`;
          //   ID: ${meme.id}, Name:

          const memeImage = document.createElement('img');
          memeImage.classList.add('meme-image'); // add class name to the image
          memeImage.src = meme.url;
          memeItem.appendChild(memeImage); // append the image to the list item

          memesList.appendChild(memeItem);
        });
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });