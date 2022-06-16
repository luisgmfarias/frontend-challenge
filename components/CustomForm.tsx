import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { styled } from "@stitches/react";
import { colors } from "../styles/colors";
import ReactInputMask from "react-input-mask";
import { Text } from "./Text";
import { appClient } from "../api/Clients";
import { useRouter } from "next/router";
import { Context } from "../contexts/context";
import { useContext } from "react";
import moment from "moment";

const basicSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  dateOfBirthday: Yup.date()
    .required("Required")
    .typeError("Date must be in the format MM/DD/YYYY")
    .test("dateOfBirthday", "Please choose a valid date of birth", (value) => {
      return moment().diff(moment(value), "years") >= 10;
    }),
  password: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  bio: Yup.string().required("Required"),
  receiveNotifications: Yup.boolean(),
});

interface defaultValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  dateOfBirthday: Date;
  bio: string;
  receiveNotifications: boolean;
}

export const CustomForm: React.FC<{}> = () => {
  const router = useRouter();
  const { setState } = useContext(Context);

  const initialValues: defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "Brasil",
    dateOfBirthday: "",
    bio: "",
    receiveNotifications: false,
  };

  return (
    <Container>
      <div style={{ marginBottom: "16px" }}>
        <Text align="center" color="white" variant="bold600">
          Cadastre-se
        </Text>
        <Text align="center" color="dark100" variant="light100">
          Para começar, insira os dados abaixo:
        </Text>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={async (values, { setSubmitting }) => {
          let body = { ...values };
          setSubmitting(true);

          const data = await appClient().register(body);

          setSubmitting(false);

          const userData = await appClient().getUser(data.data.id);
          setState({ ...userData.data });
          router.push("/feedback");
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
            <FieldContainer
              id="firstName"
              name="firstName"
              placeholder="Nome"
              error={errors.firstName && touched.firstName}
            />
            <FieldContainer
              id="lastName"
              name="lastName"
              placeholder="Sobrenome"
              error={errors.lastName && touched.lastName}
            />
            <div>
              <FieldContainer
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                error={errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <FormError color="error500" variant="regular75">
                  E-mail inválido
                </FormError>
              )}
            </div>
            <Field
              id="dateOfBirthday"
              name="dateOfBirthday"
              error={errors.dateOfBirthday && touched.dateOfBirthday}
              render={({ field }) => (
                <InputMaskContainer
                  {...field}
                  mask={"99/99/9999"}
                  placeholder="Data de nascimento"
                  maskChar=""
                />
              )}
            />
            {errors.dateOfBirthday && touched.dateOfBirthday && (
              <FormError color="error500" variant="regular75">
                Data de nascimento inválida
              </FormError>
            )}

            <FieldContainer
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              error={errors.password && touched.password}
            />
            <Field
              as="select"
              id="country"
              name="country"
              style={{
                width: "100%",
                marginTop: "16px",
                color: colors.white,
                borderRadius: "8px",
                backgroundColor: colors.dark950,
                padding: "19px 16px",
                border: `1px solid ${colors.dark800}`,
              }}
            >
              <option value="Brasil">Brasil</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Inglaterra">Inglaterra</option>
            </Field>
            <FieldContainer
              id="bio"
              name="bio"
              placeholder="Bio"
              error={errors.bio && touched.bio}
            />
            <div style={{ display: "flex", width:"100%" }}>
              <Button type="submit">Cadastrar</Button>
            </div>
            <Text color="dark100" variant="light100" align="center">
              <Checkbox type="checkbox" name="receiveNotifications" />
              Desejo receber notificações
            </Text>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled("div", {
  width: "706px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(29, 29, 29, 0.5)",
  border: `2px solid ${colors.dark900}`,
  padding: "54px 77px",
  borderRadius: "8px",

  "@media (max-width:1280px)": {
    width: "90%",
  },
});

const FieldContainer = styled(Field, {
  width: "100%",
  marginTop: "16px",
  color: colors.white,
  borderRadius: "8px",
  backgroundColor: colors.dark950,
  padding: "19px 16px",
  border: `1px solid ${colors.dark800}`,

  variants: {
    error: {
      true: {
        borderColor: colors.error500,
      },
    },
  },
});

const Button = styled("button", {
  width: "100%",
  backgroundColor: colors.primary500,
  padding: "19px 0px",
  border: "none",
  cursor: "pointer",
  marginBottom: "44px",
  marginTop: "16px",
});

const Checkbox = styled(Field, {
  borderRadius: "4px",
  backgroundColor: "transparent",
  accentColor: colors.primary500,
  // outline: `2px solid ${colors.dark500}`,
  margin: "auto",
  width: "20px",
  heigth: "20px",
});

const InputMaskContainer = styled(ReactInputMask, {
  width: "100%",
  marginTop: "16px",
  color: colors.white,
  borderRadius: "8px",
  backgroundColor: colors.dark950,
  padding: "19px 16px",
  border: `1px solid ${colors.dark800}`,
  variants: {
    error: {
      true: {
        borderColor: colors.error500,
      },
    },
  },
});

const FormError = styled(Text, {
  marginTop: "8px",
});
