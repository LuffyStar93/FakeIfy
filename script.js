

var songsToAdd = [
    {
      "name": "Intro",
      "artist": "Lil Wayne",
      "url": "./assets/music/pop_smoke_dior.mp3",
      "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
    },
    {
      "name": "Blunt Blowin",
      "artist": "Lil Wayne",
      "url": "./assets/music/pop_smoke_dior.mp3",
      "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
    },
    {
      "name": "MegaMan",
      "artist": "Lil Wayne,",
      "url": "./assets/music/pop_smoke_dior.mp3",
      "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
    },
    {
      "name": "6 Foot 7 Foot",
      "artist": "Lil Wayne, Cory Gunz",
      "url": "./assets/music/pop_smoke_dior.mp3",
      "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
    },
    {
      "name": "Nightmares Of The Bottom",
      "artist": "Lil Wayne",
      "url": "./assets/music/pop_smoke_dior.mp3",
      "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
    },
    {
      "name": "She Whill",
      "artist": "Lil Wayne, Drake",
      "url": "./assets/music/pop_smoke_dior.mp3",
      "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
    },
  ];

var playlist = document.querySelector('playlist');


var play = document.querySelector('#play');
var song1 = document.querySelector('#song1')
var like_icon = document.querySelector('#like_album')


// Fonction like/dislike
like_icon.addEventListener("click", () => {
    // Update the Button
    if( like_icon.classList.contains('far')){
        like_icon.classList.remove('far');
        like_icon.classList.add('fas');
    } 
     else if (like_icon.classList.contains('fas')) {
        like_icon.classList.remove('fas');
        like_icon.classList.add('far');
    }
    playlist.style.background = 'green';
});

// Fonction play/pause
play.addEventListener("click", () => {
    
    // Update the Button
    var pause = play.innerHTML === 'PAUSE';
    play.innerHTML = pause ? 'LIRE' : 'PAUSE';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();
    
    // add class musique en cours de lecture
    if (song1.className === 'played_song'){
        song1.classList.remove("played_song");
    }
    else{
        song1.classList.add("played_song");
    };

    // Prevent Default Action
    return false;
});


// Fonctions add to tableau

    