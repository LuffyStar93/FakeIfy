

// var songsToAdd = [
//     {
//       "name": "Dior",
//       "artist": "Pop Smoke",
//       "url": "./assets/music/pop_smoke_dior.mp3",
//       "cover_art_url": "./assets/pop_smoke_dior_cover.jpg"
//     },
//   ];


// METHODE PERSO AUTO MUSIC
// var yourAudio = document.getElementById('yourAudio');
var play = document.getElementById('play');
var like = document.getElementById('like_icon');
var song1 = document.getElementById('song1')
var icon_heart = '<i class="fas fa-heart"></i>';

like.onclick = function () {
    // Update the Button
    var unlike = like.innerHTML === '<i class="fas fa-heart" aria-hidden="true"></i>';
    like.innerHTML = unlike ? '<i class="far fa-heart" aria-hidden="true"></i>' : '<i class="fas fa-heart" aria-hidden="true"></i>';
};
// like.onclick = function () {
//     // Update the Button
//     var like_full = like.innerHTML === '<i class="far fa-heart"></i>';
//     like.innerHTML = like_full ? 'osef' : '<i class="far fa-heart"></i>';
// };


play.onclick = function () {
    
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
};