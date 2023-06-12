import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { PagesWrapper } from "./pages.styled";

export const Pages = ({ ageNumber, page, handleChange }) => {
  return (
    <PagesWrapper>
      <Pagination
        count={ageNumber}
        variant="outlined"
        color="primary"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </PagesWrapper>
  );
};
