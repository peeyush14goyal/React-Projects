import React, { Component } from "react";

class VoteButton extends Component {
  render() {
    return (
      <div>
        <span className=" m-2">{this.props.votes.value}</span>
        <span className=" names m-2">{this.props.votes.name}</span>
        <button
          className="btn-info m-2"
          onClick={() => this.props.onIncrement(this.props.votes.id)}
        >
          VOTE
        </button>
      </div>
    );
  }
}

export default VoteButton;
