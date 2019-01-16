import React from "react";
import AnimateOnChange from "react-animate-on-change";
import PropTypes from "prop-types";
import getRandomOption from "./getRandomOption";
import "./style.css";

// ball
const Ball = ({ updateState, options, answer }) => (
  <div>
    <div
      onClick={Ball.handleRandomOption(updateState, options)}
      className="ball"
    >
        <div className="cycle">
            <div className="ball__tag">
                {answer ? (
                <AnimateOnChange
                    baseClassName="ball__answer"
                    animationClassName="ball__answer--animate"
                    animate={true}
                >
                    {answer}
                </AnimateOnChange>
                ) : (
                <span className="ball__number">8</span>
                )}
            </div>
        </div>
        <p>Click the magic ball to start</p>
    </div>
  </div>
);

Ball.handleRandomOption = (updateState, options) => e => {
  e.preventDefault();
  const answer = getRandomOption(options);
  if (options.length === 0) return;
  updateState({ answer });
};

Ball.propTypes = {
  updateState: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired
};

export default Ball;
