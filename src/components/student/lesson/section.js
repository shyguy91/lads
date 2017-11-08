import React, {Component} from 'react';
import  Paragraph from './elementTypes'

class CustomElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "",
            text: ""
        }
    }
    selectType(){
        if (this.state.type === "paragraph"){
            return <Paragraph>{this.props.content}</Paragraph>
        }
        // else if (this.state.type === "code"){
        //     return <Code>{this.props.content}</Code>
        // }
    }

    render() {
        return (
            <div>
                <em>{this.props.type}</em>
                
            </div>
        )
    }

}
class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
            contents:[]
        }
    }
    render(){
       var displayContent = this.props.contents.map((content,index) => {
            return <CustomElement key={index} type={content.type} text={content.text}></CustomElement>
        })
        return (
            
            <div>
                <h1>{this.props.section.header}</h1>
                {displayContent}
                {/* <em><p>{this.props.contents[0].type}</p></em>
                <p>{this.props.contents[0].text}</p>
               <em> <p>{this.props.contents[1].type}</p></em>
                <p>{this.props.contents[1].text}</p> */}
            </div>
        )
    }
}

export default Section