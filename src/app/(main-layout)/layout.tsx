import Navbar from "@/components/shared/Navbar";
import Header from "../../components/shared/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
