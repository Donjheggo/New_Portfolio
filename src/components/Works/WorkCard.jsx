import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { CiLink } from "react-icons/ci";

export default function MultiActionAreaCard({
  image,
  title,
  link,
  description,
}) {

  const handleImageClick = (e) => {
    const elem = e.target;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(150, 150, 150, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        border: "solid 1px #454545",
      }}
    >
      <Box sx={{ paddingX: "30px", paddingBottom: "20px" }}>
        <Box textAlign="center" sx={{ paddingY: "10px" }}>
          <img 
            onClick={handleImageClick}
            src={image}
            width="50%"
            style={{ borderRadius: "5px", marginTop: "10px", cursor: "pointer" }}
          />
        </Box>
        <Box>
          <Typography color="text.primary" variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography textAlign="justify" color="text.secondary" variant="body2">
            {description}
          </Typography>
        </Box>
      </Box>

      <Button
        fullWidth
        size="small"
        color="primary"
        component="a"
        href={link}
        target="_blank"
        startIcon={<CiLink size={25}/>}
        sx={{
          borderTop: "solid 1px #454545",
          borderTopStyle: "dashed",
          paddingY: "10px",
          color: 'inherit',
        }}
      >
        Open Link
      </Button>
    </Box>
  );
}
