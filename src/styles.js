import { css } from "styled-components";

export const setColor = {
  primaryMain: "#FF00A6",
  primaryDark: "#E00096",
  primaryLight: "#FF38AC",
  primaryVeryLight: "#ffe6f6",
  background: "#ffffff",
  containerLight: "#f9fafb",
  containerDark: "#ebedf0",
  blackMain: "#3A3D42",
  blackDark: "#181B1F",
  blackLight: "#53565C",
  whiteMain: "#ffffff",
  gray: "#a3a3a3",
};

export const containerGlass = () => {
  return `background-color: rgba(255, 255, 255, 0.6);backdrop-filter: blur(2.5rem);`;
};
export const shadow = () => {
  return `box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
  rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;`;
};
export const shadowDark = () => {
  // return`box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`;
  return `box-shadow: 0 10px 20px rgb(41 41 42 / 7%);`;
};
export const borderRadius = () => {
  return `border-radius: 0.375rem;`;
};

// padding Utils
export const paddingContainer = () => {
  return `padding: 0 1rem;`;
};
export const paddingContainerWithTop = () => {
  return `padding: 6rem 1rem;`;
};
export const paddingTop = () => {
  return `padding-top: 2rem;`;
};
export const paddingBottom = () => {
  return `padding-bottom: 2rem;`;
};

// flex Utils
export const flexBetween = () => {
  return `display: flex; justify-content: space-between; align-items: center;`;
};
export const flexAlign = () => {
  return `display: flex; align-items: center;`;
};
export const flexCenter = () => {
  return `display: flex; justify-content: center; align-items: center;`;
};

// mediaQuery Utils
export const MediumSize = "(min-width:600px)";
export const LargeSize = "(min-width:900px)";
export const xLargeSize = "(min-width:1200px)";
const sizes = {
  small: 400,
  medium: 600,
  large: 900,
  xLarge: 1200,
};
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
