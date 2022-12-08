import Icons from "../../../../components/svgs";

export default function NewProduct() {

	return (
		<div className="fixed inset-0 flex items-center justify-center w-full h-full">
			<div className="absolute w-full h-full bg-black bg-opacity-50"></div>
			<div className="h-1/2 absolute w-1/2 bg-white rounded-md">
				<div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
					<h1 className="text-lg text-gray-300">New Product</h1>
					<button className="hover:bg-gray-700 p-1 rounded-md">
						<Icons.X className="w-6 h-6 text-gray-500" />
					</button>
				</div>

				<div className="flex flex-col px-4 py-2 space-y-4">
					<div className="flex flex-col space-y-2">
						<label className="text-gray-300">Name</label>
						<input
							type="text"
							className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
						/>
					</div>

					<div className="flex flex-col space-y-2">
						<label className="text-gray-300">Description</label>
						<textarea className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
}
