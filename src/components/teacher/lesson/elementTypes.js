import React,{Component} from 'react';
import '../style.css'

const Code = (props) => (<code className={props.type}>{props.text}</code>)

const Paragraph = (props) => (<p className={props.type}>{props.text}</p>)

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
            <div className="content-container">
                {this.selectType()}
            </div>
        )
    }
}
export default CustomElement;