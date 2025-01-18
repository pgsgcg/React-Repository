import React from "react";

class StateClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { change: true };
    }

    render() {
        return (
          <div>
            <button
              onClick={() => {
                this.setState({ change: !this.state.change });
              }}
            >
              Click Here!
            </button>
            {this.state.change ? (
              <h1>Welcome to State In Class Component</h1>
            ) : (
              <h1>A Computer Science Portal for Geeks</h1>
            )}
          </div>
        );
      }
}

export default StateClassComponent;