import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import './Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from './Images/wallet-wizard.png'
import { Carousel } from 'react-responsive-carousel';



class Projects extends Component {

    projects = [ 
        {
            title: 'Linkup',
            images: [image,image,image,image]
        },
        {
            title: 'Property Management Software',
            images: [image,image,image]
        }
    ];

    render() {
        return (
<<<<<<< HEAD
            <div 
                class="projectsContainer"
            >
                {
                    this.projects.map(project => 
                        <div
                            class="project"
                        >
                            <div class="projectTitle">
                                { project.title }
                            </div>

                            <Carousel 
                                width="700px"
                            >
                                {
                                    project.images.map(path => 
                                        <div>
                                            <img src={image}/>
                                        </div>
                                    )
                                }
                            </Carousel>
                                

                        </div>
                    )
                }
=======
            <div id='projects' className='Projects'>
                <h1 className="projectsTitle" >PROJECTS</h1>
                <div style={{ display: 'flex' }}>

					<ProjectCard
						technologies={['JAVASCRIPT', 'VUE', 'NODE', 'MONGODB', 'BINANCE API']}
						description={"A BITCOIN TRADING BOT WITH A CUSTOM ANALYSIS INTERFACE THAT UTILIZES BINANCE'S PUBLIC TRADING API. IT UTILIZES COMMON TRADING INDICATOR VALUES, CALCULATED USING BITCOIN PRICE HISTORY, TO DETERMINE OPTIMAL BUY AND SELL PRICES \n username: thomas \n password: thomas123"}
						link={`https://td-binance.herokuapp.com/#/login`}
						title='BITCOIN BOT'
					/>

                    <ProjectCard
                        technologies={['JAVASCRIPT', 'REACT', 'NODE', 'POSTGRESQL', 'AUTO ML']}
                        description={`SIID (SOCIAL IMPACT IDENTIFICATION) IS A FULL-STACK WEB APPLICATION THAT LEVERAGES A RULES-BASED FLAGGING SYSTEM AND MACHINE LEARNING TO DETECT AND PREVENT NEGATIVE SOCIAL IMPACT IN MARKETING CAMPAIGNS WHILE ALSO CONNECTING MARKETERS TO EXPERTS IN IDENTIFIED AREAS OF SENSITIVITY.`}
                        link={`http://siid-tool.herokuapp.com/#/home`}
                        title='SIID'
                    />

                    <ProjectCard
                        technologies={['JAVASCRIPT', 'REACT', 'NODE', 'POSTGRESQL', 'TWILIO', 'GOOGLE MAPS API']}
                        description={`WALLET WIZARD IS A FULL-STACK WEB APPLICATION THAT ALLOWS USERS TO MANAGE COUPONS AND SET REMINDERS FOR THEM ALL VIA SMS TEXT MESSAGING. WALLET WIZARD ALSO UTILIZES GOOGLE MAPS API TO SHOW USERS NEARBY LOCATIONS THAT THEY HAVE COUPONS FOR AND THEIR CURRENT DISTANCE FROM THOSE PLACES.`}
                        link={`https://wallet-wizard.herokuapp.com/#/home`}
                        title='WALLET WIZARD'
                    />

                    {/* <ProjectCard /> */}
                    {/* <ProjectCard /> */}
                </div>
>>>>>>> 1977f9d7257c95608fb6a854fe5e2f72b5ca424a

            </div>
        );
    }
}


export default Projects;