import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.youtube.com/channel/UCEt9RzPsCghA-CvfvZo42Hg'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://github.com/Markomanis'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    </div>
                </div>
            

            <div className='profile-details-name'>
                <span className='primary-text'>
                   Hello, I am <span className='highlighted-text'>Marko</span>
                </span>
            </div> 
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        <h1>
                           <Typical
                           loop={Infinity}
                           steps={[
                                "Enthusiastic Dev🎓",
                                2000,
                                "Python Charmer🐍",
                                2000,
                                "Code Whisperer🎶",
                                2000,
                                "Bug Hunter🐛",
                                2000,
                                "Firewall Night's Watch👀",
                                2000,
                           ]}
                           /> 
                        </h1>
                        <span className='profile-role-tagline'>
                           Knack of building softwares with front and back end operations.
                        </span>
                    </span>
                </div>  
                <div className='profile-options'>
                     <button className='btn primary-btn'>
                           Hire Me
                     </button> 
                     
                     {/* Here is the button for downloading the CV: */}
                     <a href='Marko_Marciano_CV (1).pdf' download={'Marko Marciano.pdf'}>
                           <button className='btn highlighted-btn'>Get CV</button>
                    </a>      
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
