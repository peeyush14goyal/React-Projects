import React, { Component } from "react";
import Options from "./options";
import "./App.css";

class App extends Component {
  state = {
    vote: [
      { id: 1, name: "PHP", value: 0 },
      { id: 2, name: "Python", value: 0 },
      { id: 3, name: "C++", value: 0 },
      { id: 4, name: "React", value: 0 },
      { id: 5, name: ".NET", value: 0 }
    ]
  };

  handleIncrement = id => {
    const vote = [...this.state.vote];
    vote[id - 1].value++;
    this.setState({ vote });
  };

  totalCount = () => {
    let totalCount = 0;
    this.state.vote.map(count => (totalCount += count.value));
    console.log(totalCount);
    return totalCount;
  };

  render() {
    return (
      <main className="container">
        <div>
          <p>
            Total Votes
            <span className="badge badge-info m-2">{this.totalCount()}</span>
          </p>
        </div>
        <Options vote={this.state.vote} onIncrement={this.handleIncrement} />
      </main>
    );
  }
}

export default App;
