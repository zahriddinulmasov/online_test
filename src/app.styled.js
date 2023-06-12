import { Button } from "@mui/material";
import styled from "styled-components";

export const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px 20px;
  max-width: 1240px;
  height: 100vh;
  background-color: whitesmoke;

  @media screen and (max-width: 400px) {
    padding: 0 12px 20px;
  }
`;
export const SiteTitle = styled.h1`
  margin: 0;
  padding: 30px 0 15px;
  font-weight: 600;
  font-size: 50px;
  text-align: center;

  @media screen and (max-width: 700px) {
    padding: 15px 0 10px;
    font-size: 45px;
  }

  @media screen and (max-width: 400px) {
    font-size: 38px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppButton = styled(Button)``;

export const AnswerWrapper = styled.div`
  margin: 20px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const AnswerBtn = styled.p`
  margin: 8px;
  font-weight: 600;
`;
