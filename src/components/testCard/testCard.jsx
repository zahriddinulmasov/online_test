import {
  CardFormControlLabel,
  CardFormLabel,
  CardWrapper,
} from "./testCard.styled";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

export const TestCard = ({
  number,
  question,
  incorrect_answers,
  value,
  setValue,
}) => {
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <CardWrapper>
      <FormControl>
        <CardFormLabel id="demo-controlled-radio-buttons-group">
          {number}. {question}
        </CardFormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          sx={{ padding: "0 20px" }}
        >
          <CardFormControlLabel
            value={
              incorrect_answers[0] ? incorrect_answers[0] : "No information 1"
            }
            control={<Radio />}
            label={
              incorrect_answers[0] ? incorrect_answers[0] : "No information 1"
            }
          />

          <CardFormControlLabel
            value={
              incorrect_answers[1] ? incorrect_answers[1] : "No information 2"
            }
            control={<Radio />}
            label={
              incorrect_answers[1] ? incorrect_answers[1] : "No information 2"
            }
          />
          <CardFormControlLabel
            value={
              incorrect_answers[2] ? incorrect_answers[2] : "No information 3"
            }
            control={<Radio />}
            label={
              incorrect_answers[2] ? incorrect_answers[2] : "No information 3"
            }
          />
          <CardFormControlLabel
            value={
              incorrect_answers[3] ? incorrect_answers[3] : "No information 4"
            }
            control={<Radio />}
            label={
              incorrect_answers[3] ? incorrect_answers[3] : "No information 4"
            }
          />
        </RadioGroup>
      </FormControl>
    </CardWrapper>
  );
};
