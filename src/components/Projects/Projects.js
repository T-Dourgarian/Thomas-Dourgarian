import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import './Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class Projects extends Component {

    projects = [ 
        {
            title: 'LinkUp',
            images: ['./Images/meetupimage1.jpg',
                './Images/meetupimage2.jpg',
                './Images/meetupimage3.jpg',
                './Images/meetupimage4.jpg',
                './Images/meetupimage5.jpg',
                './Images/meetupimage6.jpg'],
            description: ' LinkUp is a mobile app that promotes spontaneous social activity. Users can search nearby events based on distance away or type of activity and see how many people are going the event before sending a message to the event creator. Live messaging allows you the opportunity to get the know the event creator before committing to attending the event. Users can create their own events for others in their area to see. They can manage multiple conversations for their own events or other events all at once.',
            technologies: ['React Native', 'Node', 'MongoDb', 'Socket.io', 'bcrypt', 'JWT', 'S3 Buckets', 'Google Maps API']
        }
    ];

    render() {
        return (
            <div 
                className="projectsContainer"
            >
                {
                    this.projects.map((project, i) => 
                        <div
                            className="project"
                            key={i}
                        >
                            <div className="projectTitle">
                                { project.title }
                            </div>

                            <div style={{display: 'flex', flexDiretion: 'row'}} >
                                <div>
                                    <Carousel 
                                        width={'300px'}
                                        showThumbs={false}
                                    >
                                        {
                                            project.images.map((path, i) => 
                                                <div key={i}>
                                                    <img src={require(`${path}`)} alt="" />
                                                </div>
                                            )
                                        }
                                    </Carousel>

                                </div>
                                <div
                                    className="projectDetailsContainer"
                                >
                                    <div className="descriptionLabel">
                                        Description
                                    </div>

                                    <div className="description">
                                        { project.description }
                                    </div>

                                    <div style={{'marginTop': '25px' }}>
                                        <div className="descriptionLabel">Technologies</div>
                                        <ul className="technologiesList">
                                            { project.technologies.map((tech, i) => 
                                                <li key={i}>
                                                    { tech }
                                                </li>
                                            ) }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                                
                                

                        </div>
                    )
                }

            </div>
        );
    }
}


export default Projects;