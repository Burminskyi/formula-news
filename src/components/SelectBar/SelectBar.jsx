import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

export default function SelectBar({
  selectType,
  values,
  onChange,
  selectedValue,
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleReset = () => {
    onChange("");
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectType}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={selectType}
          onChange={handleChange}
          sx={{
            "& .MuiSelect-select.MuiSelect-select": {
              textAlign: "left",
            },
          }}
        >
          {values &&
            values.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
        </Select>
        {selectedValue && (
          <Button variant="text" onClick={handleReset}>
            Reset
          </Button>
        )}
      </FormControl>
    </Box>
  );
}
