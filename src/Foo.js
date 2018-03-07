import React from 'react';
import './Foo.css';

class Foo extends React.Component {
	state = {counter : 42};

	constructor(props) {
		super(props);
    }

    handleClick = () => {
		console.log("Button Clicked");
		this.setState((prevState) => ({
			counter: prevState.counter + 1
	    }));
    }

    render() {
		return (
			<div className="Foo">
			  <p> Foo Component</p>
			  <button onClick={this.handleClick}>{this.props.name} {this.state.counter}</button>
			  <div>State Goes Here</div>
			</div>
		);
    }
}

export default Foo;
