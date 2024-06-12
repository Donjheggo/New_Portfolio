import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { MainTheme } from "../themes";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <ThemeProvider theme={MainTheme()}>
      <CssBaseline />
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 5,
          py: 2,
          height: "100vh",
          backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5),  
              rgba(0, 0, 0, 0.5)
            ),
            url(/images/bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ width: { sm: "80%", md: "600px" } }}>
          <Header />
          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
