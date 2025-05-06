

import noPhoto from '../assets/noPhoto.png'


const projectsData = [
    {
        id:1,
        title:"Portfolio Website",
        description:"I'm hungry, I need a job",
        img: null,
        imgIFrame:"http://localhost:5173/",
        tech: ["HTML", "CSS", "React", "VS Code", "ReactLibraries"],
        git1: ["https://github.com/DaGearz/language_game", "FrontEnd Code"],
        git2:[null,null],
        website:"https://dagearz.github.io/language_game/",
        usePortfolio: true,
        useFeatured: false
    },
    {
        id:2,
        title:"Language Game",
        description:"Small apps that converts plain text into pigLatin in real time",
        img: null,
        imgIFrame:"https://dagearz.github.io/language_game/",
        tech: ["HTML", "CSS", "React", "VS Code","ReactLibraries"],
        git1: ["https://github.com/DaGearz/language_game", "FrontEnd Code"],
        git2:[null,null],
        website:"https://dagearz.github.io/language_game/",
        usePortfolio: true,
        useFeatured: true
    },
    {
        id:3,
        title:"KMZ to GMaps",
        description:"this project uses Googles APi to place GoogleMap window in webiste. API Key is disabled due to security concerns of not having back end",
        img: null,
        imgIFrame:"https://dagearz.github.io/kmz_toGoogleMaps/",
        tech: ["HTML", "CSS", "React", "VS Code", "GoogleAPI", "ReactLibraries"],
        git1: ["https://github.com/DaGearz/kmz_toGoogleMaps", "FrontEnd Code"],
        git2:[null,null],
        website:"https://dagearz.github.io/kmz_toGoogleMaps/",
        usePortfolio: true,
        useFeatured: true
    },
    {
        id:4,
        title:"MERN Stack Tutorial",
        description:"Worked through tutorial to learn node.js, express, and mongo DB. Built a note keeping app for fictitious company",
        img: noPhoto,
        imgIFrame:null,
        tech: ["HTML", "CSS", "Node.js", "React", "express", "NPM", "MongoDB"],
        git1: ["https://github.com/DaGearz/mern_tutorial_FE", "FrontEnd Code"],
        git2:["https://github.com/DaGearz/mern_tutorial","BackendEnd Code"],
        website:null,
        usePortfolio: true,
        useFeatured: false
    },


]

//use <summary> <detail> latter on
//<iframe src="https://dagearz.github.io/language_game/" width="600" height="400"></iframe>
//<img 


export default projectsData