import React, { Component } from "react";
import VoteButton from "./votebutton";

class Options extends Component {
  render() {
    return (
      <div>
        <button>{console.log(this)}</button>
        {this.props.vote.map(votes => (
          <VoteButton
            key={votes.id}
            onIncrement={this.props.onIncrement}
            name={votes.name}
            value={votes.value}
            votes={votes}
          />
        ))}
      </div>
    );
  }
}

export default Options;
