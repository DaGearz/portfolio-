
import pic2 from '../assets/explorepic.jpg'

const projectsData = [
    {
        id:1,
        title:"Language Game",
        description:"Small apps that converts plain text into pigLatin in real time",
        img: null,
        imgIFrame:"https://dagearz.github.io/language_game/",
        tech: [null],
        git1: null,
        git2:null,
        website:null,
        usePortfolio: true,
        useFeatured: true
    },
    {
        id:2,
        title:"Language Game",
        discription:"Small apps that converts plain text into pigLatin in real time",
        img: pic2,
        imgIFrame: {
            src:"https://dagearz.github.io/language_game/",
              width:"600",
              height:"400",
              loading:"lazy",
              style:{
                pointerEvents: "none",       
                overflow: "hidden"          
              },
              scrolling:"no" ,
        },
        tech: [null],
        git1: null,
        git2:null,
        website:null,
        usePortfolio: true,
        useFeatured: true
    },


]

//use <summary> <detail> latter on
//<iframe src="https://dagearz.github.io/language_game/" width="600" height="400"></iframe>
//<img 


export default projectsData