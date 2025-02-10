"use client"
import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#49A569",
      dark: "#243831",
      light: "#D8E9E4",
      "300": "#2B5F44",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Inter",
  },
  cssVariables: true,
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: "#243831",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #DADADA",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderWidth: 2,
          textTransform: "none",
          boxShadow: "none !important",
        },
        text: {
          "&:hover": {
            background: "#D8E9E4 !important",
            color: "#000",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiListItemIcon-root": {
            minWidth: 36,
          },
        },
      },
    },
  },
})

export default theme
