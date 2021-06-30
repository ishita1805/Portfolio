import atishi from '../assets/p1.webp'
import quicli from '../assets/p2.webp'
import resume from '../assets/p3.webp'
import typeface from '../assets/p4.webp'
import chatio from '../assets/p5.webp'
import mediumrare from '../assets/p6.webp'
import recom from '../assets/p7.webp'
// import safespace from '../assets/p8.webp'


const project = [
   
    {
        title:'QuiCLI',
        githubUrl:'https://github.com/ishita1805/QuiCLI',
        webUrl:false,
        img: quicli,
        tagline:'A CLI tool that provides one-click deployments. Comes with many feaures including auto DNS management, dockerization, CI/CD & rollback to last stable release.',
    },
    {
        title:'Chat.io',
        githubUrl:'https://github.com/users/ishita1805/projects/2',
        webUrl:'https://chat.atishi.me/',
        img: chatio,
        tagline:'One-to-One messaging app built on react and Node.js, features include, end-to-end encryption, realtime notifications, last seen and request alerts.',
    },
    {
        title:'AtishiBoT',
        githubUrl:'https://github.com/ishita1805/AtishiBoT',
        webUrl:'https://bot.atishi.me/',
        img: atishi,
        tagline:'A moderator bot and more for discord. Comes with a chat bot, google search, music player among many features. Built in Javascript.',
    },
    {
        title:'ResuME',
        githubUrl:'https://github.com/ishita1805/ResuME',
        webUrl:false,
        img: resume,
        tagline:'Generate and deploy your website in one click, using your linkedin profile, also links your website to the domain',
    },
    {
        title:'Typeface Editor',
        githubUrl:'https://github.com/ishita1805/typeface',
        webUrl:'https://typeface.atishi.me/',
        img: typeface,
        tagline:'A rich text editor package for react, built in javascript. Fast, lightweight, modular and easy to use. Allows you to format text Add code, links, images videos and more.',
    },
    
    {
        title:'MediumRare',
        githubUrl:'https://github.com/ishita1805/MediumRare',
        webUrl:false,
        img: mediumrare,
        tagline:'A blogging app built using react and golang, provides recommendation of topics to read, allows easy sorting and filtering of blogs by date,likes, etc. Google oAuth used.',
    },
    {
        title:'Recommendation Systems',
        githubUrl:'https://github.com/ishita1805/Recommendation-System',
        webUrl:false,
        img: recom,
        tagline:'A github repository which explores various types of recommendation systems.',
    },
    // {
    //     title:'Safe Space',
    //     githubUrl:'',
    //     webUrl:'https://atishi.me/',
    //     img: safespace,
    //     tagline:'A cross-platform, mental health centric social media application built on flutter and Node.js',
    // },
]

export default project;