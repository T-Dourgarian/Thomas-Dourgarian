import React, { Component } from 'react';
import './Header.css';
import { scroller } from 'react-scroll'

import Typist from 'react-typist';



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

                    <h1 className="name" >Thomas Dourgarian</h1>
                    <Typist cursor={{
                        show: false,
                        blink: false,
                        element: '|',
                        hideWhenDone: false,
                        hideWhenDoneDelay: 1000,
                    }}>
                        <h3 className="title">software developer
                        <Typist.Delay ms={500} />

                            <Typist.Backspace count={9} delay={200} />
                            engineer

                            <Typist.Delay ms={500} />

                            <Typist.Backspace count={8} delay={200} />
                            enthusiast
                        </h3>
                    </Typist>


                    <button
                        className='aboutBtn'
                        onClick={() => this.scrollTo('about')}
                    >
                        ABOUT ME
                    </button>
                    <button
                        className='aboutBtn'
                        onClick={() => this.scrollTo('projects')}
                    >
                        PROJECTS
                    </button>

                </div>
            </div>
        )
    }
}

export default Header;
