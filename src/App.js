import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addItem = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="container">
                <FeedbackForm onSubmit={addItem} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} deleteItem={deleteItem} />
              </div>
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
