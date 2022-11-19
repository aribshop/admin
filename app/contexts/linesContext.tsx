import { createContext, useState } from "react";

export const LinesContext = createContext({
  search: "",
  setSearch: (search: string) => {},
});

export function LinesProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");

  return (
    <LinesContext.Provider value={{ search, setSearch }}>
      {children}
    </LinesContext.Provider>
  );
}
