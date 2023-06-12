import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import {
  FormControlInputs,
  FormControlWrapper,
  ResultName,
  ResultSpan,
  Results,
  SelectedWrapper,
  TopWrapper,
} from "./top.styled";

export const Top = ({
  setAgeNumber,
  ageNumber,
  setAgeCategory,
  ageCategory,
  totalResult,
  setQuestion,
  currentQuestion,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  const handleChangeNumber = (event) => {
    setAgeNumber(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setAgeCategory(event.target.value);
  };

  return (
    <TopWrapper>
      <FormControlWrapper>
        <FormControlInputs sx={{ marginRight: "15px" }} size="small">
          <InputLabel id="demo-select-small-label">
            Number of Questions
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={ageNumber}
            label="Number of Questions"
            onChange={handleChangeNumber}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControlInputs>

        <FormControlInputs size="small">
          <InputLabel id="demo-select-small-label">Select Category</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={ageCategory}
            label="Select Category"
            onChange={handleChangeCategory}
          >
            <MenuItem value="">
              <em>Mixed category</em>
            </MenuItem>
            {categories.map((item, index) => (
              <MenuItem sx={{ maxWidth: "250px" }} value={item.id} key={index}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControlInputs>
      </FormControlWrapper>

      <SelectedWrapper>
        <Results>
          <ResultName>Total:</ResultName>
          <ResultSpan>{totalResult ? totalResult : 0}</ResultSpan>
        </Results>

        <Results>
          <ResultName>Current:</ResultName>
          <ResultSpan>{currentQuestion ? currentQuestion : 0}</ResultSpan>
        </Results>

        <Results>
          <ResultName>Wrong:</ResultName>
          <ResultSpan>{setQuestion ? setQuestion : 0}</ResultSpan>
        </Results>
      </SelectedWrapper>
    </TopWrapper>
  );
};