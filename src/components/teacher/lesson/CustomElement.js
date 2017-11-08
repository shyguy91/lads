import React,{Component} from 'react';
import '../style.css'
import Form from './toolbox/form/Form'

//const Code = (props) => (<code className={props.type}>Type:Code ||Text: {props.text}</code>)

// const Paragraph = (props) => (<p onClick={()=>alert('hi')} className={props.type}>Type: Paragraph || Text: {props.text}</p>)

class CustomElement extends Component {
    // componentWillReceiveProps() {
    //     this.selectType()
    // }
    selectType = () => {
        if(this.props.editing) {
            return <Form text={this.props.text} editContent={this.props.editContent} sectionIndex={this.props.sectionIndex} contentIndex={this.props.contentIndex}/>
        }
        switch (this.props.type) {
            case "paragraph":
                return <p onDoubleClick={this.props.toggleEditing} className={this.props.type}>Type: Paragraph || Text: {this.props.text}</p>;
            case "code":
                return <code onDoubleClick={this.props.toggleEditing} className={this.props.type}>Type:Code ||Text: {this.props.text}</code>;
        }
    }
    render() {
        return (
            <div className="content-container">
                {this.selectType()}
            </div>
        )
    }
}
export default CustomElement;