import React from "react";
//import "./QuestionCard.css";

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h4>{question.title}</h4>
      <div className="tags">
        {question.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="question-meta">
        <span>{question.votes} votes</span> |{" "}
        <span>{question.answers} answers</span> |{" "}
        <span>{question.views} views</span>
      </div>
      <small>{question.time}</small>
    </div>
  );
};

export default QuestionCard;
