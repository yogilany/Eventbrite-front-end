import React from "react";
import { Tile } from "./Tile";
import { Container, Row, Col } from "react-bootstrap";
import { AccessAlarm } from "@mui/icons-material";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
/**
 * @author Yousef Gilany
 * @description This is the Categories component that contains the categories tiles. It takes the user to a new page that shows event in that category.
 * @returns {JSX.Element}
 */
const CategoriesCards = () => {
  return (
    <Container className="mb-5">
      <Row className="justify-content-md-center">
        <Col md={12}>
          <h3 className="heading3">Check out trending categories</h3>
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

export default CategoriesCards;
