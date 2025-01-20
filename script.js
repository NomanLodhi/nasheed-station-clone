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
        let playlistContainer=document.getElementById('playlist-container')
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
            let nasheedTime=document.getElementById('nasheed-time')
            let playBar=document.querySelector('.playbar')
           clickPlay.forEach((click)=>{
            click.addEventListener('click',(e)=>{
                playBar.style.display='block'
                e.preventDefault()
                
                let Play= new Audio(e.currentTarget.children[2].textContent)
                Play.addEventListener('loadedmetadata',()=>{
                    Play.play() 
                    nasheedTime.innerHTML=Play.duration.toFixed(0)
                    console.log(Play.duration)
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

    
    
    
        