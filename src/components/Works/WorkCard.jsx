import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";

export default function MultiActionAreaCard({
  image,
  title,
  link,
  description,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(150, 150, 150, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ paddingX: "30px", paddingBottom: "20px" }}>
        <Box textAlign="center" sx={{ paddingY: "10px",  }}>
          <img
            src={image}
            width="50%"
            style={{ borderRadius: "5px", marginTop: "10px" }}
          />
        </Box>
        <Box>
          <Typography gutterBottom>{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Box>

      <Button
        fullWidth
        size="small"
        color="primary"
        component="a"
        href={link}
        target="_blank"
        sx={{
          borderTop: "solid 1px #454545",
          borderTopStyle: "dashed",
          paddingY: "10px",
        }}
      >
        Open Link
      </Button>
    </Box>
  );
}
