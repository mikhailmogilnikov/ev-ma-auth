import { use } from "react";
import { SessionContext } from "../context/session-context";

export const useSession = () => {
  const context = use(SessionContext);
  return context;
};
