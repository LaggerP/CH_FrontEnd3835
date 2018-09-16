import React, {Component} from "react";

class ejercicioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      normalNumber: 1
    }
  }
  handleClick = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        normalNumber: prevState.normalNumber + this.props.magicNumber
      }
    });
  };
  render() {
    return (<div><button onClick={this.handleClick}> Click Me!</button>
      {this.state.normalNumber} </div>
    );
  }
};
export default ejercicioComponent;