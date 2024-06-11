import { Box } from "@mui/material";
import WorkCard from "../components/Works/WorkCard";
import worksData from "../data/works.json";

export default function Works() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {worksData.map((item, index) => (
        <WorkCard
          key={index}
          image={item.image}
          title={item.title}
          link={item.link}
          description={item.description}
        />
      ))}
    </Box>
  );
}
