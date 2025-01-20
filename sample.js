const playlist = [
    {
      name: 'Ana Abl',
      image: 'https://lastfm.freetls.fastly.net/i/u/770x0/7b8097e443c6c5deff88b5f78512f598.jpg#7b8097e443c6c5deff88b5f78512f598',
      nasheed: './nasheeds/AnaAlAbduNasheed-Youtube2.mp3',
    },
    {
      name: 'Kashawqi Al Layali',
      image: 'https://i.ytimg.com/vi/2UUspwSTswI/sddefault.jpg',
      nasheed: './nasheeds/kashawqi_al_layali_ldaw2i_al_qamar.mp3',
    },
    {
      name: 'Shukran Laka Rabbi',
      image: 'https://i.scdn.co/image/ab67616d0000b273fb85d120317ed7cf02925eae',
      nasheed: './nasheeds/laka-rabbi-nasheed.mp3',
    },
    {
      name: 'My Arabic Language',
      image: 'https://i.ytimg.com/vi/Ov0-CBnOW4w/maxresdefault.jpg',
      nasheed: './nasheeds/my-arabic-language.mp3',
    },
    {
      name: 'Taweel Al Shawq',
      image: 'https://i.ytimg.com/vi/WO7cw3iV5VI/maxresdefault.jpg',
      nasheed: './nasheeds/taweel-al-shawq-slowed-reverb.mp3',
    },
    {
      name: 'Wedding Nasheed',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdsuU61iWazijUoZxx2rHh0kftqdZ5ehGXg&s',
      nasheed: './nasheeds/wedding-nasheed.mp3',
    },
  ];
  
  let currentAudio = null; // To track the currently playing audio instance
  
  const listingNasheeds = () => {
    let playlistContainer = document.getElementById('playlist-container');
    playlist.forEach((nasheed) => {
      // Create elements
      let col = document.createElement('div');
      let card = document.createElement('div');
      let img = document.createElement('img');
      let p = document.createElement('p');
      let url = document.createElement('p');
  
      // Set attributes and content
      img.setAttribute('src', nasheed.image);
      img.setAttribute('class', 'rounded-3 img-artist');
      p.innerText = nasheed.name;
      url.innerText = nasheed.nasheed;
      url.setAttribute('class', 'd-none');
      card.setAttribute('class', 'card-nasheed');
      col.setAttribute('class', 'col-lg-4 col-md-6');
  
      // Append elements
      playlistContainer.append(col);
      col.append(card);
      card.append(img);
      card.append(p);
      card.append(url);
  
      // Add click event listener for playing nasheed
      card.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Stop the currently playing audio
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
  
        // Play the selected nasheed
        let audioSource = nasheed.nasheed;
        let playBar = document.querySelector('.playbar');
        playBar.style.display = 'block';
  
        let Play = new Audio(audioSource);
        Play.addEventListener('loadedmetadata', () => {
          Play.play();
          let nasheedTime = document.getElementById('nasheed-time');
          nasheedTime.innerHTML = `Duration: ${Play.duration.toFixed(2)} seconds`;
          console.log(`Playing ${nasheed.name}, Duration: ${Play.duration}`);
        });
  
        // Update current audio reference
        currentAudio = Play;
  
        // Clear currentAudio when playback ends
      });
      Play.addEventListener('ended', () => {
        currentAudio = null;
        playBar.style.display = 'none'; // Hide the play bar when playback ends
      });
    });
  };
  
  // Call the function to render the playlist
  listingNasheeds();
  