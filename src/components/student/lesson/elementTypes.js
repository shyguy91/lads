import React,{Component} from 'react';
import '../style.css'

const Code = (props) => (<pre className={props.type}>Type:Code ||Text: {props.text}</pre>)

const Paragraph = (props) => (<p className={props.type}>Type: Paragraph || Text: {props.text}</p>)

class CustomElement extends Component {
    // componentWillReceiveProps() {
    //     this.selectType()
    // }
    selectType = () => {
        switch (this.props.type) {
            case "paragraph":
                return <Paragraph type={this.props.type} text={this.props.text}/>;
            case "code":
                return <Code type={this.props.type} text={this.props.text} />;
        }
    }
    render() {
        return (
            <div>
                {this.selectType()}
            </div>
        )
    }
}
export default CustomElement;