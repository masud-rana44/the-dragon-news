import { Box, Button } from "@mui/material";
import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <Box
      sx={{ display: "flex", mt: 2, columnGap: 3, p: 2, bgcolor: "lightgray" }}
    >
      <Button
        variant="contained"
        color="error"
        className="bg-red-500 hover:bg-red-600"
        sx={{ px: 4, py: 1 }}
      >
        Latest
      </Button>
      <Marquee>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </Box>
  );
};

export default Headline;
