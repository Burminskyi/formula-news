import { Button } from "@mui/material";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  FilterBarWrap,
  FilterDescription,
  SearchBarWrap,
  SelectBarWrap,
  StyledFilterBar,
} from "./FilterBar.styled";
import SelectBar from "../SelectBar/SelectBar";
import { SearchInput } from "../SearchInput/SearchInput";
import { useState } from "react";

export const FilterBar = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const toggleFilters = () => {
    setIsBtnClicked(!isBtnClicked);
  };

  return (
    <StyledFilterBar>
      <FilterBarWrap>
        <FilterDescription>Formula Top Headlines</FilterDescription>
        <SearchBarWrap>
          <SearchInput />
          <Button
            onClick={toggleFilters}
            variant="contained"
            type="button"
            startIcon={<FilterAltIcon />}
            sx={{
              height: 46,
              width: 115,
            }}
          >
            Filter
          </Button>
        </SearchBarWrap>
      </FilterBarWrap>
      {isBtnClicked && (
        <SelectBarWrap>
          <SelectBar />
          <SelectBar />
        </SelectBarWrap>
      )}
    </StyledFilterBar>
  );
};
