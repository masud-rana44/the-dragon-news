import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import baby from "../../assets/baby.png";
import news from "../../assets/news.png";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { red } from "@mui/material/colors";

const News = () => {
  return (
    <Box>
      <Typography variant="h6" color="gray" sx={{ mb: 2, fontWeight: 600 }}>
        Dragon News Home
      </Typography>

      <Box sx={{ mt: 6, display: "flex", flexDirection: "column", rowGap: 2 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <Typography variant="h6" color="text.secondary">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </Typography>
          <CardMedia>
            <Image src={news} alt="News image" height={400} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              Read More
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {/* <FavoriteIcon /> */}
            </IconButton>
            <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default News;
