import React from 'react';
import './About.css';



function About() {



    return (

        <div name='about' id='about' className="About">
            <h1 className='aboutTitle'>ABOUT ME</h1>

            <div style={{display:'flex'}}>

                <div>
                     <img src={require('./Images/Thomas.jpg')}  alt="Headshot" className='headshot'/>
                </div>


            <div>
                <p className="aboutBio" >I am not your typical coding school student. I am a third-generation coder that has been surrounded by tech and computers all my life. I grew up in a very entrepreneurial family and have had a passion for creating software since I was young. I have dedicated the past 2 years to hone my craft and gather the experience needed to thrive in any tech-based work environment. I am young, talented, and would be a great investment for any collaborative work environment.
                </p>
                <div className="contactInfoDiv" >
                    Contact Info
                    <ul style={{padding:"0"}}>
                        <li ><i className="far fa-envelope contactIcon fa-lg" ></i>- ThomasDourgarian@gmail.com</li>
                        <li ><i className="fas fa-phone-alt contactIcon fa-lg" ></i>- (651) 262-9188</li>
                        <li><i className="fab fa-github contactIcon fa-lg"></i>- <a className="link" href="https://github.com/T-Dourgarian" >Git Hub</a></li>
                        <li><i class="fab fa-linkedin contactIcon fa-lg"></i>- <a className="link"href="https://www.linkedin.com/in/thomas-dourgarian-929300196/">LinkedIn</a></li>
    
                    </ul>
                </div>
            </div>



            </div>
    



        </div>


    );
}

export default About;
