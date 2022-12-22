import React, { Component } from 'react';
import './Header.css';
import { scroller } from 'react-scroll'
import Projects from '../Projects/Projects';

// import Typist from 'react-typist';



class Header extends Component {

    scrollTo = (id) => {
        scroller.scrollTo(id, {
            duration: 600,
            delay: 0,
            smooth: true
        })



    }

    render() {
        return (
            <div className="Header">


                <div className='nameTitle'>

                    <div>
                     <img src={require('./Images/Thomas.jpg')}  alt="Headshot" className='headshot'/>
                    </div>


                    <h1 className="name" >Thomas Dourgarian</h1>

                    

                        <div className="contactInfoDiv" >
                            Contact Info
                            <ul style={{padding: 0}}>
                                <li class="ContactLi">ThomasDourgarian@gmail.com</li>
                                <li class="ContactLi">(651) 262-9188</li>
                                <li class="ContactLi"><i className="fab fa-github contactIcon fa-lg"></i><a className="link" href="https://github.com/T-Dourgarian" >Git Hub</a></li>
                                <li class="ContactLi"><i class="fab fa-linkedin contactIcon fa-lg"></i><a className="link"href="https://www.linkedin.com/in/thomas-dourgarian-929300196/">LinkedIn</a></li>
            
                            </ul>
                        </div>
                    

                    
                </div>

                <Projects />


            </div>
        )
    }
}

export default Header;
