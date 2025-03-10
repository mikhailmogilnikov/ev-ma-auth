import { delay, http, HttpResponse } from "msw";
import { API_ENDPOINTS } from "@/shared/api/endpoints";

export const handlers = [
  http.all("/api/*", async () => {
    await delay();
  }),
  http.post(API_ENDPOINTS.LOGIN, () => {
    return HttpResponse.json({
      token: "1234567890",
    });
  }),
];
