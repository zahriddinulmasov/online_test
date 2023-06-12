import {
  CardFormControlLabel,
  CardFormLabel,
  CardWrapper,
  Correctanswer,
} from "./testCardAnswer.styled";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

export const TestCardAnswer = ({
  number,
  question,
  selectedValue,
  isCorrect,
  correctAnswer,
}) => {

  return (
    <CardWrapper>
      <FormControl>
        <CardFormLabel id="demo-controlled-radio-buttons-group">
          {number}. {question}
        </CardFormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          sx={{ padding: "0 20px" }}
        >
          <CardFormControlLabel
            sx={{
              color: isCorrect === "true" ? "blue" : "red",
              display: selectedValue || "none",
            }}
            control={<Radio color={isCorrect === "true" ? "info" : "error"} />}
            label={isCorrect === "true" ? selectedValue : correctAnswer}
          />
        </RadioGroup>
      </FormControl>

      {isCorrect === "true" || (
        <Correctanswer style={{ color: selectedValue ? "blue" : "red" }}>
          {selectedValue ? "✔" : "🔴"}
          {"   "}
          {selectedValue || "Sorry, you haven't marked an answer yet!"}
        </Correctanswer>
      )}
    </CardWrapper>
  );
};
