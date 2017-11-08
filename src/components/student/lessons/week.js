import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Day from './day.js'


class Week extends Component {
    constructor(props) {
        super(props)
        this.state = { showDays : false }
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState( { showDays: !this.state.showDays } )
    }

    render() {
        let days = Object.keys(this.props.week).map((days, index) => (
            <Day key={index} index={index} week={this.props.week} day={days} days={this.props.week[days]} />))

        return (
            <div className="row">

                <a onClick={this.onClick} href='#'><h1>{this.props.weekNumber}</h1></a>
                <div>{this.state.showDays && days}</div>

            </div>
        )
    }
}


export default Week;