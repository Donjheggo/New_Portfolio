import { Box, Tooltip, Typography } from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import HackerText from "../utils/HackerText";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(150, 150, 150, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
      }}
    >
      <Box px={2} py={4}>
        <Box textAlign="center" sx={{ paddingTop: "50px" }}>
          <img src="/images/me.png" width="200px" />
        </Box>

        <Typography
          textAlign="center"
          gutterBottom
          variant="h5"
          component="div"
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
          <Tooltip title="Test">
            <FaHtml5 />
          </Tooltip>
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
    </Box>
  );
}
