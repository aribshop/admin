"use client";
import {v4 as UUID} from "uuid"
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { addProduct } from "../../repository/server";
import { UserContext } from "../userContext";

export const NewCustomProductContext = createContext({
	// todo refactor this with the NewStandarProductContext!, sense both share the basics METADATA! (title,tags, and probaly the ID generations!)
	setTitle: (val: string) => {},
	setDescription: (val: string) => {},
	setTags: (val: string) => {},

	publish: () => {},

	setCustomField: (val: any, i: number) => {},
});

type Props = {
	children: React.ReactNode;
};

export function NewCustomProductProvider({ children }: Props) {
	const { site: siteId } = useContext(UserContext);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tags, setTags] = useState("");

	const [fields, setFeilds] = useState<{ [key: string]: any }[]>([]);

	function setCustomField(val: any, i: number) {
		if (!fields[i]) {
			fields[i] = {};
		}

		fields[i] = {
			...fields[i],
			...val,
		};

		setFeilds(fields);
	}

	async function publish() {
		await addProduct(siteId, {
			isCustom: true,
			id: UUID(),
			isPaused: false,
			metadata: {
				description,
				name: title,
				tag: tags.split(","),
			},
			dailyLimit: 1000,
			form: {
				lastUpdated: new Date().toISOString(),
				version: 1,
				fields: fields.map((field) => ({
					name: field.name,
					type: field.type,
					required: field.isRequired ?? false,
					options: field.options.split(","),
				})),
			},
		});
	}

	const values = {
		setTitle,
		setDescription,
		setTags,
		publish,
		setCustomField,
	};

	return (
		<NewCustomProductContext.Provider value={values}>
			{children}
		</NewCustomProductContext.Provider>
	);
}
