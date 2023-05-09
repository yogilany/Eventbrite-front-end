import { Tabs, Tab, Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

/**
 * @author Yousef Gilany
 * @description This is the taps that a  user can use to filter events by category. It is used in the HomePage and the SearchPage.
 * @returns {JSX.Element}
 */
export const CategoriesTaps = ({ categorySelector, location }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    categorySelector(event.target.innerHTML);
  };

  const AntTabs = styled(Tabs)({
    // borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#3d64ff",
    },
  });

  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      minWidth: 0,
      [theme.breakpoints.up("sm")]: {
        minWidth: 0,
      },
      //   fontWeight: 500,
      marginRight: theme.spacing(1),
      color: "#6f7287",
      fontFamily: ["Neue Plak Bold"].join(","),
      "&:hover": {
        color: "#000000",
        // opacity: 1,
        borderBottom: "2px solid #000000",
      },
      "&.Mui-selected": {
        color: "#3d64ff",
        // fontWeight: 300,
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
  );



  return (
    <Container className="mb-2">
      <Row className="justify-content-md-center">
        <Col md={12}>
      

          <Box sx={{ width: "100%" }}>
            <Box sx={{ bgcolor: "#fff" }}>
              <AntTabs
                value={value}
                variant="scrollable"
                scrollButtons={false}
                onChange={handleChange}
                aria-label="ant example"
              >
                <AntTab label="All" />
                <AntTab label="For you" />
                <AntTab label="Online" />
                <AntTab label="Today" />
                <AntTab label="St Patrick's Day" />
                <AntTab label="International Women's Day" />
                <AntTab label="Free" />
                <AntTab label="Music" />
                <AntTab label="Business" />
                <AntTab label="Sports" />
                <AntTab label="Design" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
              </AntTabs>
              <Box sx={{ p: 2 }} />
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
