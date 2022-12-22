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

            </div>
        );
    }
}


export default Projects;