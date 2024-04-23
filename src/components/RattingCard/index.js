import { Box } from "@mui/material";
import { useState } from "react";
import Rating from "@mui/material/Rating";

import { ImageContainer, RatingContainer, Title } from "./component";

const Card = ({ ratting, image, title }) => {
  const [rating, setRating] = useState(ratting);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Box>
      <Box>
        <ImageContainer alt={title} src={image} />
      </Box>
      <RatingContainer>
        <Rating
          onChange={(event, newValue) => {
            handleRating(newValue);
          }}
          value={rating}
          precision={0.5}
          size="large"
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#E50000", // Customize the color of filled stars
            },
            "& .MuiRating-iconEmpty": {
              color: "#E50000", // Customize the color of empty stars
            },
          }}
        />
        <Title> {title} </Title>
      </RatingContainer>
    </Box>
  );
};

export default Card;
