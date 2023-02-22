import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

import "../../../index.css";
import PolicyListing from "./PolicyListing";

const data = [
  {
    id: 1,
    heading: "Policy 1",
    subTitle: "Life Cover",
    count: "1 Cr",
  },
  {
    id: 2,
    heading: "Policy 2",
    subTitle: "Life Cover",
    count: "1.5 Cr",
  },
  {
    id: 3,
    heading: "Policy 3",
    subTitle: "Life Cover",
    count: "2 Cr",
  },
  {
    id: 4,
    heading: "Policy 4",
    subTitle: "Life Cover",
    count: "1.5 Cr",
  },
  {
    id: 5,
    heading: "Policy 5",
    subTitle: "Life Cover",
    count: "1 Cr",
  },
];

const SubTabPanel = ({ title, value, index }) => {
  const [openContainer, setOpenContainer] = useState(false);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Card className="p-20">
            <CardHeader title="Recommended" />
            <CardContent>
              <Scrollbars style={{ height: 110 }}>
                <Box
                  sx={{ gap: "20px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {data?.map(({ id, heading, subTitle, count }) => {
                    return (
                      <div
                        key={id}
                        className="policy-listing-card-item"
                        onClick={() => setOpenContainer(!openContainer)}
                      >
                        <Box
                          sx={{ width: "200px" }}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <div>
                            <Typography
                              fontSize="19px"
                              fontWeight="bold"
                              className="heading-color"
                              sx={{ lineHeight: "2" }}
                            >
                              {heading}
                            </Typography>
                            <Typography align="right" fontSize="12px">
                              {subTitle}
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              fontSize="31px"
                              fontWeight="bold"
                              className="heading-color"
                            >
                              {count}
                            </Typography>
                          </div>
                        </Box>
                      </div>
                    );
                  })}
                </Box>
              </Scrollbars>
              {openContainer && (
                <>
                  <PolicyListing />
                </>
              )}
              <Box sx={{ paddingTop: "10px" }}>
                <Typography fontSize="1.5rem" pb={3}>
                  Also Viewed
                </Typography>
                <div>
                  <Scrollbars style={{ height: 110 }}>
                    <Box
                      sx={{ gap: "20px" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      {data?.map(({ id, heading, subTitle, count }) => {
                        return (
                          <div key={id} className="policy-listing-card-item">
                            <Box
                              sx={{ width: "200px" }}
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <div>
                                <Typography
                                  fontSize="19px"
                                  fontWeight="bold"
                                  className="heading-color"
                                  sx={{ lineHeight: "2" }}
                                >
                                  {heading}
                                </Typography>
                                <Typography align="right" fontSize="11px">
                                  {subTitle}
                                </Typography>
                              </div>
                              <div>
                                <Typography
                                  fontSize="31px"
                                  fontWeight="bold"
                                  className="heading-color"
                                >
                                  {count}
                                </Typography>
                              </div>
                            </Box>
                          </div>
                        );
                      })}
                    </Box>
                  </Scrollbars>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </div>
  );
};

export default SubTabPanel;
