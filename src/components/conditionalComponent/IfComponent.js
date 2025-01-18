import React from "react";
import ReactDOM from "react-dom";

// Message Component
// Message Component 
function Message(props) 
{ 
	//alert("Message....");
	if (props.isLoggedIn) 
		return <h1>Welcome User</h1>; 
	else
		return <h1>Please Login</h1>; 
} 

// Login Component
function Login(props) {
	//alert("Login...");
	return <button onClick={props.clickFunc}>Login</button>;
}

// Logout Component
function Logout(props) {
	//alert("Logout...");
	return <button onClick={props.clickFunc}>Logout</button>;
}

// Parent Homepage Component
class IfComponent extends React.Component {
	
	constructor(props) {
		//alert("constructor");
		super(props);

		this.state = { isLoggedIn: false };

		this.ifLoginClicked = this.ifLoginClicked.bind(this);
		this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
	}

	ifLoginClicked() {
		//alert("ifLoginClicked..");
		this.setState({ isLoggedIn: true });
	}

	ifLogoutClicked() {
		//alert("ifLogoutClicked..");
		this.setState({ isLoggedIn: false });
	}

	render() {
		//alert("Before Render....");
		return (
			<div>
				<Message isLoggedIn={this.state.isLoggedIn} />
				{this.state.isLoggedIn ? (
					<Logout clickFunc={this.ifLogoutClicked} />
				) : (
					<Login clickFunc={this.ifLoginClicked} />
				)}
			</div>
		);
	}
}

export default IfComponent;
