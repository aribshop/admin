// todo use Template to create animation

import { cookies } from "next/headers";
import Link from "next/link";
import { VerificationConfirmation } from "../../../../../../components/lines/confirm/verificationConfirmations";
import Icons from "../../../../../../components/svgs";
import { getOrderUnconfirmed } from "../../../../../../repository/server";

type Props = {
	params: {
		orderId: string;
	};
};
export default async function Confirm(props: Props) {
	const token = cookies().get("token")!.value;
	const unconfrimOrder = await getOrderUnconfirmed(
		token,
		props.params.orderId
	);

	const [firstUnconfirmed] = unconfrimOrder.confirmationTypes;

	return (
		<div className="fixed inset-0 flex items-center justify-center w-full h-full">
			<div className="absolute w-full h-full bg-black bg-opacity-50"></div>
			<div className="border-gray-500/80 relative flex flex-col w-full max-w-lg max-h-full my-5 overflow-hidden bg-gray-600 border rounded-md">
				<div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
					<h1 className="text-lg text-gray-300">Confirm Order</h1>
					<Link
						href="/lines"
						className="hover:bg-gray-700 p-1 rounded-md"
					>
						<Icons.X className="w-6 h-6 text-gray-500" />
					</Link>
				</div>

				<div className="p-4">
					<h2 className="text-2xl text-gray-300">
						{unconfrimOrder.title}
					</h2>
					<div className="mt-4">
						{firstUnconfirmed == "verification" && (
							<VerificationConfirmation
								lineId={unconfrimOrder.currentLine}
								orderId={props.params.orderId}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
