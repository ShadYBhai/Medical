import React, { Component } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

class Dropdown extends Component {
  render() {
    const { elements, label } = this.props;
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={label}
            onChange={this.props.onElementChange}
          >
            {elements.map((element) => (
              <MenuItem key={element} value={element}>
                {element}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }
}

export default Dropdown;
