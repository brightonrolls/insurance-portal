import React from "react";
import { Box, Card, CardHeader, CardContent, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import DeleteIcon from "../../../assets/images/delete.svg";
import "../../../index.css";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 780,
  },
});

const data = [
  {
    id: 1,
    name: "Tony Stark",
    OHRID: "602327908",
    installment: "26,362.00",
    date: "23-Dec-2023",
  },
  {
    id: 2,
    name: "Steve Rogers",
    OHRID: "602327908",
    installment: "20,362.00",
    date: "23-Dec-1900",
  },
];

const cardDetails = (titleData) => {
  return (
    <>
      <Card sx={{ width: "750px" }}>
        <CardHeader title={titleData} subheader="Policies" />
        <CardContent sx={{ padding: "10px 0" }}>
          {data.map(({ id, name, OHRID, date, installment }) => {
            return (
              <Box
                className="dialog-card"
                key={id}
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "0 10px" }}
              >
                <Box>
                  <Typography variant="body1">{name}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {OHRID}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="text.primary">
                    Installment Premimum (Yly)
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Rs. {installment}
                  </Typography>
                  <Typography color="text.secondary" variant="body2" mt={1}>
                    In Force
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="text.primary">
                    Premimum Due Form
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    align="center"
                  >
                    {date}
                  </Typography>
                </Box>
                <Box>
                  <img
                    src={DeleteIcon}
                    alt="Delete"
                    height="25px"
                    width="25px"
                  />
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

const SimpleDialog = ({ titleData, children }) => {
  return (
    <>
      <CustomWidthTooltip
        arrow={true}
        placement="bottom"
        title={cardDetails(titleData)}
      >
        {children}
      </CustomWidthTooltip>
    </>
  );
};

export default SimpleDialog;
