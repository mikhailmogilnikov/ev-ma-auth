import { API_ENDPOINTS } from "@/shared/api/endpoints";
import { LoginFormValues } from "../model/login-schema";

export const login = async (data: LoginFormValues) => {
  const response = await fetch(API_ENDPOINTS.LOGIN, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.json() as Promise<{ token: string }>;
};
