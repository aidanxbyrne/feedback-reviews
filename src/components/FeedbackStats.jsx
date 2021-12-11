import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //Calculate Average rating
  let feedbackAverage =
    feedback.reduce((acc, review) => {
      return acc + review.rating;
    }, 0) / feedback.length;

  //Set average to 1 decimal and remove 0 decimals
  feedbackAverage = feedbackAverage.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(feedbackAverage) ? 0 : feedbackAverage}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
