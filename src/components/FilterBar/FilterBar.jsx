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
import SelectBar from "../SelectBar/SelectBar";
import { SearchInput } from "../SearchInput/SearchInput";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const FilterBar = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const toggleFilters = () => {
    setIsBtnClicked(!isBtnClicked);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = () => {
    console.log("selectedCountry: ", selectedCountry);
    console.log("selectedCategory: ", selectedCategory);
  };

  const CATEGORIES = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const COUNTRIES = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];

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
            values={COUNTRIES}
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
