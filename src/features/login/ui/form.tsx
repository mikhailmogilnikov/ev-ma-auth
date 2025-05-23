import { APP_ROUTES } from "@/shared/config/routes";
import { FormField } from "@/shared/ui/inputs/form-field";
import { InputPassword } from "@/shared/ui/inputs/input-password";

import { Input } from "@/shared/ui/inputs/input/input";
import { Button } from "@/shared/ui/primitives/button";
import { Flex } from "@/shared/ui/primitives/flex";
import { ArrowRight } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import {
  LoginFormFields,
  LoginFormValues,
  loginSchema,
} from "../model/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../api/login";
import { useSession } from "@/entities/session";
import { Checkbox } from "@/shared/ui/inputs/checkbox";

export function LoginForm() {
  const { authenticate } = useSession();

  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    shouldFocusError: true,
    defaultValues: {
      [LoginFormFields.EMAIL]: "",
      [LoginFormFields.PASSWORD]: "",
      [LoginFormFields.REMEMBER]: false,
    },
  });

  const handleSubmit = async (data: LoginFormValues) => {
    try {
      const response = await login(data);

      if (response.token) {
        authenticate(response.token, {
          remember: data[LoginFormFields.REMEMBER],
        });
      } else {
        throw new Error();
      }
    } catch {
      setError(LoginFormFields.PASSWORD, {
        message: "Invalid email or password",
      });
    }
  };

  return (
    <Flex
      as="form"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmitForm(handleSubmit)}
      col
      className="max-w-sm w-full"
      aria-labelledby="login-heading"
      noValidate
    >
      <h1 id="login-heading" className="text-2xl font-bold">
        Sign in
      </h1>

      <FormField
        hideLabel
        error={errors.email?.message}
        label="Email"
        id={LoginFormFields.EMAIL}
      >
        <Input
          autoFocus
          placeholder="Email"
          type="email"
          autoComplete={LoginFormFields.EMAIL}
          id={LoginFormFields.EMAIL}
          aria-invalid={!!errors.email}
          aria-required="true"
          aria-errormessage={errors.email?.message}
          {...register(LoginFormFields.EMAIL)}
        />
      </FormField>

      <FormField
        hideLabel
        error={errors.password?.message}
        label="Password"
        id={LoginFormFields.PASSWORD}
      >
        <InputPassword
          placeholder="Password"
          id={LoginFormFields.PASSWORD}
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          aria-required="true"
          aria-errormessage={errors.password?.message}
          {...register(LoginFormFields.PASSWORD)}
        />
      </FormField>

      <Checkbox
        id={LoginFormFields.REMEMBER}
        label="Remember me"
        {...register(LoginFormFields.REMEMBER)}
      />

      <p className="text-base font-medium">
        <span className="text-foreground/50">Forgot password?</span>{" "}
        <Link
          to={APP_ROUTES.FORGOT_PASSWORD}
          className="text-foreground underline hover:opacity-80 transition-opacity underline-offset-4"
        >
          Reset
        </Link>
      </p>

      <Button
        type="submit"
        color="inverse"
        className="mt-4 gap-2"
        isLoading={isSubmitting}
      >
        Continue
        <ArrowRight weight="bold" className="size-4" />
      </Button>

      <p className="font-medium text-center">
        <span className="text-foreground/50">Don't have an account?</span>{" "}
        <Link
          to={APP_ROUTES.REGISTER}
          className="underline hover:opacity-80 transition-opacity underline-offset-4"
        >
          Sign up
        </Link>
      </p>
    </Flex>
  );
}
