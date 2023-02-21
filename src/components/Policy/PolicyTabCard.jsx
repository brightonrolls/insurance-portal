import React from "react";
import { Card, Typography } from "@mui/material";

import "../../index.css";

const PolicyTabCard = ({ image, title }) => {
  return (
    <>
      <Card className="policy-tab-cards">
        <img src={image} alt="Life Insurance" />
        <Typography fontSize="20px" fontWeight="bold" className="text-capital">
          {title}
        </Typography>
      </Card>
    </>
  );
};

export default PolicyTabCard;
