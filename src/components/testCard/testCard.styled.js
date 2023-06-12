import { FormControlLabel } from "@mui/material";
import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 0;
  text-align: auto;
`;

export const CardFormLabel = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const CardFormControlLabel = styled(FormControlLabel)`
 @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`
