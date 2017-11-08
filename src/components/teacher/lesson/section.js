import React, { Component } from 'react';
import CustomElement from './elementTypes'

const Header = (props) => (<h2 className="header">{props.header}</h2>)

class Section extends Component {
    render() {
        var displayContent = this.props.contents.map((content, index) => {
            return <CustomElement key={index} type={content.type} text={content.text}></CustomElement>
        })
        return (

            <div className="section">
                <Header header={this.props.section.header} />
                {displayContent}
                <hr />
            </div>
        )
    }
}

export default Section