import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Ball from "./Ball";

class MagicBall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            answer: ""
        };

        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
    (async () => {
        try {
            const { data: options } = await axios.get(
                `/api/answers`
            );
            this.updateState({
                options
            });
        } catch (err) {
            throw new Error(err);
        }
        })();
    }

    updateState(state) {
        this.setState(state);
    }

  render() {
    return (
      <div className="magic-ball">
        {this.state.options.length === 0 || !this.state.options ? (
            <p>Loading....</p>
        ) : (
          <Ball
            answer={this.state.answer}
            options={this.state.options}
            updateState={this.updateState}
          />
        )}
      </div>
    );
  }
}

MagicBall.propTypes = {
  updateState: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired
};

export default MagicBall;
