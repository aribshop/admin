"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { createSite } from "../repository/server";
import { ITemplate, IWebsite } from "../repository/types";

export const NewWebsiteContext = createContext({
  siteName: "",
  setSiteName: (v: string) => {},
  description: "",
  setDescription: (v: string) => {},

  domainName: "",
  setDomainName: (v: string) => {},

  isDomainNameAvailable: true,
  isValidationLoading: false,

  template: undefined as ITemplate | undefined,
  setTemplate: (t: ITemplate) => {},

  next: () => {},
});

export function NewWebsiteProvider({
  children,
  pervSite,
}: {
  children: React.ReactNode;
  pervSite?: IWebsite;
}) {
  const router = useRouter();

  const [siteName, setSiteName] = useState(pervSite?.name ?? "");
  const [description, setDescription] = useState(pervSite?.description ?? "");
  const [domainName, setDomainName] = useState(pervSite?.subname ?? "");
  const [isDomainNameAvailable, setIsDomainNameAvailable] = useState(true);
  const [isValidationLoading, setIsValidationLoading] = useState(false);
  const [template, setTemplate] = useState<ITemplate | undefined>(
    pervSite?.template
  );

  useEffect(() => {
    // todo use debouncing to prevent spamming the server & local checking for bad words
  }, [domainName]);

  async function next() {
    await createSite({
      name: siteName,
      description,
      subname: domainName,
      template: {
        name: template!.name,
        description: template!.description,
        type: template!.type,
        previewOG: template!.previewOG,
      },
    });
    router.push("/start/finish");
  }

  const values = {
    siteName,
    setSiteName,
    description,
    setDescription,
    domainName,
    setDomainName,
    isDomainNameAvailable,
    isValidationLoading,
    template,
    setTemplate,
    next,
  };
  return (
    <NewWebsiteContext.Provider value={values}>
      {children}
    </NewWebsiteContext.Provider>
  );
}
