import { Box, TextField, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const BoardSearch = ({ setSearched }) => {
  const styles = {
    boxStyle: {
      width: 500,
      maxWidth: "100%",
      marginBottom: 4,
    },
    search: {
      padding: 0,
    },
  };

  return (
    <Box sx={styles.boxStyle}>
      <TextField
        sx={styles.search}
        fullWidth
        variant="standard"
        label="Seacrh"
        id="fullWidth"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setSearched(e.target.value)}
      />
    </Box>
  );
};

export default BoardSearch;
