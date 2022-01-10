import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Header from "./Header";

export default function ScrollTop(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 20,
        }}
      >
        <Header />
      </Box>
    </Zoom>
  );
}
