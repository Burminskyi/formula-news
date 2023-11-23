import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SelectBar from "../SelectBar/SelectBar";
import { SearchInput } from "../SearchInput/SearchInput";

import { setPage } from "../../redux/News/slice";
import {
  getNewsByHeadersThunk,
  getTopNewsThunk,
} from "../../redux/News/operations";
import { selectRowsPerPage } from "../../redux/News/selectors";

import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import {
  FilterBarWrap,
  FilterDescription,
  SearchBarWrap,
  SelectBarWrap,
  StyledFilterBar,
} from "./FilterBar.styled";

import { CATEGORIES, COUNTRIES } from "../../sources/filters";

export const FilterBar = () => {
  const rowsPerPage = useSelector(selectRowsPerPage);

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleFilters = () => {
    setIsBtnClicked(!isBtnClicked);
  };

  const handleCategoryChange = (data) => {
    setSelectedCategory(data);
  };

  const handleCountryChange = (data) => {
    setSelectedCountry(data);
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    queryParams.set("query", searchValue);
    navigate(`?${queryParams.toString()}`);
    dispatch(setPage(0));
    setSearchValue("");
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSubmit = () => {
    const selectedCountryCode = getKeyByValue(COUNTRIES, selectedCountry);

    const queryParams = new URLSearchParams();
    if (selectedCountryCode) {
      queryParams.set("country", selectedCountryCode);
    }
    if (selectedCategory) {
      queryParams.set("category", selectedCategory);
    }
    dispatch(setPage(0));

    navigate(`?${queryParams.toString()}`);
  };

  const getKeyByValue = (object, value) =>
    Object.keys(object).find((key) => object[key] === value);

  const COUNTRY_NAMES = Object.values(COUNTRIES);

  return (
    <StyledFilterBar>
      <FilterBarWrap>
        <FilterDescription>Formula Top Headlines</FilterDescription>
        <SearchBarWrap>
          <SearchInput
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
            value={searchValue}
            handleSearch={() => handleSearch(searchValue)}
          />
          <Button
            onClick={toggleFilters}
            variant="contained"
            type="button"
            startIcon={isBtnClicked ? <FilterAltOffIcon /> : <FilterAltIcon />}
            sx={{
              backgroundColor: "#ECF0F6",
              height: 46,
              width: 115,
              color: "#1A232E",
            }}
          >
            Filter
          </Button>
        </SearchBarWrap>
      </FilterBarWrap>
      {isBtnClicked && (
        <SelectBarWrap>
          <SelectBar
            selectType="Categories"
            values={CATEGORIES}
            onChange={handleCategoryChange}
            selectedValue={selectedCategory}
          />
          <SelectBar
            selectType="Countries"
            values={COUNTRY_NAMES}
            onChange={handleCountryChange}
            selectedValue={selectedCountry}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{ height: "56px", width: "168px" }}
          >
            Submit
          </Button>
        </SelectBarWrap>
      )}
    </StyledFilterBar>
  );
};
