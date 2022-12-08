"use client";

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import { updateTemplate } from "../repository/server";
import { IWebsite } from "../repository/types";

export const ConfigTemplateContext = createContext({
  template: {} as { [key: string]: any },
  setTemplate: (t: { [key: string]: any }) => {},
  next: () => {},
});

export function ConfigTemplateProvider({
  children,
  site,
}: {
  children: React.ReactNode;
  site: IWebsite;
}) {
  const [template, setTemplate] = useState({});
  const router = useRouter();

  async function next() {
    await updateTemplate(site.id,{
      ...template,
      ...site.template // todo i don't know if this is good, basically we are assigning what the server already sent to us back in this fetch!
    } as any);
    
    
  }

  const values = {
    template,
    setTemplate,
    next,
  };


  return (
    <ConfigTemplateContext.Provider value={values}>
      {children}
    </ConfigTemplateContext.Provider>
  );
}
