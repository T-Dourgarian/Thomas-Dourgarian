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
                <p className="aboutBio" >
I am a software developer currently living in Minneapolis, MN. Over the past few years I have really developed a passion for programming and bringing cool and unique ideas to life. I have developed several interesting projects over the past year. Some I have built by myself and others with with a small team by my side. More recently I have been developing internal management software as well as a full-stack e-commerce application for freight bidding at Knight-Swift Transportation. My education and work experience have led me into all different shapes and sizes of work environments all of which I thrived in. I am a natural problem solver and always looking for new challenges and adventures to take on.
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
