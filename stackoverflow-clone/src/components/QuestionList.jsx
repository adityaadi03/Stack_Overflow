import React from "react";
import QuestionCard from "./QuestionCard";
import "./QuestionList.css";

const questions = [
  {
    title:
      "I am not able to use view binding in activity in Kotlin android where I have also used companion object",
    tags: ["Android", "Kotlin", "Android-Activity", "Companion-Object"],
    votes: 7,
    answers: 7,
    views: 7,
    time: "55 seconds ago",
  },
  {
    title:
      "I am not able to use view binding in activity in Kotlin android where I have also used companion object",
    tags: ["Android", "Kotlin", "Android-Activity", "Companion-Object"],
    votes: 7,
    answers: 7,
    views: 7,
    time: "55 seconds ago",
  },
];

const QuestionList = () => {
  return (
    <div className="question-list">
      {questions.map((q, index) => (
        <QuestionCard key={index} question={q} />
      ))}
    </div>
  );
};

export default QuestionList;
