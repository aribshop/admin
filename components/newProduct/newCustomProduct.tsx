"use client";

import { useContext, useState } from "react";
import { NewCustomProductContext } from "../../contexts/newProduct/newCustomProductContext";
import { TagInputs } from "./tagInputs";
import { TypeInput } from "./typeInput";

export function NewCustomProduct() {
	const { setDescription, publish, setTags, setTitle, setCustomField } =
		useContext(NewCustomProductContext);
	const [inputLength, setInputLength] = useState(1);

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
				<label className="text-gray-300">Description</label>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
				/>
			</div>

			{Array(inputLength)
				.fill(null)
				.map((_, i) => (
					<div key={i} className="pl-2 border-l-4 border-gray-400">
						<div className="flex flex-col space-y-2">
							<label className="text-gray-300">Name</label>
							<input
								onChange={(e) =>
									setCustomField({ name: e.target.value }, i)
								}
								type="text"
								className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label className="text-gray-300">Type</label>
							<TypeInput
								onChange={(val) =>
									setCustomField({ type: val }, i)
								}
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label className="text-gray-300">Is Required</label>
							<input
								onChange={(e) =>
									setCustomField(
										{ isRequired: e.target.value },
										i
									)
								}
								type="checkbox"
								className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label className="text-gray-300">Options</label>
							<input
								onChange={(e) =>
									setCustomField(
										{ options: e.target.value },
										i
									)
								}
								type="text"
								className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
							/>
						</div>
					</div>
				))}

			<div className="w-full text-center">
				<button
					onClick={() => setInputLength((a) => a + 1)}
					className=" px-2 mx-auto text-lg text-gray-300 border border-gray-400 border-dashed rounded-md"
				>
					Add Input
				</button>
			</div>

			<div className="flex flex-col space-y-2">
				<label className="text-gray-300">Tags</label>
				<TagInputs onChange={setTags} />
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
