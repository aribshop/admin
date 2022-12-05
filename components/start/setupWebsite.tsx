"use client";

import Link from "next/link";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface SetupWebsiteProps {}

const SiteDomainInput = () => {
  const [domain, setDomain] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // todo add domain validation, blocking not avaliable domain!

  useEffect(() => {
    // calculate the input with based on the value
    const input = inputRef.current;
    if (input) {
      input.style.width = `calc(${domain.length}ch + 2px)`;
    }
  }, [domain]);

  function focusWithin(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    const input = inputRef.current;
    if (input) {
      input.focus();
    }
  }

  
  return (
    <div
      onClick={(e) => focusWithin(e)}
      className="flex font-mono items-center border-b border-gray-500 bg-transparent text-white"
    >
      <span>https://</span>
      <input
        value={domain}
        onChange={(e) => setDomain(e.target.value.replaceAll(" ",""))}
        ref={inputRef}
        id="domain"
        className="w-3 outline-none bg-transparent"
      />
      <span>.arib.shop</span>
    </div>
  );
};

const SetupWebsite: FunctionComponent<SetupWebsiteProps> = () => {
  const [siteName, setSiteName] = useState("");

  return (
    <div className="max-w-xl w-full p-4  border-2 border-gray-600 rounded-md bg-black">
      <h2 className="text-white font-medium">Site Information</h2>
      <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
        <label className="text-gray-300">Site Name *</label>
        <input
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="w-full border-b outline-none  border-gray-500 bg-transparent text-white"
        />
      </div>

      <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
        <label htmlFor="domain" className="text-gray-300">Domain Name *</label>
        <SiteDomainInput />
      </div>

      {/* description */}
      <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
        <label className="text-gray-300">Description</label>
        <textarea className="w-full border-b outline-none  border-gray-500 bg-transparent text-white" />
      </div>

      {/* action button "next!" */}
      <div className="mt-4 flex justify-end">
        <Link
          href="/start/finish"
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Next!
        </Link>
      </div>
    </div>
  );
};

export default SetupWebsite;
