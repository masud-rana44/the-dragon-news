import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import baby from "../../assets/baby.png";
import club from "../../assets/club.png";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const categories = ["All", "Sports", "Politics", "Entertainment", "Technology"];

const Category = () => {
  return (
    <Box>
      <Typography variant="h6" color="gray" sx={{ mb: 2, fontWeight: 600 }}>
        All Category
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
        {categories.map((category) => (
          <Typography key={category} color="gray" sx={{ p: 1 }}>
            {category}
          </Typography>
        ))}
      </Box>
      <Box sx={{ mt: 6, display: "flex", flexDirection: "column", rowGap: 2 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia>
            <Image src={club} alt="News image" height={200} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Typography>
          </CardContent>
          <CardActions sx={{ columnGap: 4 }} color="gray">
            <span>Sports</span>
            <span>
              <IconButton>
                <CalendarMonthIcon />
              </IconButton>{" "}
              Jan 4, 2022
            </span>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia>
            <Image src={baby} alt="News image" height={200} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Typography>
          </CardContent>
          <CardActions sx={{ columnGap: 4 }} color="gray">
            <span>Sports</span>
            <span>
              <IconButton>
                <CalendarMonthIcon />
              </IconButton>{" "}
              Jan 4, 2022
            </span>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia>
            <Image src={baby} alt="News image" height={200} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Typography>
          </CardContent>
          <CardActions sx={{ columnGap: 4 }} color="gray">
            <span>Sports</span>
            <span>
              <IconButton>
                <CalendarMonthIcon />
              </IconButton>{" "}
              Jan 4, 2022
            </span>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Category;
