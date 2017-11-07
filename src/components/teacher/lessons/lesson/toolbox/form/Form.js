import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {input: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addElement(this.state.input);
        this.props.toggleNew();
    }

    render() {
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Add text here' value={this.state.input} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default Form;
