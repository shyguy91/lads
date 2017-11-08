import React, { Component } from 'react';
import CustomElement from './elementTypes'

const Header = (props) => (<h2>{props.header}</h2>)

class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: []
        }
    }
    render() {
        var displayContent = this.props.contents.map((content, index) => {
            return <CustomElement key={index} type={content.type} text={content.text}></CustomElement>
        })
        return (

            <div>
                <Header header={this.props.section.header} />
                {displayContent}
                <hr />
            </div>
        )
    }
}

export default Section