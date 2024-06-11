import React, { useRef } from "react";
import { Typography } from "@mui/material";

const HackerText = ({ text }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const intervalRef = useRef(null);

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((_, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <Typography
      textAlign="center"
      gutterBottom
      variant="body1"
      component="div"
      onMouseOver={handleMouseOver}
      data-value={text}
    >
      {text}
    </Typography>
  );
};

export default HackerText;
