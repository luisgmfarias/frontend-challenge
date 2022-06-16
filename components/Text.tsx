import { styled } from "@stitches/react";
import { colors } from "../styles/colors";

export const Text = styled("div", {
  variants: {
    color: {
      dark500: {
        color: colors.dark500,
      },
      dark100: {
        color: colors.dark100,
      },
      white: {
        color: colors.white,
      },
      black: {
        color: colors.black,
      },
      error500: {
        color: colors.error500,
      },
    },
    variant: {
      bold1100: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: "45px",
        lineHeight: "58.5px",
      },
      bold600: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: "25px",
        lineHeight: "32.5px",
      },
      light300: {
        fontFamily: "Poppins",
        fontWeight: 300,
        fontSize: "18px",
        lineHeight: "23.4px",
      },
      light100: {
        fontFamily: "Poppins",
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: "18.2px",
      },
      regular100: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "18.2px",
      },
      regular75: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "15.6px",
      },
      medium100: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "18.2px",
      },
      medium75: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "15.6px",
      },
    },
    align: {
      center: {
        textAlign: "center",
      },
    },
  },
});
