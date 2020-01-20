import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './ProjectCard.css';


class ProjectCard extends Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" >
                <div onMouseEnter={this.handleClick} className="card">

                    <div className="cardHeader">
                        {this.props.title}
                    </div>

                    <div className="frontCardBody">
                        <ul className="technologiesUl">
                            {this.props.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                        </ul>
                    </div>
                </div>

                <div onMouseLeave={this.handleClick} className="card back">
                    <p className="cardBackDescription">
                        {this.props.description}
                    </p>


                    <button className='liveSiteBtn'><a className="siteLink" href={this.props.link}>LIVE SITE</a></button>

                </div>
            </ReactCardFlip>

        )
    }

}


export default ProjectCard;