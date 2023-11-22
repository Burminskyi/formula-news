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
import { useDispatch, useSelector } from "react-redux";
import {
  getNewsByHeadersThunk,
  getTopNewsThunk,
} from "../../redux/News/operations";
import { selectPage, selectRowsPerPage } from "../../redux/News/selectors";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../redux/News/slice";

export const FilterBar = () => {
  const navigate = useNavigate();

  const page = useSelector(selectPage);
  const rowsPerPage = useSelector(selectRowsPerPage);

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

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
    dispatch(
      getNewsByHeadersThunk({ query: searchValue, rowsPerPage, page: 1 })
    );
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
    dispatch(
      getTopNewsThunk({ selectedCountryCode, selectedCategory, page: 1 })
    );

    const queryParams = new URLSearchParams();
    queryParams.set("country", selectedCountryCode);
    queryParams.set("category", selectedCategory);

    navigate(`?${queryParams.toString()}`);
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const CATEGORIES = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const COUNTRIES = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    bg: "Bulgaria",
    br: "Brazil",
    ca: "Canada",
    ch: "Switzerland",
    cn: "China",
    co: "Colombia",
    cu: "Cuba",
    cz: "Czech Republic",
    de: "Germany",
    eg: "Egypt",
    fr: "France",
    gb: "United Kingdom",
    gr: "Greece",
    hk: "Hong Kong",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    lt: "Lithuania",
    lv: "Latvia",
    ma: "Morocco",
    mx: "Mexico",
    my: "Malaysia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    nz: "New Zealand",
    ph: "Philippines",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    sa: "Saudi Arabia",
    se: "Sweden",
    sg: "Singapore",
    si: "Slovenia",
    sk: "Slovakia",
    th: "Thailand",
    tr: "Turkey",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
    ve: "Venezuela",
    za: "South Africa",
  };

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
