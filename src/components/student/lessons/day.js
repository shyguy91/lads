import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import Lesson from './lesson.js'

class Day extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        // const {description,img,name,tempCelsius} = this.props.city;
        // console.log(this.props.text)
        let lesson = this.props.days.map((day, index) =>
            <div key={index}> {day.Topic}  </div>)

        return (


                    <div className="col-xs-3">
                        <h1>{this.props.day}</h1>
                        </div>



        )
    }
}

export default Day;