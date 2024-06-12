import { createTheme } from "@mui/material/styles";

export const MainTheme = () =>
  createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
        secondary: "#ccc",
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#ccc",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#ccc"
          },
          body2: {
            fontWeight: 400,
          },
        },
      },
    },
  });
