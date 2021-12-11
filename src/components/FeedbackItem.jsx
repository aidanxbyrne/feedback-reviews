import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, deleteItem }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteItem(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
