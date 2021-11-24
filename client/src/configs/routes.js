import React from "react";
import Home from "../components/Home";
import HomeIcon from "@mui/icons-material/Home";
import Menu from "../components/Menu";
import SummarizeIcon from '@mui/icons-material/Summarize';

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    icon: <HomeIcon />,
  },
  {
    path: "/menu",
    name: "Menu",
    element: <Menu />,
    icon: <SummarizeIcon />,
  }
];
