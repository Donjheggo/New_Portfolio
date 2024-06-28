import { Box, Grid } from "@mui/material";
import WorkCard from "../components/Works/WorkCard";
import worksData from "../data/works.json";

export default function Works() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
      <Grid container spacing={1}>
        {worksData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <WorkCard
              key={index}
              image={item.image}
              title={item.title}
              link={item.link}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
