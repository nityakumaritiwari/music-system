const music=new Audio('1.mp3');
music.play();
const songs=
[
    {
        id:1,
        songName:`On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster:"1.jpg"
    },
    {
        id:2,
        songName:`Faded<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"2.jpg"
    }
    ,{
        id:3,
        songName:`Uska Hi banana<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"3.jpg"
    }
    ,{
        id:4,
        songName:`Love me like u do<br>
        <div class="subtitle">Ellie Goulding</div>`,
        poster:"4.jpg"
    }
    ,{
        id:5,
        songName:`Meri jindagi hai tu<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"5.jpg"
    }
    ,{
        id:6,
        songName:`Tum Hi HO<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"3.jpg"
    }
    ,{
        id:7,
        songName:`Let me down slowly<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"1.jpg"
    }
    ,{
        id:8,
        songName:`Suna hai<br>
        <div class="subtitle"></div>`,
        poster:"5.jpg"
    }
    ,{
        id:9,
        songName:`Dilbar<br>
        <div class="subtitle"></div>`,
        poster:"10.jpg"
    }
    ,{
        id:10,
        songName:`Agar tum saath ho<br>
        <div class="subtitle"></div>`,
        poster:"3.jpg"
    },
    {
        id:11,
        songName:`Baarishein<br>
        <div class="subtitle"></div>`,
        poster:"Atif Aslam.jpg"
    },


   
]                                
Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});
let masterplay=document.getElementById('masterplay');
masterplay.addEventListener('click',()=>{
       if(music.paused||music.currentTime<=0){
        music.play();
       masterplay.classList.add('bi-pause-fill');
        masterplay.classList.remove('bi-play-fill');
       }
       else
       {
           music.pause();
         masterplay.classList.add('bi-play-fill');
        masterpaly.classList.remove('bi-pause-fill');
       }
    }
);

index=1;
Array.from(document.getElementsByClassName('songitem')).forEach((e)=>{
       e.addEventListener('click',(e1)=>{
           index=e1.target.id;
           music.src=`${index}.mp3`;
           music.play();
       })

    })