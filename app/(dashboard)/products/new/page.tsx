"use client";

import Link from "next/link";
import { FormEvent, useRef } from "react";
import { NewCustomProduct } from "../../../../components/newProduct/newCustomProduct";
import { NewStandarProduct } from "../../../../components/newProduct/newStandarProduct";
import Icons from "../../../../components/svgs";
import { NewCustomProductProvider } from "../../../../contexts/newProduct/newCustomProductContext";
import { NewStandarProductProvider } from "../../../../contexts/newProduct/newStandarProductContext";

type SectionProps = {
	children: React.ReactNode;
	title: string;
};

function Section(props: SectionProps) {
	return (
		<div className="hover:shadow-lg flex flex-col w-1/2 px-4 py-2 space-y-4">
			<div className="bg-gray-600/75 backdrop-blur-md sticky top-0 flex justify-between py-1">
				<h2 className="text-xl font-bold text-gray-200">
					{props.title}
				</h2>
			</div>

			{props.children}
		</div>
	);
}

export default function NewProduct() {
	return (
		<div className="fixed inset-0 flex items-center justify-center w-full h-full">
			<div className="absolute w-full h-full bg-black bg-opacity-50"></div>
			<div className="border-gray-500/80 relative flex flex-col w-full max-w-3xl max-h-full my-5 overflow-hidden bg-gray-600 border rounded-md">
				<div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
					<h1 className="text-lg text-gray-300">New Product</h1>
					<Link
						href="/products"
						className="hover:bg-gray-700 p-1 rounded-md"
					>
						<Icons.X className="w-6 h-6 text-gray-500" />
					</Link>
				</div>

				<div className="justify-evenly divide-dashed flex items-start flex-1 overflow-y-auto divide-x-2 divide-gray-500">
					<Section title="Standar Product">
						<NewStandarProductProvider>
							<NewStandarProduct />
						</NewStandarProductProvider>
					</Section>
					<Section title="Custom Product">
						<NewCustomProductProvider>
							<NewCustomProduct />
						</NewCustomProductProvider>
					</Section>
					I
				</div>
			</div>
		</div>
	);
}
