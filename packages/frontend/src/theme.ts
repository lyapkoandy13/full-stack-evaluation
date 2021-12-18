import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    dashboardGrey: Palette["primary"];
  }
  interface PaletteOptions {
    dashboardGrey: PaletteOptions["primary"];
  }
}
declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    lgplus: true;
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#10AC84", contrastText: "#ffffff" },
    secondary: { main: "#E66767", contrastText: "#ffffff" },
    dashboardGrey: { light: "#B0B6B8", main: "#636E72" },
    background: { default: "#F3F3F3" },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, lgplus: 1600, xl: 1920 },
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: 6,
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          scrollbarFaceColor: "#B0B6B8",
          scrollbarTrackColor: "#00000005",
          scrollbarColor: "#B0B6B8 #00000005",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#00000005",
            width: 16,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 12,
            backgroundColor: "#B0B6B8",
            border: "4px solid rgba(0, 0, 0, 0)",
            backgroundClip: "padding-box",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#00000005",
          },
        },
      },
    },
  },
});

export default theme;
