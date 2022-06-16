export type ColorVariant =
  | "dark1000"
  | "dark950"
  | "dark900"
  | "dark800"
  | "dark500"
  | "dark100"
  | "primary500"
  | "error500"
  | "black"
  | "white";

export const colors: { [color in ColorVariant]: string } = {
  dark1000: "#121212",
  dark950: "#202020",
  dark900: "#2A2A2A",
  dark800: "#414141",
  dark500: "#888888",
  dark100: "#E7E7E7",
  primary500: "#00F2B1",
  error500: "#FA4D56",
  black: "#000000",
  white: "#FFFFFF",
};
