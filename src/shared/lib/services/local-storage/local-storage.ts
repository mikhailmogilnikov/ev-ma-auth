import TypedLocalStore from "typed-local-store";

interface Schema {
  token: string;
}

export const localStorageService = new TypedLocalStore<Schema>();
