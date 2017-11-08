import React, { Component } from 'react';
import CustomElement from './CustomElement'
import Form from './toolbox/form/Form'

class Section extends Component {

    header = () => {
        if(this.props.section.headerEditable) {
            return <Form text={this.props.section.header} editContent={this.props.editContent} sectionIndex={this.props.sectionIndex}/>
        }
        return (<h2 className="header" onDoubleClick={()=>this.props.toggleEditing(this.props.sectionIndex)}>{this.props.section.header}</h2>)
    }

    render() {
        var displayContent = this.props.contents.map((content, index) => {
            return <CustomElement key={index} editing={content.editable} 
            toggleEditing={()=>this.props.toggleEditing(this.props.sectionIndex, index)} 
            type={content.type} text={content.text} editContent={this.props.editContent} 
            sectionIndex={this.props.sectionIndex} contentIndex={index}></CustomElement>
        })
        
        return (
            <div className='section'>
                {this.header()}
                {displayContent}
                <hr />
            </div>
        )
    }
}

export default Section