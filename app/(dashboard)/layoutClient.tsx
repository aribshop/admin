"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "../../components/navigation/nav";
import { UserProvider } from "../../contexts/userContext";
import { IStuff } from "../../repository/types";

const queryClient = new QueryClient();

export default function LayoutClient({
  children,
  stuff,
}: {
  children: React.ReactNode;
  stuff: IStuff;
}) {

  
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider stuff={stuff}>
        <div className="w-full relative min-h-screen bg-gray-800 flex items-start">
          <Nav />

          <div className=" flex-1 overflow-x-hidden">{children}</div>
        </div>
      </UserProvider>
    </QueryClientProvider>
  );
}
