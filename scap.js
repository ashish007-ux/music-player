console.log("welcome to spotify")

let songindex = 0;
let audioelement = new Audio('songs/1.mp3')
let masterplay = document.getElementById('masterplay');
let myprogbar = document.getElementById('myprogbar');
let gif = document.getElementById('gif');
let songitem=Array.from( document.getElementsByClassName('songitem'));
let song = [

    { songname: "bareshein -by anuv jain", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: " gul -by anuv jain", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: " rihea -by anuv jain", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "ocean -by anuv jain", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "alag asman-by anuv jain ", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "bareshein-by anuv jain ", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "bareshein-by anuv jain ", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "bareshein-by anuv jain ", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" }
]

 songitem.forEach((element ,i)=> {
    
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = song[i].songname;
 });

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime == 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    } else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogbar.value=progress;
})
myprogbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogbar.value*audioelement.duration/100;
})

 
Array.from( document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        index=parseInt(e.target.id);
        
        audioelement.src='songs/${index+1}.mp3';
        audioelement.currentTime=0;
        audioelement.play();

    })
 }

 )
//audioelement.play();