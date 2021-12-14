import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState();
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const ratingSelected = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {[...Array(10)].map((e, i) => {
        return (
          <li key={i}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={ratingSelected}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
