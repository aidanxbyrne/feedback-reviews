import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
