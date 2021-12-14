import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addItem, feedbackEdit, updateItem } = useContext(FeedbackContext);

  useEffect(() => {
    //Check if feedbackEdit is active
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const onTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Message must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  //On Form Submit. Diable default event. Append Rating and message to feedback state
  const createNewItem = (e) => {
    e.preventDefault();
    //Check if text input without whitespace is greater than 10 characters
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };

      //If feedback edit state is true, update existing item, else create new item
      feedbackEdit.edit === true
        ? updateItem(feedbackEdit.item.id, newFeedback)
        : addItem(newFeedback);

      //Clear text field after submission
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={createNewItem}>
        <h2>Rate Our Service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            className="input-text-field"
            type="text"
            placeholder="Leave a message"
            onChange={onTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version="secondary">
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
