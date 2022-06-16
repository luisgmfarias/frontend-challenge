import { styled } from "@stitches/react";
import type { NextPage } from "next";
import { CustomForm } from "../components/CustomForm";
import { Rectangle } from "../components/Rectangle";
import { Text } from "../components/Text";
import { colors } from "../styles/colors";


export const SignupPage: NextPage = () => {
  return (
    <Container>
      <CustomForm />
      <RightContainer>
        <Text variant="bold1100" color="white">
          Teste técnico
        </Text>
        <Rectangle />
        <Text variant="light300" color="white">
          Controle suas contas nacionais e internacionais em um único lugar!
        </Text>
      </RightContainer>
    </Container>
  );
};


const RightContainer = styled("div", {
  marginLeft: "170px",
});

const Container = styled("div", {
  width: "100%",
  backgroundColor: colors.dark1000,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "77px 100px",
  backgroundImage: "url(/globe.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
});
