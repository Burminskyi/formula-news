import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

export default function ErrorPage() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={redirectToHome}>
        Back Home
      </Button>
    </Box>
  );
}
