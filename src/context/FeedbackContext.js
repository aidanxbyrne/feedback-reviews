import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //Create new feedback item and add to feedback
  const addItem = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //Delete feedback item
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      //use filter to remove item from feedback array
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Edit existing feedback item
  const editItem = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //Update exiting feedback item from edit
  const updateItem = (id, updatedItem) => {
    setFeedback(
      //Map through feedback - If ID of feedback being edited matches item in feedback, add updated item to item
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteItem,
        addItem,
        editItem,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
