import React from "react";
import {
  Box,
  Card,
  Divider,
  CardHeader,
  Typography,
  CardContent,
} from "@mui/material";

import DeleteIcon from "../../assets/images/delete.svg";

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

const TabPanel = ({ value, index, title }) => {
  return (
    <div
      style={{ margin: "0 50px", width: "95vw" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, background: "#f1f6fa" }}>
          <Card>
            <CardHeader title={title} subheader="Policies" />
            <Divider className="divider" />
            <CardContent sx={{ padding: "10px 0" }}>
              {data.map(({ id, name, OHRID, date, installment }) => {
                return (
                  <Box
                    className="dialog-card"
                    key={id}
                    // mb={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ padding: "20px 50px" }}
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
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
