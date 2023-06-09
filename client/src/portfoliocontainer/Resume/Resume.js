import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        );
      };

  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg"},
    {label: "Programming Skills", logoSrc: "programming-skills.svg"},
    {label: "Projects", logoSrc: "projects.svg"},
    {label: "Interests", logoSrc: "interests.svg"},
  ];

  const programmingSkillDetails = [
    {skill: "Python", ratingPercentage: 70 },
    {skill: "Django", ratingPercentage: 65 },
    {skill: "Kali Linux", ratingPercentage: 65 },
    {skill: "Nmap", ratingPercentage: 70 },
    {skill: "Pandas", ratingPercentage: 50 },
    {skill: "Tkinter", ratingPercentage: 60 },
    {skill: "Psutil", ratingPercentage: 50 },
    {skill: "Speedtest", ratingPercentage: 100 },
    {skill: "OpenCV", ratingPercentage: 50 },
    {skill: "Mediapipe", ratingPercentage: 70 },
    {skill: "PyCaw", ratingPercentage: 100 },
    {skill: "JS", ratingPercentage: 50 },
    {skill: "React", ratingPercentage: 50 },
    {skill: "HTML5", ratingPercentage: 85 },
    {skill: "CSS3", ratingPercentage: 85 },
    {skill: "Sass", ratingPercentage: 70 },
    {skill: "Tailwind", ratingPercentage: 70 },
    {skill: "Git & GitHub", ratingPercentage: 85 },
  ]

  const projectsDetails = [
    {
        title: "Personal Portfolio Website",
        duration: { fromDate: "2022", toDate: "2023" },
        description: "A Personal Portfolio website to showcase my important details and projects at one place",
        subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
        title: <a  href="https://www.youtube.com/shorts/06ajGF1dLk4">"Data Analysis & Visualisation App"</a>,
        duration: { fromDate: "2022", toDate: "2023" },
        description: "App that is designed for data analytics and visualization. It reads data from a CSV file, processes it using Pandas, and generates interactive charts using ChartJS.",
        subHeading: "Technologies Used: Python, Django, Pandas, ChartJS",
    },
    {
        title: <a  href="https://www.youtube.com/watch?v=Qjcza9EMXxE">"Computer Performance Monitor"</a>,
        duration: { fromDate: "2022", toDate: "2023" },
        description: "This desktop app tracks real-time CPU and RAM usage, and provides performance statistics. It also measures internet speeds and features a user-friendly interface built with Tkinter.",
        subHeading: "Technologies Used: Python, Tkinter, Psutil, Speedtest",
    },
    {
        title: <a  href="https://www.youtube.com/watch?v=RGnQTtPRMxc">"Gesture Volume Control Software"</a>,
        duration: { fromDate: "2022", toDate: "2023" },
        description: "This project is about developing a gesture-based volume control software that enables users to adjust their computer's volume using hand gestures captured by a webcam.",
        subHeading: "Technologies Used: Python, OpenCV, Mediapipe, Pycaw",
    },
  ]

  const resumeDetails = [
    <div className="resume-screen-container" key='education'>
        <ResumeHeading
            heading={"Zero To Mastery Academy"}
            subHeading={"Full Stack Python Software Development Certificate"}
            fromDate={"2020"}
            toDate={"2023"}
        />
        <ResumeHeading
            heading={"Pavol Jozef Šafárik University in Košice"}
            subHeading={"Studying Philosophy"}
            fromDate={"2022"}
            toDate={"present"}
        />
        <ResumeHeading
            heading={"Certifications"}
            subHeading={"I have official certification for every technology and programming skill that I used in my projects"}
            fromDate={"2020"}
            toDate={"2023"}
        />
    </div>, 

    

    <div className="resume-screen-container programming-skills-container" key='programming-skills'>
        {programmingSkillDetails.map((skill, index)=>(
            <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                    <div style={{width: skill.ratingPercentage + "%"}} className="active-percentage">

                    </div>   
                </div>
            </div>
        ))}
    </div>, 

    <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index)=>(
            <ResumeHeading
                key={index}
                heading={projectsDetails.title}
                subHeading={projectsDetails.subHeading}
                description={projectsDetails.description}
                fromDate={projectsDetails.duration.fromDate}
                toDate={projectsDetails.duration.toDate}
            />
        ))}
    </div>,

    <div className="resume-screen-container" key="interests">
        <ResumeHeading
           heading='Studying' 
           description="I find the aspect of studying very important, and therefore, I invest the majority of my time in studying, primarily focusing on technologies, languages, and philosophy."
        />
        <ResumeHeading
           heading='Capoeira' 
           description="Since I tend to spend in front of the computer sometimes even 10-12 hours a day, I must have a physical hobby that incrases my stamina, keeps me healthy and is engaging at the same time. Capoeira provides a holistic advantage for the human body by combining martial arts, dance, and acrobatics, promoting physical fitness, flexibility, coordination, strength, and overall body conditioning."
        />
        <ResumeHeading
           heading='Chess' 
           description="In my free time I love playing chess. It is not just really fun game, but also it is enhancing critical thinking skills, improving concentration, boosting memory and cognitive abilities, and providing an enjoyable mental challenge. 
           My ELO rating is: 1550"
        />
    </div>
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
        style: {transform: "translateY("+ index * offsetHeight * -1 + "px"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = ()=>{
        return resumeBullets.map((bullet, index)=>(
            <div onClick={() =>handleCarousal(index)}
                 className={index=== selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                 key={index}
            >

            <img className="bullet-logo"
                src={require (`../../assets/Resume/${bullet.logoSrc}`)}
                alt='oops... no internet connection'
            />
            <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
  }

  const getResumeScreen =()=>{
        return(
            <div 
                style={carousalOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
  }

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className='resume-card'>
            <div className="resume-bullets">
                <div className="bullet-container">
                    <div className="bullet-icons"></div>
                    <div className="bullets">{getBullets()}</div>
                </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
