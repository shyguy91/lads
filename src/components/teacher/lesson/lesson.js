import React, { Component } from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import Section from './section'
import Toolbox from './toolbox/Toolbox'
import Form from './toolbox/form/Form'

class Lesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elementAdding: false,
            currentButton: '',
            currentSection: 0,

            title: "Lesson Title",
            sections: [
                {
                    header: "OverView",
                    headerEditable: false,
                    contents: [//array of customElem
                        {
                            editable: false,
                            type: "code",
                            text: "var x = 10"
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "this is a variable"
                        }]
                },
                {
                    header: "Props Vs State",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "states are great"
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "props are stupid"
                        }]
                },
                {
                    header: "Props Vs State",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "states are great"
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "props are stupid"
                        }]
                },
                {
                    header: "Props Vs State",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "states are great"
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "props are stupid"
                        }]
                },
                {
                    header: "Props Vs State",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "states are great"
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "props are stupid"
                        }]
                }
            ]
        }
        this.addSection = this.addSection.bind(this);
        this.editContent = this.editContent.bind(this);
        this.toggleElementAdding = this.toggleElementAdding.bind(this); 
        this.toggleEditing = this.toggleEditing.bind(this);       
    }

    addSection(header) {
        let newSection = {
            header: header,
            headerEditable: false,
            contents: []
        }
        this.setState({sections: this.state.sections.concat(newSection)});
    }

    editContent(newText, sectionIndex, contentIndex) {
        console.log(`${newText}, ${sectionIndex}, ${contentIndex}`)
        if(contentIndex >= 0) {
            this.setState((prevState)=>{return{[prevState.sections[sectionIndex]]:prevState.sections[sectionIndex].contents[contentIndex].text=newText}})
        }
        else if(sectionIndex >= 0) {
            this.setState((prevState)=>{return{[prevState.sections[sectionIndex]]:prevState.sections[sectionIndex].header=newText}})            
        }
        this.toggleEditing(sectionIndex, contentIndex);        
    }

    toggleEditHeader(sectionIndex) {

    }

    toggleEditContent(sectionIndex, contentIndex) {

    }

    toggleEditing(sectionIndex, contentIndex) {
        if(contentIndex >= 0) {
            let contentEditable = this.state.sections[sectionIndex].contents[contentIndex].editable;
            this.setState((prevState)=>{return{[prevState.sections[sectionIndex]]:prevState.sections[sectionIndex].contents[contentIndex].editable = !contentEditable}})
        }
        else if(sectionIndex >= 0) {
            let sectionEditable = this.state.sections[sectionIndex].headerEditable;
            this.setState((prevState)=>{return{[prevState.sections[sectionIndex]]:prevState.sections[sectionIndex].headerEditable = !sectionEditable}})            
        }
    }

    toggleElementAdding(buttonLabel) {
        this.setState({ elementAdding: !this.state.elementAdding});
        if(buttonLabel) {
            this.setState({currentButton: buttonLabel.target.innerHTML});
        }
    }

    componentWillMount() {
        //reeive db stuff
    }

    render() {
        var displaySections = this.state.sections.map((section, index) => {
            return <Section key={index} section={section} contents={section.contents} sectionIndex={index} toggleEditing={this.toggleEditing} editContent={this.editContent}></Section>
        })
        let formHtml = <Form toggleNew={this.toggleElementAdding} addElement={this.addSection}/>;
        let form = (this.state.elementAdding ? formHtml : '');
        return (
            <div>
                <h1 className="test">{this.state.title}</h1>
                <Link to='/lessons'>Back To Lessons</Link>
                {displaySections}

                <Toolbox toggleElementAdding={this.toggleElementAdding}/>
                {form}
            </div>
        )
    }
}

export default Lesson