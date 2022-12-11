import { createContext } from "react";
import { IStuff } from "../repository/types";

export const UserContext = createContext({
  site: "",
});

type Params = {
  children: React.ReactNode;
  stuff: IStuff; // todo why we arn't sharing the stuff!
};
export function UserProvider({ children, stuff }: Params) {
  const values = {
    site: stuff.site,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
