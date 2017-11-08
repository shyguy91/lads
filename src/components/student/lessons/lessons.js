import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lesson from '../lesson/lesson'
// presentation of the entire lessons
import Weeks from './weeks.js'


class Lessons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lesson: 0
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Lessons Component</h1>
                    <ul>
                        <li>
                            {/* <Link to={`${this.props.match.url}/${this.state.lesson}`}>Lesson</Link> */}
                            <Link to="/lesson">Lesson</Link>
                        </li>
                    </ul>
                </div>
                {/* presentation of the weeks */}
                <div className="container">
                    <Weeks />
                </div>
            </div>


        )
    }
}

export default Lessons