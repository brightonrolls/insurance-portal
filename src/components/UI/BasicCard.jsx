import React from "react";
import { Box, Card, Divider, Typography, CardContent } from "@mui/material";
import CustomizedProgressBars from "./Progress";

const data = [
  {
    id: 1,
    title: "Draft",
    percent: 3,
    color: "#1a90ff",
  },
  {
    id: 2,
    title: "Pending",
    percent: 5,
    color: "#1a90ff",
  },
  {
    id: 3,
    title: "Not Paid",
    percent: 12,
    color: "#1a90ff",
  },
  {
    id: 4,
    title: "Overdue",
    percent: 6,
    color: "#1a90ff",
  },
  {
    id: 5,
    title: "Parially Paid",
    percent: 8,
    color: "#1a90ff",
  },
  {
    id: 6,
    title: "Paid",
    percent: 55,
    color: "#1a90ff",
  },
];

const BasicCard = ({ title }) => {
  return (
    <Box>
      <Card variant="outlined" sx={{ borderRadius: "5px" }}>
        <CardContent>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            align="center"
            variant="body1"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Divider />
          {data?.map(({ id, title, percent, color }) => {
            return (
              <React.Fragment key={id}>
                <Box
                  p={2}
                  pb={0}
                  gap={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {percent}%
                  </Typography>
                </Box>
                <Box pl={2} pr={2} pb={2}>
                  <CustomizedProgressBars value={percent} color={color} />
                </Box>
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicCard;
