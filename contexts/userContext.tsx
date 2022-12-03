import { createContext, useState } from "react";

export const UserContext = createContext({
  site: "",
  setSearch: (search: string) => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [site, setSite] = useState("");

  return (
    <UserContext.Provider value={{ site, setSearch: () => {} }}>
      {children}
    </UserContext.Provider>
  );
}
