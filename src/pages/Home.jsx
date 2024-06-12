import { Box, Typography, Button } from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import HackerText from "../utils/HackerText";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(150, 150, 150, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        border: "solid 1px #454545",
      }}
    >
      <Box px={2} py={4}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              background: "url(/images/hero_bg.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src="/images/me.png"
              width="100%"
              style={{ paddingLeft: "25px", paddingRight: "25px" }}
            />
          </Box>
        </Box>

        <Typography
          pt={2}
          textAlign="center"
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
          sx={{ fontFamily: "Witcher" }}
        >
          Christian Jhegg Fermilan
        </Typography>
        <HackerText text={"Front-end Developer"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            fontSize: "20px",
          }}
        >
          <FaHtml5 />
          <IoLogoCss3 />
          <RiJavascriptLine />
          <FaReact />
          <SiRedux />
          <SiMui />
        </Box>
        <Typography
          px={2}
          textAlign="justify"
          variant="body1"
          color="text.secondary"
          pt={5}
        >
          Hello! I'm CJ, a passionate front-end developer that specialize in
          creating engaging, responsive, modern and user-friendly web
          applications. My expertise lies in translating complex designs into
          clean and efficient code, ensuring seamless user experiences across
          all devices.
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button
          fullWidth
          size="small"
          color="primary"
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/donjheggo/"
          startIcon={<CiLinkedin />}
          sx={{
            borderRadius: "0px",
            borderTop: "solid 1px #454545",
            borderRight: "solid 1px #454545",
            borderTopStyle: "dashed",
            borderRightStyle: "dashed",
            paddingY: "10px",
            color: "inherit",
          }}
        >
          Linkedin
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
          component="a"
          target="_blank"
          href="https://github.com/donjheggo"
          startIcon={<FaGithub />}
          sx={{
            borderRadius: "0px",
            borderTop: "solid 1px #454545",
            borderTopStyle: "dashed",
            paddingY: "10px",
            color: "inherit",
          }}
        >
          Github
        </Button>
      </Box>
    </Box>
  );
}
