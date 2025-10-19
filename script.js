console.log("Script loaded successfully.")
// Additional JavaScript functionality can be added here.

const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoItems = document.querySelectorAll('#videoList li');

    videoItems.forEach(item => {
      item.addEventListener('click', () => {
        // Verwijder 'active' klasse van alle items
        videoItems.forEach(v => v.classList.remove('active'));
        item.classList.add('active');

        // Laad de geselecteerde video
        const src = item.getAttribute('data-src');
        videoSource.src = src;
        videoPlayer.load();
        videoPlayer.play();

              // Scroll soepel naar de videoplayer
    videoPlayer.scrollIntoView({ top: videoPlayer.offsetTop - 250, behavior: 'smooth', block: 'start' });
        
      });
    });




