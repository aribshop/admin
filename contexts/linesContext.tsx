"use client";
import { createContext, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const LinesContext = createContext({
	search: "",
	setSearch: (search: string) => {},
});

export function LinesProvider({ children }: { children: React.ReactNode }) {
	const [search, setSearch] = useState("");

	return (
		<LinesContext.Provider value={{ search, setSearch }}>
			<DndProvider backend={HTML5Backend}>{children}</DndProvider>
		</LinesContext.Provider>
	);
}
