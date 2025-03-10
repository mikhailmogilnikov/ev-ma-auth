import { useCallback, useEffect, useMemo, useState } from "react";
import { Session, SessionOptions } from "../model/session";
import { SessionContext } from "./session-context";
import { localStorageService } from "@/shared/lib/services/local-storage";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session>({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const localStorageToken = localStorageService.getItem("token");

    if (localStorageToken) {
      setSession({ token: localStorageToken, isAuthenticated: true });

      return;
    }

    const sessionToken = sessionStorage.getItem("token");

    if (sessionToken) {
      setSession({ token: sessionToken, isAuthenticated: true });
    }
  }, []);

  const authenticate = useCallback((token: string, options: SessionOptions) => {
    setSession({ token, isAuthenticated: true });

    if (options.remember) {
      localStorageService.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
  }, []);

  const logout = useCallback(() => {
    setSession({ token: null, isAuthenticated: false });

    localStorageService.removeItem("token");
    sessionStorage.removeItem("token");
  }, []);

  const value = useMemo(
    () => ({ ...session, authenticate, logout }),
    [session, authenticate, logout]
  );

  return <SessionContext value={value}>{children}</SessionContext>;
};
