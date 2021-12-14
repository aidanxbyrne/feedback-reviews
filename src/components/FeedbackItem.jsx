import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteItem, editItem } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteItem(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => editItem(item)}></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
