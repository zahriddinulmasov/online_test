import styled from "styled-components";
import FormControl from "@mui/material/FormControl";

export const TopWrapper = styled.div`
margin-bottom: 30px;
  padding: 25px 20px 20px;
  background-color: pink;
  display: flex;
  border: 1px solid dimgray;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    margin-bottom: 18px;
    flex-direction: column;
  }
`;

export const FormControlWrapper = styled.div`
  max-width: 620px;
  width: 100%;
  display: flex;

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

export const FormControlInputs = styled(FormControl)`
  max-width: 300px;
  width: 100%;
`;

export const SelectedWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Results = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

export const ResultName = styled.p`
  margin: 0 20px 0 0;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const ResultSpan = styled.span`
  font-weight: 600;
  font-size: 20px;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
