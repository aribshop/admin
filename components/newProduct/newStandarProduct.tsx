"use client";

import { useContext } from "react";
import { NewStandarProductContext } from "../../contexts/newProduct/newStandarProductContext";
import Icons from "../svgs";
import { TagInputs } from "./tagInputs";

export function NewStandarProduct() {
	const { publish, setDescription, setPicture, setPrice, setTags, setTitle } =
		useContext(NewStandarProductContext);
	return (
		<div className="space-y-2">
			<div className="flex flex-col space-y-2">
				<label className="text-gray-300">Title</label>
				<input
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
				/>
			</div>

			<div className="flex flex-col space-y-2">
				<label className="text-gray-300">Price</label>
				<input
					onChange={(e) => setPrice(e.target.value)}
					type="text"
					className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
				/>
			</div>

			<div className="flex flex-col space-y-2">
				<label className="text-gray-300">Description</label>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
				/>
			</div>

			<div className="hover:bg-white/5 focus-within:bg-white/5 p-2 mt-4 -mx-2 rounded-md">
				<label className="text-gray-300">Profile</label>
				<div className="w-full mt-2 text-white bg-gray-700">
					<div className="relative flex items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
						<input
							onChange={(e) =>
								setPicture("https://laknabil.me/nabildroid.png")
							}
							type="file"
							accept="image/*"
							className="absolute inset-0 opacity-0 cursor-pointer"
						/>
						<div className="flex items-center justify-center w-20 h-20 border-2 border-gray-700 rounded-full">
							<Icons.Image className="w-6 h-6 text-gray-400" />
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col space-y-2">
				<label className="text-gray-300">Tags</label>
				<TagInputs onChange={(val) => setTags(val)} />
			</div>

			<div className="text-center">
				<button
					onClick={publish}
					className=" px-8 py-1 mx-auto text-sm font-bold text-white bg-green-400 rounded-md"
				>
					Publish
				</button>
			</div>
		</div>
	);
}
