import React, {Component} from 'react'
import Whiteboard from './subcomponents/whiteboard.js'
import Scrollbox from './subcomponents/scrollbox.js'
import './home.css'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="home-wrapper">
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <Whiteboard/>
                    </div>
                    <div className="col-xs-2 scrollbox-wrapper">
                    <Scrollbox/>
                    </div>
                </div>

                
                    
                
            </div>

        )
    }
}

export default Home