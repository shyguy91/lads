import React, { Component } from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import Section from './section'
import Toolbox from './toolbox/Toolbox'

class Lesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"Lesson Title",
            sections: [
                {
                    header: "INTRO",
                    contents: [//array of customElem
                        {
                            type: "paragraph",
                            text: "Back in the day, when real programmers wrote in FORTRAN, people had little need to send data between different computers (after all, there really weren't that many of them!). As computers became more affordable and increased in number, the need for them to be able to communicate with one another grew. Ethernet was invented in the early 1970's to allow computers to communicate easily, and quickly became standardized, meaning virtually all computers knew how to speak to one another using its special language, also known as a protocol."
                        },
                        {
                            type: "paragraph",
                            text: "With the rise of the Internet, the desire for a way to ease communication between computers grew accordingly. New protocols were invented to allow this, and today virtually all computers know how to communicate using them."
                        },
                        {
                            type: "paragraph",
                            text: "Even though we now have these special, low-level protocols that computers use to communicate, reading, writing, and coding them as humans takes a lot of mental effort, and can be very error-prone! Instead, people have designed different formats over the years (like Telnet, SOAP XML and HTML) to make the messages that computers send one another easier to read, write, and manipulate for us humans."
                        },
                        {
                            type: "paragraph",
                            text: "This lesson is all about JSON, one of the reigning champions (if not the reigning champion) of all high-level data formats."
                        }]
                },
                {
                    header: "WHAT IS JSON?",
                    contents: [
                        {
                            type: "paragraph",
                            text: "JSON stands for JavaScript Object Notation, and looks like this:"
                        },
                        {
                            type: "code",
                            text: `{
                                "hello": "world"
                              }`
                        }]
                },
                {
                    header: "DOUBLE-TAKE",
                    contents: [
                        {
                            type: "paragraph",
                            text: "This should all look familiar. Maybe a little bit too familiar..."
                        },
                        {
                            type: "paragraph",
                            text: "That's a good thing!"
                        }, 
                        {
                            type: "paragraph",
                            text: "JSON, happily enough, was directly inspired by JavaScript's syntax for creating objects! It's what you'd call a proper subset of JavaScript. It is made up of some, but not all, of JavaScript's syntax and data structures. This means that all JSON is valid JavaScript, but not all JavaScript is valid JSON."
                        }]
                },
                {
                    header: "EXERCISE",
                    contents: [
                        {
                            type: "paragraph",
                            text: "Read the first few paragraphs found on http://json.org, up to the point where the diagrams start."
                        },
                        {
                            type: "paragraph",
                            text: `What does 'language independent' mean? \n
                            Why would it be important for JSON to be language-independent? \n
                            Think of some ways language-independence helps you, the programmer. \n
                            Bonus Question: What do the diagrams mean? How do you read them? Why are they useful?`
                        }]
                },
                {
                    header: "RULES OF THE ROAD",
                    contents: [
                        {
                            type: "paragraph",
                            text: "There are a few simple rules about JSON that makes writing it slightly more 'strict' than writing raw JavaScript objects."
                        },
                        {
                            type: "paragraph",
                            text: `1. Single quotes (i.e. ') can't be used to surround strings or keys; only double quotes (i.e. ") are allowed.`
                        },
                        {
                            type: "paragraph",
                            text: "Good"
                        },
                        {
                            type: "code",
                            text: `{ "hello": "world" }`
                        },
                        {
                            type: "paragraph",
                            text: "Bad"
                        },
                        {
                            type: "code",
                            text: `{
                                "uh": 'oh',
                                'super': "bad"
                               }`
                        }]
                }
            ]
        }
    }

    addSection(sectionIndex) {

    }

    addContent(sectionIndex, contentIndex) {
        
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
                <h1 className="test">{this.state.title}</h1>
                <Link to='/lessons'>Back To Lessons</Link>
                {displaySections}

                <Toolbox />
            </div>

        )
    }
}

export default Lesson