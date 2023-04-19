import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Link } from "react-router-dom";
/**
 * @author Yousef Gilany
 * @description This is the Categories component that contains the categories tiles. It takes the user to a new page that shows event in that category.
 * @returns {JSX.Element}
 */
const CategoriesCards = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const categoriesIcons = [
    <AudiotrackOutlinedIcon sx={{ color: "#d1410c" }} />,
    <VideogameAssetOutlinedIcon sx={{ color: "#d1410c" }} />,
    <ColorLensOutlinedIcon sx={{ color: "#d1410c" }} />,
    <BusinessCenterOutlinedIcon sx={{ color: "#d1410c" }} />,
    <PhotoOutlinedIcon sx={{ color: "#d1410c" }} />,
    <WineBarOutlinedIcon sx={{ color: "#d1410c" }} />,
    <FavoriteBorderOutlinedIcon sx={{ color: "#d1410c" }} />,
    <SportsFootballOutlinedIcon sx={{ color: "#d1410c" }} />,
  ];

  const fetchCategories = () => {
    // console.log("baseee", process.env.REACT_APP_BASE_API);
    axios
      .get(`${process.env.REACT_APP_BASE_API}/categories/`)
      .then(function (response) {
        console.log(response);
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container className="mb-5" id="categoriesCards">
      <Row className="justify-content-md-center">
        <Col md={12}>
          <h3 className="heading3">Check out trending categories</h3>
          <Row>
            <Col>
              <div className="tile-group">
                {categories.map((category, index) => {
                  return (
                    <Link to={`/events/${category.name}/${location}`}>
                      <Tile
                        icon={categoriesIcons[index]}
                        name={category.name}
                        key={index}
                        id="categoryTile"
                      />
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesCards;
