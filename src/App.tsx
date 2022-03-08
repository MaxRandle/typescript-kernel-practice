import React, { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

interface IState {
  reviews: {
    name: string;
    email: string;
    rating: string;
    feedback?: string;
  }[];
  review: {
    name: string;
    email: string;
    rating: string;
    feedback?: string;
  };
}

function App() {
  const [reviews, setReviews] = useState<IState["reviews"]>([
    {
      name: "Mr Mallet",
      email: "mallet@mail.com",
      rating: "4",
      feedback: "There were not enough mallets for my taste",
    },
    {
      name: "Jerald Jefferson",
      email: "jj@jmail.com",
      rating: "2",
      feedback: "I like alliteration",
    },
  ]);

  const handleSubmitFeedback = async (
    formValues: IState["review"],
    onSuccess: Function,
    onFail: Function
  ) => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      setReviews((s) => [formValues, ...s]);
      onSuccess();
    } catch (error: any) {
      console.log(error.message);
      onFail(error.message);
    }
  };

  return (
    <div className="App">
      <h3>user reviews</h3>

      <FeedbackForm onSubmit={handleSubmitFeedback} />
      <FeedbackList reviews={reviews} />
    </div>
  );
}

export default App;

// {
//   name: "Mr Mallet",
//   email: "mallet@mail.com",
//   feedback: "There were not enough mallets for my taste",
// },
// {
//   name: "Jerald Jefferson",
//   email: "jj@jmail.com",
//   feedback: "I like alliteration",
// },
