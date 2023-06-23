import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FCFCFC", // white
    },
    primary: {
      light: "#8894E1", // light indigo
      main: "#5567D5", // indigo
      dark: "#00255C", // navy blue
    },
    secondary: {
      light: "#48BB81", // dark teal
      main: "#34B474", // teal
      dark: "#1F6C4F", // light teal
    },
    common: {
      black: "#222228",
    },
    //use grey.500 for grey
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 26,
    },
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
