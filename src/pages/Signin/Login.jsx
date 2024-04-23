import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BoldText,
  ForgetPasswordText,
  Form,
  FormContainer,
  FormInputContainer,
  InfoMessage,
  InfoText,
  Line,
  SubmitButton,
  Title,
} from "./component";

import TextInput from "../../components/Form/TextInput";
import { loginSchema } from "./schema";

const Login = ({ setIsRegister }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <FormContainer>
      <Title> LOGIN TO YOUR ACCOUNT </Title>
      <Line />
      <InfoMessage>
        There are many variations of passages of Lorem Ipsu available, <br />
        but the majority have suffered alte.
      </InfoMessage>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormInputContainer>
          <TextInput
            name="email"
            type="text"
            label={"Email *"}
            defaultValue=""
            variant="standard"
            control={control}
            rules={{}}
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message?.toString() : ""}
            background="white"
            borderRadius="4px"
            textAlign="left"
            size="small"
            max={120}
          />
        </FormInputContainer>

        <FormInputContainer>
          <TextInput
            name="password"
            type="text"
            label={"Password *"}
            defaultValue=""
            variant="standard"
            control={control}
            rules={{}}
            error={!!errors.password}
            helperText={
              errors.password ? errors.password?.message?.toString() : ""
            }
            background="white"
            borderRadius="4px"
            textAlign="left"
            size="small"
            max={120}
          />
        </FormInputContainer>
        <ForgetPasswordText>Forgot password?</ForgetPasswordText>
        <SubmitButton type="submit">Login</SubmitButton>

        <InfoText>
          Don’t have an account?
          <BoldText onClick={() => setIsRegister(true)}>
            {" "}
            Register now!{" "}
          </BoldText>
        </InfoText>
      </Form>
    </FormContainer>
  );
};

export default Login;
