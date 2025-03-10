export interface Session {
  token: string | null;
  isAuthenticated: boolean;
}

export interface SessionOptions {
  remember: boolean;
}

export interface SessionContextProps extends Session {
  authenticate: (token: string, options: SessionOptions) => void;
  logout: () => void;
}
