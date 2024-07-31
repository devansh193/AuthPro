import * as z from "Zod";
import { CardWrapper } from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl } from "../ui/form";

export const LoginForm = () => {

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/register"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};
