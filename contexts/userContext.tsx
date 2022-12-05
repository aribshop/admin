import { createContext, useState } from "react";
import { IStuff } from "../repository/types";

export const UserContext = createContext({
  site: "",
  setSearch: (search: string) => {},
});

type Params = {
  children: React.ReactNode;
  stuff: IStuff;
};
export function UserProvider({ children, stuff }: Params) {
  const values = {
    site: stuff.site,
    setSearch: () => {},
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
