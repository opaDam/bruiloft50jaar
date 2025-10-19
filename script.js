// console.log("Script loaded successfully.")
// // Additional JavaScript functionality can be added here.

// const videoPlayer = document.getElementById('videoPlayer');
//     const videoSource = document.getElementById('videoSource');
//     const videoItems = document.querySelectorAll('#videoList li');

//     videoItems.forEach(item => {
//       item.addEventListener('click', () => {
//         // Verwijder 'active' klasse van alle items
//         videoItems.forEach(v => v.classList.remove('active'));
//         item.classList.add('active');

//         // Laad de geselecteerde video
//         const src = item.getAttribute('data-src');
//         videoSource.src = src;
//         videoPlayer.load();
//         videoPlayer.play();

//               // Scroll soepel naar de videoplayer
//     videoPlayer.scrollIntoView({ behavior: 'smooth' , top: videoPlayer.offsetTop 350});
        
//       });
//     });

const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const videoItems = document.querySelectorAll('#videoList li');
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function loadVideo(index) {
  if (index < 0) index = videoItems.length - 1;
  if (index >= videoItems.length) index = 0;
  currentIndex = index;

  videoItems.forEach(v => v.classList.remove('active'));
  const selected = videoItems[index];
  selected.classList.add('active');

  videoSource.src = selected.dataset.src;
  videoPlayer.load();
  videoPlayer.play();

  videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 🎞️ Klik op lijstitem
videoItems.forEach((item, i) => {
  item.addEventListener('click', () => loadVideo(i));
});

// ▶️ / ⏸️ Toggle
playPauseBtn.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = '⏸️ Pauze';
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = '▶️ Afspelen';
  }
});

// ⏭️ Volgende
nextBtn.addEventListener('click', () => loadVideo(currentIndex + 1));

// ⏮️ Vorige
prevBtn.addEventListener('click', () => loadVideo(currentIndex - 1));

// 🔁 Automatisch volgende na einde
videoPlayer.addEventListener('ended', () => loadVideo(currentIndex + 1));









