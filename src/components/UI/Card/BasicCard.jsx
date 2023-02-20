import React from "react";
import { Card, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./BasicCard.css";
import "../../../index.css";
// import SimpleDialog from "./SimpleDialog";

const BasicCard = ({ title, count, color }) => {
  const theme = useTheme();
  const extraSmallScreens = useMediaQuery(theme.breakpoints.up("xs"));
  let getCardMarginBottom = () => (extraSmallScreens ? "8px" : "65px");
  return (
    <>
      <Card
        className="card"
        sx={{
          alignSelf: "flex-end",
          marginBottom: getCardMarginBottom(),
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
      {/* <SimpleDialog titleData={title}>
        
      </SimpleDialog> */}
    </>
  );
};

export default BasicCard;
