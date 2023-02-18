import React from "react";
import { Card, Box } from "@mui/material";

import "./BasicCard.css";

const BasicCard = ({ title, count, color }) => {
  return (
    <>
      <Card
        className="card"
        sx={{
          alignSelf: "flex-end",
          marginBottom: "65px",
          backgroundColor: color,
        }}
      >
        <Box>
          <p className="card-title">{title}</p>
          <p className="card-subtitle">Policies</p>
        </Box>
        <Box>
          <span className="count">{count}</span>
        </Box>
      </Card>
    </>
  );
};

export default BasicCard;
