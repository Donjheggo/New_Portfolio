import { Button, Typography, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function CV() {
  return (
    <Box pb={1}>
      <Box
        pt={2}
        sx={{
          paddingX: "30px",
          backgroundColor: "rgba(150, 150, 150, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "medium" }}>Objectives</Typography>
        <Box sx={{ fontWeight: "light" }}>
          <Typography textAlign="justify" pt={2}>
            Seeking a challenging career with a progressive organization that
            provides an opportunity to capitalize on my skills & abilities in
            the field of web development.
          </Typography>
        </Box>
        <Typography
          sx={{
            borderTop: "solid 1px #494949",
            borderTopStyle: "dashed",
          }}
          mt={4}
          pt={2}
        >
          Education
        </Typography>
        <Typography pt={2}>
          Bachelor of Science in Information Technology
          <br />
          Surigao del Norte State University
          <br />
          2019 - 2023
          <br />
        </Typography>
        <Typography
          sx={{
            borderTop: "solid 1px #494949",
            borderTopStyle: "dashed",
          }}
          mt={4}
          pt={2}
        >
          Experience
        </Typography>
        <Typography pt={2}>Remote Intern Front-end Developer</Typography>
        <Typography
          target="_blank"
          component="a"
          href="https://www.groupxs.com/"
        >
          groupXS Solutions
        </Typography>
        <br />
        <Typography target="_blank" component="a" href="/files/Certificate.pdf">
          Internship Certificate
        </Typography>
        <Typography
          sx={{
            borderTop: "solid 1px #494949",
            borderTopStyle: "dashed",
          }}
          mt={4}
          pt={2}
        >
          Skills
        </Typography>
        <ul style={{ paddingBottom: "20px" }}>
          <li>
            <Typography variant="subtitle2">HTML</Typography>
          </li>
          <li>
            <Typography variant="subtitle2">CSS</Typography>
          </li>
          <li>
            <Typography variant="subtitle2">Javascript</Typography>
          </li>
          <li>
            <Typography variant="subtitle2">React JS</Typography>
          </li>
          <li>
            <Typography variant="subtitle2">Redux</Typography>
          </li>
          <li>
            <Typography variant="subtitle2">Material UI</Typography>
          </li>
        </ul>
      </Box>
      <Box
        textAlign="center"
        sx={{
          backgroundColor: "rgba(150, 150, 150, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
        }}
      >
        <Button
          component="a"
          href="/curriculum_vitae"
          target="_blank"
          startIcon={<DownloadIcon />}
          fullWidth
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
