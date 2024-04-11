
//found a similar function online + used ChatGPT to debug!

//couldn't really figure out how to do with with JSON images, 
//so instead just made an array using HTML...used JSON for the index aspect  
function flipThroughImages() {
    let currentIndex = 1;
    let imageContainer = document.querySelector('.image-container');
    let croppedImages = imageContainer.getElementsByTagName('img');

    function showNextImage() {
        croppedImages[currentIndex - 1].style.display = 'none'; 
        currentIndex++;
        if (currentIndex > croppedImages.length) {
            currentIndex = 1; 
        }
        croppedImages[currentIndex - 1].style.display = 'block';
    }
    for (var i = 0; i < croppedImages.length; i++) {
        croppedImages[i].style.display = 'none';
    }

    setInterval(showNextImage, 150); 
}

flipThroughImages();


let allSongs = [];
let favoriteSongs =[];

document.addEventListener("DOMContentLoaded", function(){
    fetch("./data.json"
    )
    .then ((response)=> response.json())
    .then((items) =>{
        items.forEach((item) => { 
            if(!allSongs.includes(item.title) && item.title){
                allSongs.push(item.title);
            }
            if (!favoriteSongs.includes(item.like) && item.like.toLowerCase() === 'really like') {
                favoriteSongs.push(item.title);
                console.log(favoriteSongs);
            }

            let songDescriptionWrapper = document.createElement('div');
            songDescriptionWrapper.classList.add("song-description-wrapper");
            songDescriptionWrapper.classList.add("hidden");



            let cover = document.createElement('img');
            cover.setAttribute('src', item.image);
            cover.classList.add('cover');


            let song = document.createElement('div');
            song.innerText = item.title;
            song.setAttribute('data-like', item.like);
            song.classList.add('song');


            let artist = document.createElement('div');
            artist.innerText = item.artist;
            artist.classList.add('artist');

            let record = document.createElement('div');
            record.innerText = item.record;
            record.classList.add('record');

            songDescriptionWrapper.appendChild(cover);
            songDescriptionWrapper.appendChild(song);
            songDescriptionWrapper.appendChild(artist);
            songDescriptionWrapper.appendChild(record);


            let indexContainer = document.querySelector('.index-container');
            indexContainer.appendChild(songDescriptionWrapper);


        });
        
    });
});


let titleButton = document.querySelector(".title-index");
let index = document.querySelector('.song-description-wrapper');

titleButton.addEventListener("click", (e) => {
    let gif = document.querySelector('.image-container'); 

    let songDescriptionWrappers = document.querySelectorAll('.song-description-wrapper');

    if (gif.classList.contains('hidden')){
        gif.classList.remove('hidden')
        songDescriptionWrappers.forEach(wrapper=>{
            wrapper.classList.add('hidden')
        })
    } else{
        gif.classList.add('hidden')
        songDescriptionWrappers.forEach(wrapper=>{
            wrapper.classList.remove('hidden');
        })
    }

});

