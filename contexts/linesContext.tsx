"use client";
import { createContext, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useQueryClient } from "@tanstack/react-query";

export const LinesContext = createContext({
  search: "",
  setSearch: (search: string) => {},
  subscribeToLine: (lineId: string) => {},
  invalidateLine: (lineId: string) => {},
});

export function LinesProvider({ children }: { children: React.ReactNode }) {
  const useQuery = useQueryClient();

  const [search, setSearch] = useState("");
  const [lineIds, setLineIds] = useState(new Set<string>());

  // this a helper function for unvalidating Lines
  function subscribeToLine(lineId: string) {
    setLineIds(lineIds.add(lineId));
  }

  // todo use better names, and refactor to be a hook
  function invalidateLine(lineId: string) {
    if (lineIds.has(lineId)) {
      useQuery.invalidateQueries({ queryKey: ["orders", lineId] });
    }
  }

  const values = {
    search,
    setSearch,
    invalidateLine,
    subscribeToLine,
  };
  return (
    <LinesContext.Provider value={values}>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </LinesContext.Provider>
  );
}
