import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';


class Projects extends Component {

    render() {
        return (
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

            </div>
        );
    }
}


export default Projects;