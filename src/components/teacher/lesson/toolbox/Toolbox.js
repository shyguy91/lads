import React, { Component } from 'react';
import './Toolbox.css'
import Button from './button/Button'
import Form from './form/Form'

class Toolbox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //currentButton: ''
        }
        this.toggleElementAdding = this.toggleElementAdding.bind(this);
 //       this.addLessonContent = this.addLessonContent.bind(this);
    }

    toggleElementAdding(buttonLabel) {
        this.setState({ elementAdding: !this.state.elementAdding});
        if(buttonLabel) {
            this.props.toggleElementAdding(buttonLabel);
        }
    }

    // addLessonContent(newText) {
    //     //let newElement = {tag: this.state.currentButton, text: newText};
    //     //this.setState({lessonContent:this.state.lessonContent.concat(newElement)});
    //     //this.setState((prevState)=>({lessonContent:prevState.lessonContent.concat(newElement)}))

    //     this.props.addSection(newText);        
    // }

    render() {
    // let formHtml = <Form toggleNew={this.toggleElementAdding} addElement={this.addLessonContent}/>;
    // let form = (this.state.elementAdding ? formHtml : '');
    //let lessonElements = this.state.lessonContent.map((item, index) => <div className='lesson-element' key={index}><item.tag>{item.text}</item.tag></div>)

        return (
            <div className="toolbox">
                <div className="btn-group">
                    <Button label='h1' toggleNew={this.toggleElementAdding}/>
                    <Button label='h2' toggleNew={this.toggleElementAdding}/>
                    <Button label='h3' toggleNew={this.toggleElementAdding}/>
                    <Button label='hr' toggleNew={this.toggleElementAdding}/>
                    <Button label='br' toggleNew={this.toggleElementAdding}/>
                    <Button label='p' toggleNew={this.toggleElementAdding}/>
                    <Button label='a?' toggleNew={this.toggleElementAdding}/>
                    <Button label='show' toggleNew={this.toggleElementAdding}/>
                    <Button label='img' toggleNew={this.toggleElementAdding}/>
                    <Button label='pub' toggleNew={this.toggleElementAdding}/>
                </div>
                {/* {lessonElements} */}
                {/* {form} */}
            </div>
        );
    }
}

export default Toolbox;
