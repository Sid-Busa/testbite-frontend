import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BoldText,
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
import { registerSchema } from "./schema";
import NumberField from "../../components/Form/NumberField";
import API from "../../API";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "../../store/reducer/loader";

const Register = ({ setIsRegister }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(startLoading());
      const payload = {
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };
      const registerUser = await API.post("user/register", payload);
      if (!registerUser?.success) {
        toast.error(registerUser?.message || registerUser?.error);
        return;
      }
      toast.success("User register successfully");
      setIsRegister(false);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(endLoading());
    }
  };

  return (
    <FormContainer>
      <Title> CREATE YOUR ACCOUNT </Title>
      <Line />
      <InfoMessage>
        There are many variations of passages of Lorem Ipsu available, <br />{" "}
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
          <NumberField
            name="phone"
            type="text"
            label={"Phone *"}
            defaultValue=""
            variant="standard"
            control={control}
            rules={{}}
            error={!!errors.phone}
            helperText={errors.phone ? errors.phone?.message?.toString() : ""}
            background="white"
            borderRadius="4px"
            textAlign="left"
            size="small"
            padding="8.5px 0px"
            max={10}
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
        <FormInputContainer>
          <TextInput
            name="confirmPassword"
            type="password"
            label={"re-enter Password *"}
            defaultValue=""
            variant="standard"
            control={control}
            rules={{}}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword
                ? errors.confirmPassword?.message?.toString()
                : ""
            }
            background="white"
            borderRadius="4px"
            textAlign="left"
            size="small"
            max={120}
          />
        </FormInputContainer>
        <SubmitButton type="submit">Register</SubmitButton>

        <InfoText>
          Already have an account?
          <BoldText onClick={() => setIsRegister(false)}> Login now! </BoldText>
        </InfoText>
      </Form>
    </FormContainer>
  );
};

export default Register;
