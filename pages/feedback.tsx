import { styled } from "@stitches/react";
import { colors } from "../styles/colors";
import { Text } from "../components/Text";
import { Rectangle } from "../components/Rectangle";
import { Context } from "../contexts/context";
import { useContext} from "react";

export default function SignupPage() {
  const { state } = useContext<any>(Context);

  function getMonth(idx: number) {
    var objDate = new Date();
    objDate.setDate(1);
    objDate.setMonth(idx - 1);

    var locale = "pt-br",
      month = objDate.toLocaleString(locale, { month: "long" });

    return month;
  }

  if (state) {
    return (
      <Container>
        <FeedbackContainer>
          <IconName>
            <Text variant="medium100" color="black" align="center">
              {state.firstName.charAt(0).toUpperCase()}
              {state.lastName.charAt(0).toUpperCase()}
            </Text>
          </IconName>
          <Text variant="bold1100" color="white" align="center">
            Bem Vindo {state.firstName} {state.lastName}
          </Text>
          <Rectangle />
          <Text variant="light300" color="white" align="center">
            Você nasceu no dia {new Date(state.dateOfBirthday).getDate()} de{" "}
            {getMonth(new Date(state.dateOfBirthday).getMonth())} de{" "}
            {new Date(state.dateOfBirthday).getFullYear()}
          </Text>
        </FeedbackContainer>
      </Container>
    );
  }
  return <></>;
}

const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.dark1000,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "url(/globe.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});

const FeedbackContainer = styled("div", {
  width: "820px",
  borderRadius: "8px",
  border: `2px solid ${colors.dark900}`,
  backgroundColor: "rgba(29, 29, 29, 0.5)",
  padding: "76px 160px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const IconName = styled("div", {
  width: "78px",
  height: "78px",
  borderRadius: "50%",
  backgroundColor: colors.primary500,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "40px",
});
