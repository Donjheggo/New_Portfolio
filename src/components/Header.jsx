import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { GoHome } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

const Header = () => {
  const pages = [
    {
      name: "Home",
      link: "/",
      icon: <GoHome />,
    },
    {
      name: "Curriculum Vitae",
      link: "/cv",
      icon: <GoProjectRoadmap />,
    },
    {
      name: "Works",
      link: "/works",
      icon: <GrProjects size={25} style={{ padding: 3 }} />,
    }
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "rgba(150, 150, 150, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        border: "solid 1px #454545",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30%",
            }}
          >
            {pages.map((page, index) => (
              <Tooltip key={index} title={page.name}>
                <Link to={page.link} style={{ textDecoration: "none" }}>
                  <IconButton>{page.icon}</IconButton>
                </Link>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
