const playlist=[
    {
        name:'Ana Abl',
        image:'https://lastfm.freetls.fastly.net/i/u/770x0/7b8097e443c6c5deff88b5f78512f598.jpg#7b8097e443c6c5deff88b5f78512f598', 
    attribute:'controls',
        nasheed:'./nasheeds/AnaAlAbduNasheed-Youtube2.mp3'
    },
    {
        name:'Kashawqi Al Layali',
        image:'https://i.ytimg.com/vi/2UUspwSTswI/sddefault.jpg', 
    attribute:'controls',
        nasheed:'./nasheeds/kashawqi_al_layali_ldaw2i_al_qamar.mp3'
    },
    {
        name:'Shukran Laka Rabbi',
        image:'https://i.scdn.co/image/ab67616d0000b273fb85d120317ed7cf02925eae', 
    attribute:'controls',
        nasheed:'./nasheeds/laka-rabbi-nasheed.mp3'
    },
    {
        name:'My Arabic Language',
        image:'https://i.ytimg.com/vi/Ov0-CBnOW4w/maxresdefault.jpg', 
    attribute:'controls',
        nasheed:'./nasheeds/my-arabic-language.mp3'
    },
    {
        name:'Taweel Al Shawq',
        image:'https://i.ytimg.com/vi/WO7cw3iV5VI/maxresdefault.jpg', 
    attribute:'controls',
        nasheed:'./nasheeds/taweel-al-shawq-slowed-reverb.mp3'
    },
    {
        name:'Wedding Nasheed',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdsuU61iWazijUoZxx2rHh0kftqdZ5ehGXg&s', 
    attribute:'controls',
        nasheed:'./nasheeds/wedding-nasheed.mp3'
    }
    ]
  
    const listingNaseeds=()=>{
        let currentNasheed= new Audio()
        let playlistContainer=document.getElementById('playlist-container')
        let togglePlayPause=document.getElementById('play')
        let next=document.getElementById('next')
        let previous=document.getElementById('previous')
        playlist.forEach((nasheed)=>{
            let col=document.createElement('div') 
            let card=document.createElement('div') 
            let img=document.createElement('img') 
            let p=document.createElement('p')
            let url=document.createElement('p')
            img.setAttribute('src',nasheed.image)
            img.setAttribute('class','rounded-3')
            img.setAttribute('class','img-artist')
            p.innerText=nasheed.name
            url.innerText=nasheed.nasheed
            url.setAttribute('class','d-none')
            card.setAttribute('class','card-nasheed')
            col.setAttribute('class','col-lg-4 col-md-6')
            playlistContainer.append(col)
            col.append(card)
            card.append(img)
            card.append(p)
            card.append(url)

            
            
      
            let clickPlay=document.querySelectorAll('.card-nasheed');
            let nasheedSecond=document.getElementById('nasheed-second')
            let nasheedTotaltime=document.getElementById('nasheed-totaltime')
            let playBar=document.querySelector('.playbar')
            let track=document.getElementById('track')
           clickPlay.forEach((click)=>{
            click.addEventListener('click',(e)=>{
                
                playBar.style.display='block'
                e.preventDefault()
                togglePlayPause.src='http://127.0.0.1:5500/media/pause.svg'
                currentNasheed.src=e.currentTarget.children[2].textContent
                currentNasheed.addEventListener('loadedmetadata',()=>{
                    currentNasheed.play() 
                    track.setAttribute('max',currentNasheed.duration.toFixed(0))
                    setInterval(() => {
                        nasheedSecond.innerHTML=currentNasheed.currentTime.toFixed(0)
                        track.value=currentNasheed.currentTime.toFixed(0)
                    }, 1000);
                    nasheedTotaltime.innerHTML=currentNasheed.duration.toFixed(0)
                    togglePlayPause.addEventListener('click',(e)=>{
                        if(currentNasheed.paused ){
                            currentNasheed.play()
                            
                            e.currentTarget.src='http://127.0.0.1:5500/media/pause.svg'
                        }
                        else if(currentNasheed.played){
                            currentNasheed.pause()
                            e.currentTarget.src='http://127.0.0.1:5500/media/play.svg'
                        }
                     })
                })

                
                 
                

                    
                
               
            })
           })
           
        })
    }
    listingNaseeds()

    let btnToggle=document.querySelector('.toggle-menu-btn')
    let leftSection=document.querySelector('.section-left')
    let slideIn=document.querySelector('.slide-in')
    btnToggle.addEventListener('click',()=>{
        console.log('clicked');
        leftSection.style.transform='translateX(0%)'
        leftSection.style.transition='0.1s all linear'
    })
    
    slideIn.addEventListener('click',()=>{
        leftSection.style.transform='translateX(-150%)'
        leftSection.style.transition='0.1s all linear'
    })

    
    
    
        