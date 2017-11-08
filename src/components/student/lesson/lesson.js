import React, { Component } from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import Section from './section'

class Lesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: [
                {
                    header: "OverView",
                    contents: [//array of customElem
                        {
                            type: "code",
                            text: "var x = 10"
                        },
                        {
                            type: "paragraph",
                            text: "this is a variable"
                        }]
                },
                {
                    header: "Props Vs State",
                    contents: [
                        {
                            type: "paragraph",
                            text: "states are great"
                        },
                        {
                            type: "paragraph",
                            text: "props are stupid"
                        }]
                }]
        }
    }
    componentWillMount() {
        //reeive db stuff
    }

    render() {
        var displaySections = this.state.sections.map((section, index) => {
            return <Section key={index} section={section} contents={section.contents} ></Section>
        })
        return (
            <div>
                <h1 className="test">Lesson </h1>
                <Link to='/lessons'>Back To Lessons</Link>
                {displaySections}

            </div>

        )
    }
}

export default Lesson