import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch Feedback
  const fetchFeedback = async () => {
    const res = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };

  //Create new feedback item and add to feedback
  const addItem = async (newFeedback) => {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();

    setFeedback([data, ...feedback]);
  };

  //Delete feedback item
  const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      //use filter to remove item from feedback array
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Edit existing feedback item
  const editItem = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //Update exiting feedback item from edit
  const updateItem = async (id, updatedItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await res.json();

    setFeedback(
      //Map through feedback - If ID of feedback being edited matches item in feedback, add updated item to item
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );

    setFeedbackEdit(false);
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
