import { z } from "zod";

export enum LoginFormFields {
  EMAIL = "email",
  PASSWORD = "password",
  REMEMBER = "remember",
}

export const loginSchema = z.object({
  [LoginFormFields.EMAIL]: z.string().email("Enter a valid email"),
  [LoginFormFields.PASSWORD]: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
  [LoginFormFields.REMEMBER]: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
