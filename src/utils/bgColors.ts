import colors from "tailwindcss/colors";

const omittedColors = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
  "lightBlue",
];

export const bgColors: string[] = Object.keys(colors)
  .filter((v) => !omittedColors.includes(v))
  .map((v) => colors[v][800]);
