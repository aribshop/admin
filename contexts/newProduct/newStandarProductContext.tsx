"use client";
import {v4 as UUID} from "uuid"

import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { addProduct } from "../../repository/server";
import { UserContext } from "../userContext";

export const NewStandarProductContext = createContext({
	setTitle: (val: string) => {},
	setDescription: (val: string) => {},
	setTags: (val: string) => {},
	setPicture: (val: string) => {},
	setPrice: (val: string) => {},

	publish: () => {},

});

type Props = {
	children: React.ReactNode;
};

export function NewStandarProductProvider({ children }: Props) {

	const { site: siteId } = useContext(UserContext);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tags, setTags] = useState("");

	const [price, setPrice] = useState("");
	const [picture, setPicture] = useState("");


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
		await addProduct(siteId,{
            isCustom: false,
			discount:0,
			id: UUID(),
			isPaused:false,
			metadata:{
				description,
				name: title,
				tag: tags.split(","),
			},
			picture,
			price: parseFloat(price),
			quantity: 100000,
        })
	}

	const values = {
		setTitle,
		setDescription,
		setTags,
		publish,
		setCustomField,
		setPicture,
		setPrice,
	};

	return (
		<NewStandarProductContext.Provider value={values}>
			{children}
		</NewStandarProductContext.Provider>
	);
}
