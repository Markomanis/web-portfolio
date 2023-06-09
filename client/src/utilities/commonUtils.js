import Home from '../portfoliocontainer/Home/home'
import AboutMe from '../portfoliocontainer/AboutMe/AboutMe';
import Resume from '../portfoliocontainer/Resume/Resume';
<<<<<<< HEAD
import Testimonial from '../portfoliocontainer/Testimonial/Testimonial';
=======
>>>>>>> c920e35222de94462fe6f771dc53a4aa2b4bfdfe

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
<<<<<<< HEAD
    {
        screen_name: "Testimonial",
        component: Testimonial,
    },
=======
>>>>>>> c920e35222de94462fe6f771dc53a4aa2b4bfdfe
];

export const GET_SCREEN_INDEX = (screen_name)=>{
    if(!screen_name) return -1
    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    
    }
    return -1;
    };