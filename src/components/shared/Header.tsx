import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

import headerLogo from "../../assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
import Headline from "../ui/Headline";

const Header = () => {
  const currentDate = getCurrentDate();

  return (
    <Box>
      <Container sx={{ my: 5 }}>
        <Image
          className="mx-auto"
          src={headerLogo}
          alt="Logo"
          height={400}
          width={400}
        />
        <Typography color="gray" align="center" variant="body2" sx={{ my: 2 }}>
          Journalism Without Fear or Favour
        </Typography>
        <Typography color="gray" align="center" variant="body1">
          {currentDate}
        </Typography>
        <Headline />
      </Container>
    </Box>
  );
};

export default Header;
