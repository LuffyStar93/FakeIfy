

// var songsToAdd = [
//     {
//       "name": "Dior",
//       "artist": "Pop Smoke",
//       "url": "./assets/music/pop_smoke_dior.mp3",
//       "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
//     },
//   ];


// METHODE PERSO AUTO MUSIC
var play = document.querySelector('#play');
var song1 = document.querySelector('#song1')
var like_icon = document.querySelector('#like_album')


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
});

play.addEventListener("click", () => {
    
    // Update the Button
    var pause = play.innerHTML === 'PAUSE';
    play.innerHTML = pause ? 'LIRE' : 'PAUSE';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    if (song1.className === 'played_song'){
        song1.classList.remove("played_song");
    }
    else{
        song1.classList.add("played_song");
    };

    // Prevent Default Action
    return false;
});