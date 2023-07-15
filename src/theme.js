import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "black",
          backgroundColor: "#fff",
          backgroundImage: `url(/Illustration.png)`,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#4699ff",
    },
    secondary: {
      main: "#183b56",
    },
    error: {
      main: red.A400,
    },
    disabled: {
      main: "#979797",
      dark: "#9A9696",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
