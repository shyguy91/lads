import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lesson from '../lesson/lesson'
// presentation of the entire lessons
import Week from './week.js'

class Lessons extends Component {
    constructor(props) {
        super(props)
        this.state = { weeks:
            {
                "week1": {
                    "day1": [
                        {
                            "id": 1,
                            "Topic": "intro",
                            "Description": "description",
                            "LogoUrl": "http://url",
                            "WeekNumber": 0,
                            "DayNumber": 1
                        }
                    ]
                },
                "week2": {
                    "day1": [
                        {
                            "id": 4,
                            "Topic": "js",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 1,
                            "DayNumber": 2
                        }
                    ],
                    "day2": [
                        {
                            "id": 5,
                            "Topic": "js",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 1,
                            "DayNumber": 3
                        }
                    ],
                    "day3": [
                        {
                            "id": 6,
                            "Topic": "js",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 1,
                            "DayNumber": 4
                        }
                    ]
                },
                "week3": {
                    "day1": [
                        {
                            "id": 8,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 1
                        }
                    ],
                    "day2": [
                        {
                            "id": 9,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 2
                        }
                    ],
                    "day3": [
                        {
                            "id": 10,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 3
                        }
                    ],
                    "day4": [
                        {
                            "id": 7,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 4
                        }
                    ]
                },
                "week4": {
                    "day1": [
                        {
                            "id": 11,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 1
                        }
                    ],
                    "day2": [
                        {
                            "id": 12,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 2
                        }
                    ],
                    "day3": [
                        {
                            "id": 13,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 3
                        }
                    ],
                    "day4": [
                        {
                            "id": 14,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 4
                        }
                    ]
                },
                "week5": {
                    "day1": [
                        {
                            "id": 2,
                            "Topic": "hackathon",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 4,
                            "DayNumber": 1
                        },
                        {
                            "id": 3,
                            "Topic": "hackathon",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 4,
                            "DayNumber": 2
                        }
                    ]
                }
            }
        }
    }  

    render() {
            // console.log(this.state.weeks)
            let week = Object.keys(this.state.weeks).map((week, index) => (
            <Week key={index} index={index} week={this.state.weeks[week]} weekNumber={week}  />
        ))
        return (
            <div>
                <div>
                    <h1>Lessons Component</h1>
                    <Link to="/lesson">Lesson</Link>
                </div>

                {week}

            </div>
        )
    }
}

export default Lessons