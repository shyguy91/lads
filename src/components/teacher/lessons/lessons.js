import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lesson from '../lesson/lesson'


class Lessons extends Component {
    constructor(props){
        super(props)
        this.state = {
            lesson:0 
        }
    }
    render() {
        return (
            <div>
                <h1>Lessons Component</h1>
                <ul>
                    <li>
                        {/* <Link to={`${this.props.match.url}/${this.state.lesson}`}>Lesson</Link> */}
                        <Link to="/lesson">Lesson</Link>
                    </li>
                    {/* <li>
                        <Link to="/lesson">Lesson 2</Link>
                    </li>
                    <li>
                        <Link to="/lesson">Lesson 3</Link>
                    </li>
                    <li>
                        <Link to="/lesson">Lesson 4</Link>
                    </li> */}
                </ul>
                
            </div>

        )
    }
}

export default Lessons