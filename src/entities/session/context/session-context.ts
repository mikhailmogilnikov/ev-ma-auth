import { createContext } from "react";
import { SessionContextProps } from "../model/session";

export const SessionContext = createContext<SessionContextProps>({
  token: null,
  isAuthenticated: false,
  authenticate: () => void 0,
  logout: () => void 0,
});
