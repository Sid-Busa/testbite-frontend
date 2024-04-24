import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
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
import { endLoading, startLoading } from "../../store/reducer/loader";
import API from "../../API";
import { saveJsonToLocalStorage } from "../../utills/storage";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(startLoading());
      const payload = {
        email: data.email,
        password: data.password,
      };
      const loginUser = await API.post("user/login", payload);
      if (!loginUser?.success) {
        toast.error(loginUser?.message || loginUser?.error);
        return;
      }

      saveJsonToLocalStorage("token", loginUser.sessionToken);
      saveJsonToLocalStorage("user", loginUser.user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(endLoading());
    }
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
            type="password"
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
