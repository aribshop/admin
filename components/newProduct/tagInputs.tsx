import React, { useEffect, useRef, useState } from "react";

const seperators = [",", " ", "."];

type Props = {
	onChange: (val: string) => void;
};
export function TagInputs(props: Props) {
	const [input, setInput] = useState("");

	const [tags, setTags] = useState<string[]>([]);

	useEffect(() => {
		props.onChange(tags.join(","));
	}, [tags]);

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (seperators.includes(input.at(-1) ?? "")) {
			add();
		}
		// calculate the input with based on the value
		const inputElm = inputRef.current;
		if (inputElm) {
			inputElm.style.width = `calc(${input.length}ch + 2px)`;
		}
	}, [input]);

	function add() {
		let tempInput = input;
		if (!tempInput.trim().length) return;

		if (seperators.includes(input.at(-1) ?? "")) {
			tempInput = input.slice(0, input.length - 1);
		}
		setTags((a) => [...a, tempInput]);

		setInput("");
	}

	function update() {
		if (!tags.length) return;
		const last = tags.at(-1);
		setInput(last!);
		setTags(tags.slice(0, tags.length - 1));
	}

	function onKeyPressed(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == "Backspace") {
			update();
		} else if (e.key == "Enter") {
			add();
		}
	}

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
			className="flex flex-wrap items-center px-4 py-2 space-x-1 text-gray-300 bg-gray-700 rounded-md cursor-pointer"
		>
			<input
				ref={inputRef}
				value={input}
				onKeyUp={onKeyPressed}
				onChange={(e) => setInput(e.target.value)}
				className="w-3 bg-transparent outline-none"
			/>
			{tags.map((e, i) => (
				<div
					className=" px-2 text-sm text-gray-300 border-gray-500 border-dashed rounded-full"
					key={`${e}${i}`}
				>
					{e}
				</div>
			))}
		</div>
	);
}
