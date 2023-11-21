import {
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const SearchInput = ({ onKeyPress, onChange, value, handleSearch }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <InputLabel
          htmlFor="outlined-search"
          sx={{
            position: "absolute",
            left: "50px",
            top: focused ? "-6px" : "14px",
            zIndex: 1,
            backgroundColor: "white",
            padding: "0 5px",
            transition: "top 0.3s, font-size 0.3s",
            fontSize: focused ? "0.75rem" : "1rem",
          }}
        >
          Search article
        </InputLabel>
        <TextField
          id="outlined-search"
          type="search"
          variant="outlined"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") {
              setFocused(false);
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={() => handleSearch(value)}
                  disabled={!value}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              "& .MuiInputBase-input": {
                height: "34px",
                width: "250px",
                padding: "10px 14px",
                textAlign: "start",
              },
              "&:hover fieldset": {
                borderColor: "green",
              },
            },
          }}
          onKeyPress={onKeyPress}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};
