import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Form,
  FormContainer,
  CustomSendIcon,
  FormInputContainer,
  Image,
  ImageContainer,
  InfoMessage,
  Line,
  SubmitButton,
  Title,
} from "./component";
import Burger from "../../assets/images/burger.jpeg";
import TextInput from "../../components/Form/TextInput";
import { contactSchema } from "./schema";
import NumberField from "../../components/Form/NumberField";

const Contactus = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <Container>
      <FormContainer>
        <Title> LEAVE US A MESSAGE</Title>
        <Line />
        <InfoMessage>
          There are many variations of passages of Lorem Ipsu available, <br />{" "}
          but the majority have suffered alte.
        </InfoMessage>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInputContainer>
            <TextInput
              name="name"
              type="text"
              label={"Name *"}
              defaultValue=""
              variant="standard"
              control={control}
              rules={{}}
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message?.toString() : ""}
              background="white"
              borderRadius="4px"
              textAlign="left"
              size="small"
              max={120}
            />
          </FormInputContainer>
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
              name="message"
              type="text"
              label={"Message *"}
              defaultValue=""
              variant="standard"
              control={control}
              rules={{}}
              error={!!errors.message}
              helperText={
                errors.message ? errors.message?.message?.toString() : ""
              }
              multiline={true}
              rows={4}
              background="white"
              borderRadius="4px"
              textAlign="left"
              size="small"
              max={120}
            />
          </FormInputContainer>
          <SubmitButton type="submit">
            Submit <CustomSendIcon />
          </SubmitButton>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Image src={Burger} alt="Burger" />
      </ImageContainer>
    </Container>
  );
};

export default Contactus;
