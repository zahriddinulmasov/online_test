import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Top } from "./components/top/top";
import { informationActions } from "./store/commonData";

import {
  AnswerBtn,
  AnswerWrapper,
  AppButton,
  AppWrapper,
  Bottom,
  ResultTelegram,
  ResultTelegramLink,
  SiteTitle,
} from "./app.styled";
import { TestCard } from "./components/testCard/testCard";
import { Pages } from "./components/pages/pages";
import { TestCardAnswer } from "./components/testCardAnswer/testCardAnswer";

let localAnswers = JSON.parse(localStorage.getItem("answer"));

let results = localAnswers || [];

function App() {
  const dispatch = useDispatch();
  const [ageNumber, setAgeNumber] = useState(10);
  const [ageCategory, setAgeCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [commonResults, setCommonResults] = useState([]);

  useEffect(() => {
    // I wanted to get the api from the .env, but Netflix didn't release the api!
    axios
      .get(
        `https://opentdb.com/api.php?amount=${ageNumber}&category=${ageCategory}`
      )
      .then((data) => {
        data.data.results.forEach((item) =>
          item.incorrect_answers.splice(
            Math.floor(Math.random() * 4),
            0,
            item.correct_answer
          )
        );
        dispatch(informationActions.setInformations(data.data.results));
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, [ageNumber, ageCategory]);

  const selector = useSelector((state) => state.commonData.information);

  const oneQuestion = selector.slice(page - 1, page);
  const oneQuestionResult = commonResults.slice(page - 1, page);

  const selectedAnswers = [];
  const handleChange = (event, numberPage) => {
    if (!results.includes(value) && value !== "") {
      const newAsnwer = { id: page, isCorrect: "false", answer: value };

      results = results.filter((item) => item.id !== page);
      results.push(newAsnwer);
    }

    const desiredPage =
      numberPage !== undefined
        ? numberPage
        : selector.length + 1 - selector.length;

    setPage(desiredPage);
  };

  results.forEach((item) => {
    selectedAnswers.push(item.answer);
  });

  const getResult = (totalQuestions) => {
    let commonRes = [];
    let correct = 0;

    totalQuestions.forEach((item1, index) => {
      const newAsnwer = {};
      if (selectedAnswers.includes(item1.correct_answer)) {
        correct = correct + 1;
        newAsnwer.isCorrect = "true";
        newAsnwer.id = index + 1;
        newAsnwer.question = item1.question;
        newAsnwer.selectedValue = selectedAnswers[index];
        newAsnwer.correct_answer = item1.correct_answer;
        commonRes.push(newAsnwer);
      } else {
        newAsnwer.isCorrect = "false";
        newAsnwer.id = index + 1;
        newAsnwer.question = item1.question;
        newAsnwer.selectedValue = selectedAnswers[index];
        newAsnwer.correct_answer = item1.correct_answer;
        commonRes.push(newAsnwer);
      }
    });

    setCommonResults(commonRes);
    return correct;
  };

  const sendTelegram = (numberCorrectAnswer) => {
    const nameCategory = allCategory.find((item) => item.id === ageCategory);
    console.log(numberCorrectAnswer);

    let comResult = `<b>Overall result👇</b>\n\n `;
    comResult += `<i>📜 Category: </i><b>${
      ageCategory >= 9 ? nameCategory.name : "Any category"
    }</b>\n`;
    comResult += `<i>🔃 Total: </i><b>${ageNumber}</b>\n `;
    comResult += `<i>✔ Current: </i><b>${numberCorrectAnswer}</b>\n`;
    comResult += `<i>❌ Wrong: </i><b>${
      selector.length - numberCorrectAnswer
    }</b>`;

    const TOKEN = "6276563576:AAFKhWHTTqkQ4zVtGk2HEyacNNub9WcE_tw";
    const CHAT_ID = "-1001908803674";
    let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: comResult,
    });
  };

  const handleResult = () => {
    handleChange();
    setCurrentQuestions(getResult(selector));
    sendTelegram(getResult(selector));
  };

  return (
    <AppWrapper>
      <SiteTitle>Solve the test!</SiteTitle>

      <Top
        ageNumber={ageNumber}
        setAgeNumber={setAgeNumber}
        allCategory={allCategory}
        setAllCategory={setAllCategory}
        ageCategory={ageCategory}
        setAgeCategory={setAgeCategory}
        totalResult={selector.length}
        currentQuestion={currentQuestions}
        setQuestion={selector.length - currentQuestions}
      />

      {commonResults.length > 0
        ? oneQuestionResult.map((item, index) => (
            <TestCardAnswer
              number={page}
              isCorrect={item.isCorrect}
              question={item.question}
              selectedValue={item.selectedValue}
              correctAnswer={item.correct_answer}
              key={index}
            />
          ))
        : oneQuestion.map((item, index) => (
            <TestCard
              number={page}
              question={item.question}
              incorrect_answers={
                item.incorrect_answers
                  ? item.incorrect_answers
                  : [
                      "No information 1",
                      "No information 2",
                      "No information 3",
                      "No information 4",
                    ]
              }
              value={value}
              setValue={setValue}
              key={index}
            />
          ))}

      <Pages
        ageNumber={ageNumber}
        page={page}
        handleChange={handleChange}
        setPage={setPage}
      />

      <Bottom>
        <AppButton
          onClick={() => window.location.reload()}
          sx={{ mr: "12px" }}
          variant="contained"
        >
          Start over
        </AppButton>

        <AppButton
          disabled={results.length > 0 ? false : true}
          onClick={handleResult}
          variant="contained"
        >
          to complete
        </AppButton>
      </Bottom>

      {commonResults.length > 0 && (
        <>
          <AnswerWrapper>
            {commonResults.map((item) => (
              <AnswerBtn key={item.id} id={item.id}>
                {item.id}.{` ${item.isCorrect === "true" ? "✔" : "❌"}`}
              </AnswerBtn>
            ))}
          </AnswerWrapper>
          <ResultTelegram style={{}}>
            You can also see the result on the telegram channel!
            <ResultTelegramLink href="https://t.me/+8UxymlM-H805ODZi">
              ➡Kanal
            </ResultTelegramLink>
          </ResultTelegram>
        </>
      )}
    </AppWrapper>
  );
}

export default App;
