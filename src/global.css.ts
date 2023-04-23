import { globalStyle } from "@vanilla-extract/css";
import { color } from "../lib/theme/vars.css";
globalStyle(`:root, body, #app`, {
  margin: 0,
  height: "100%",
});

globalStyle(`:root`, {
  backgroundColor: color["background-base"],
});
