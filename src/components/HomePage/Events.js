import { Tabs, Tab, Box, TextField } from "@mui/material";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import { AccessAlarm } from "@mui/icons-material";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import { Tile } from "./Tile";
export const Events = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  const LocationTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      fontSize: "1rem",
      width: "100px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  return (
    <Container className="mb-5">
      <Row className="justify-content-md-center">
        <Col md={11}>
          <div className="location-container">
            <div className="location-popular mb-2">Popular in</div>
            <LocationTextField
              //   label="Location"
              inputProps={{
                style: {
                  fontSize: "30px",
                  fontWeight: "900",
                  letterSpacing: "0.5px",
                  lineHeight: "40px",
                  color: "#3659e3",
                  marginRight: "1rem",
                },
              }} // font size of input text
              defaultValue="Al Qahira"
              id="location-input"
              variant="standard"
              style={{ borderBottom: "1px solid #e2e2e1" }}
            />
          </div>

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
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />
                <AntTab label="Food & Drink" />

                <AntTab label="Food & Drink" />
              </AntTabs>
              <Box sx={{ p: 2 }} />
            </Box>
          </Box>
          <h3>Check out trending categories</h3>
          <Row>
            <Col>
              <div className="tile-group">
                <Tile
                  icon={<AudiotrackOutlinedIcon sx={{ color: "#d1410c" }} />}
                  name="Music"
                />
                <Tile
                  icon={
                    <VideogameAssetOutlinedIcon sx={{ color: "#d1410c" }} />
                  }
                  name="Hobbies"
                />
                <Tile
                  icon={<ColorLensOutlinedIcon sx={{ color: "#d1410c" }} />}
                  name="Performing & Arts"
                />{" "}
                <Tile
                  icon={
                    <BusinessCenterOutlinedIcon sx={{ color: "#d1410c" }} />
                  }
                  name="Business"
                />{" "}
                <Tile
                  icon={<PhotoOutlinedIcon sx={{ color: "#d1410c" }} />}
                  name="Holiday"
                />
                <Tile
                  icon={<WineBarOutlinedIcon sx={{ color: "#d1410c" }} />}
                  name="Food & Drink"
                />
                <Tile
                  icon={
                    <FavoriteBorderOutlinedIcon sx={{ color: "#d1410c" }} />
                  }
                  name="Health"
                />
                <Tile
                  icon={
                    <SportsFootballOutlinedIcon sx={{ color: "#d1410c" }} />
                  }
                  name="Sports"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
