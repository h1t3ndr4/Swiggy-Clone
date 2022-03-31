import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack
      spacing={2}
      direction="row"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        height: "15%",
        padding: "2.5%",
      }}
    >
      <Button
        variant="outlined"
        style={{
          borderRadius: "0",
          height: "100%",
          border: "1px solid teal",
          color: "teal",
          fontWeight: "600",
          fontSize: "0.85rem",
        }}
      >
        Outlined
      </Button>
      <Button
        variant="contained"
        style={{
          borderRadius: "0",
          height: "100%",
          width: "75%",
          background: "orange",
          fontWeight: "600",
          fontSize: "0.85rem",
        }}
      >
        Contained
      </Button>
    </Stack>
  );
}
