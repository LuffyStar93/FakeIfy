

var songsToAdd = [
    {
      "name": "Intro",
      "artist": '<a href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865">Lil Wayne</a>',
      "duration": "2:52",
      "url": "./assets/music/intro.mp3",
    },
    {
      "name": "Blunt Blowin",
      "artist": '<a href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865">Lil Wayne</a>',
      "duration": "5:13",
      "url": "./assets/music/blunt-blowin.mp3",
    },
    {
      "name": "MegaMan",
      "artist": '<a href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865">Lil Wayne</a>',
      "duration": "3:18",
      "url": "./assets/music/megaman.mp3",
    },
    {
      "name": "6 Foot 7 Foot",
      "artist": '<a href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865">Lil Wayne</a>, <a href="https://open.spotify.com/artist/7BAaznGSsqcksud4R5ou5z?si=Z18kdQcnR1ah86xFEc86GA">Cory Gunz</a',
      "duration": "4:09",
      "url": "./assets/music/6foot7foot.mp3",
    },
    {
      "name": "Nightmares Of The Bottom",
      "artist": '<a href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865">Lil Wayne</a>',
      "duration": "4:41",
      "url": "./assets/music/nightmares-of-the-bottom.mp3",
    },
    {
      "name": "She Will",
      "artist": '<a href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865">Lil Wayne</a>, <a href="https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4?si=Fkw-i204QOS4AWlvU3O_1g">Drake</a>',
      "duration": "5:06",
      "url": "./assets/music/she-will.mp3",
    },
  ];

var playlist = document.querySelector('.playlist');
var playlist_body = document.querySelector('.playlist_body');
var audio_player = document.querySelector('.audio_player');


// Remplissage du tableau dynamiquement
function fillTable() {
    for (let i in songsToAdd)  {
        // console.log('index = ', songsToAdd[i]);
        const newtr = document.createElement('tr');

        let audio = document.createElement('audio');
        audio.src = songsToAdd[i].url;
        audio.setAttribute("id", "player" + i);
        newtr.appendChild(audio);
        var colonne1 = newtr.insertCell(0);//on a une ajouté une cellule
            colonne1.innerHTML += i ;//on y met le nr de la musique
        var colonne2 = newtr.insertCell(1);//on a une ajouté une cellule
	        colonne2.innerHTML += '<i class="far fa-heart">';// icone like
        var colonne3 = newtr.insertCell(2);//on a une ajouté une cellule
            colonne3.innerHTML += songsToAdd[i].name;//on y met le titre
        var colonne3 = newtr.insertCell(3);//on a une ajouté une cellule
            colonne3.innerHTML += songsToAdd[i].artist;//on y met l'artiste
        var colonne4 = newtr.insertCell(4);//on a une ajouté une cellule
            colonne4.innerHTML += songsToAdd[i].duration;//on y met la durée du son
        var colonne5 = newtr.insertCell(5);//on a une ajouté une cellule
            colonne5.innerHTML += "|||||";//on y met les % de like
        
            // colonne6.style.display = hidden;

        newtr.setAttribute("id", "song" + i)
        playlist_body.appendChild(newtr);

    }

 }

 fillTable();


var play = document.querySelector('#play');
var song1 = document.querySelector('#song0')
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
    return false ;
});




