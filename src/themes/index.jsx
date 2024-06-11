import { createTheme } from "@mui/material/styles";

export const MainTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#29323c" : "#fff",
        paper: darkMode ? "#29323c" : "#fff",
      },
      primary: {
        main: darkMode ? "#ccc" : "#29323c",
      },
      text: {
        primary: darkMode ? "#ccc" : "#29323c",
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "inherit",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            color: darkMode ? "#ccc" : "#29323c",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: darkMode ? "#ccc" : "#535e6b",
            fontWeight: '200'
          },
        },
      },
    },
  });
