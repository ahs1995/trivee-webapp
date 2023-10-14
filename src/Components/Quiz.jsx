import React, { useEffect, useState } from "react";
import "../index.css";
import { nanoid } from "nanoid";
import parse from "html-react-parser";
import Loading from "./Loading.jsx";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useWindowSize from "@rooks/use-window-size";
import Confetti from "react-confetti";

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [reset, setReset] = useState(0);
  const [triviaData, setTriviaData] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [confettiHeight, setConfettiHeight] = useState(0);

  const { innerWidth } = useWindowSize();

  function onGameStart() {
    props.onGameStart();
  }

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        let resultArray = [];

        data.results.map((result) => {
          return resultArray.push({
            id: nanoid(),
            question: result.question,
            correct_answer: result.correct_answer,
            answers: result.incorrect_answers
              .concat(result.correct_answer)
              .sort(() => Math.random() - 0.5),
            selectedAnswer: "",
          });
        });
        setQuestions(resultArray);
      });
  }, [reset]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setConfettiHeight(scrollY + innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [innerHeight]);

  if (questions.length === 0) {
    return <Loading />;
  }

  const renderElements = questions.map((qObj) => {
    return (
      <div key={qObj.id}>
        <h5 className="questions">{parse(qObj.question)}</h5>
        <div className="options">
          {qObj.answers.map((answer) => {
            return (
              <div key={answer}>
                <div className="answer-container">
                  <input
                    type="radio"
                    id={answer}
                    name={qObj.id}
                    value={answer}
                    onClick={handleSubmit}
                    disabled={showResult}
                  />
                  <label
                    className={`label ${selectedAnswerClass(answer, qObj)}`}
                    htmlFor={answer}
                  >
                    {parse(answer)}
                  </label>
                  {showResult &&
                    qObj.selectedAnswer === answer &&
                    qObj.selectedAnswer === qObj.correct_answer && (
                      <div className="correct-icon">
                        <CheckCircleIcon className="check-icon" />
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  function handleSubmit(event) {
    const { name, value } = event.target;
    const updatedQuestion = questions.map((question) => {
      if (question.id === name) {
        question.selectedAnswer = value;
      }
      return question;
    });
    setQuestions(updatedQuestion);
  }

  function checkAnswer() {
    let correctAnswers = 0;
    questions.map((question) => {
      if (question.selectedAnswer === question.correct_answer) {
        correctAnswers++;
      }
      return correctAnswers;
    });
    setTriviaData(correctAnswers);
    setShowResult(true);
  }

  function handleReset() {
    setShowResult(false);
    setTriviaData(0);
    setQuestions([]);
    setReset((prevValue) => !prevValue);
  }

  function selectedAnswerClass(answer, question) {
    if (showResult) {
      return answer === question.correct_answer ? "correct" : "incorrect";
    }
  }

  // const { width, height } = useWindowSize();

  return (
    <main>
      {showResult && triviaData === 5 && (
        <Confetti width={innerWidth} height={confettiHeight} />
      )}
      <section className="quiz-main">
        <h2 onClick={onGameStart} className="quiz-heading">
          Trivee
        </h2>
        <div className="quiz">
          {renderElements}
          <hr className="line"></hr>
          <div className="result-section">
            {showResult && (
              <p className={triviaData !== 5 ? "result" : "result-winner"}>
                {triviaData !== 5
                  ? `You got ${triviaData}/5 answers right`
                  : "You are a genius!"}
              </p>
            )}
            {!showResult ? (
              <button
                className="check-answers btn quiz-btn"
                onClick={checkAnswer}
              >
                Check result
              </button>
            ) : (
              <button
                className="check-answers btn quiz-btn"
                onClick={handleReset}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
