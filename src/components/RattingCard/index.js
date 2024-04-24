import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";

import { ImageContainer, RatingContainer, Title } from "./component";

const Card = ({ ratting, image, title, hanldeToUpdateRatting }) => {
  return (
    <Box>
      <Box>
        <ImageContainer alt={title} src={image} />
      </Box>
      <RatingContainer>
        <Rating
          onChange={(event, newValue) => {
            hanldeToUpdateRatting(newValue);
          }}
          value={ratting}
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
