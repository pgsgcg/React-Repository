import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <h5>Hello Class Component</h5>;
  }
}

class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

export default App;