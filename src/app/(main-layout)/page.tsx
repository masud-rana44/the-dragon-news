import Category from "@/components/ui/Category";
import News from "@/components/ui/News";
import Sidebar from "@/components/ui/Sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Category />
        </Grid>
        <Grid item xs={6}>
          <News />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
}
