import React, { useState, useEffect } from "react";
import axios from "axios";

const Questions = props => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://form-8987a.firebaseio.com/submits.json")
      .then(response => {
        const questionsArray = [];
        for (let key in response.data) {
          questionsArray.unshift({
            question: response.data[key].question,
            nickname: response.data[key].nickname,
            color: response.data[key].color
          });
        }

        setQuestions(questionsArray);
      })
      .catch(error => {
        alert(error);
      });
  }, []);
  return (
    <div className="questions-container">
      <h1>Questions</h1>
      <div className="grid">
        {questions.map((question, i) => (
          <li key={i}>
            <div
              style={{
                color: question.color,
                fontWeight: "bold",
                borderBottom: "2px dotted rgba(75, 78, 85, 0.651)",
                minHeight: 80,
                textAlign: "center",
                fontSize: 24
              }}
            >
              {question.question}
            </div>
            <div
              style={{
                color: question.color,
                textAlign: "right",
                paddingTop: 15
              }}
            >
              {question.nickname}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Questions;
