import React from "react";
import { Card, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./BasicCard.css";
import "../../../index.css";
import SimpleDialog from "./SimpleDialog";

const BasicCard = ({ title, count, color }) => {
  const theme = useTheme();
  const extraSmallScreens = useMediaQuery(theme.breakpoints.up("xs"));
  let getCardMarginBottom = () => (extraSmallScreens ? "20px" : "65px");
  return (
    <>
      <SimpleDialog titleData={title}>
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
      </SimpleDialog>
    </>
  );
};

export default BasicCard;