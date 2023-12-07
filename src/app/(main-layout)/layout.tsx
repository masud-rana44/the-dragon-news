import Navbar from "@/components/shared/Navbar";
import Header from "../../components/shared/Header";
import Container from "@mui/material/Container";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container sx={{ mb: 10 }}>{children}</Container>
    </div>
  );
};

export default layout;
