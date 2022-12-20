"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import Icons from "../../../../components/svgs";
import { UserContext } from "../../../../contexts/userContext";
import { createLine } from "../../../../repository/server";

export default function NewLine() {
  const [name, setName] = useState("");
  const [maxOrder, setMaxOrder] = useState(0);
  const [expire, setExpire] = useState(0);
  const [confirmation, setConfirmation] = useState("Yes/No");
  const [prevLine, setPrevLine] = useState<string>();

  const { site: SiteId } = useContext(UserContext);

  async function publish() {
    await createLine({
      name,
      confirmations: [confirmation],
      expiresTime: expire,
      isPublic: false,
      maxOrders: maxOrder,
      next: prevLine,
      site: SiteId,
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full">
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="border-gray-500/80 relative flex flex-col w-full max-w-md max-h-full my-5 overflow-hidden bg-gray-600 border rounded-md">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
          <h1 className="text-lg text-gray-300">New Line</h1>
          <Link href="/lines" className="hover:bg-gray-700 p-1 rounded-md">
            <Icons.X className="w-6 h-6 text-gray-500" />
          </Link>
        </div>

        <div className="justify-evenly divide-dashed flex items-start flex-1 overflow-y-auto divide-x-2 divide-gray-500">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Max Orders</label>
              <input
                type="number"
                onChange={(e) => setMaxOrder(parseInt(e.target.value))}
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">
                Expire Time<sub>min</sub>
              </label>
              <input
                type="number"
                onChange={(e) => setExpire(parseInt(e.target.value))}
                prefix="min"
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Confirmations</label>
              <select
                onChange={(e) => setConfirmation(e.target.value)}
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              >
                <option value="Yes/Now">Yes/Now</option>
                <option value="Client Code/QR">Client Code/QR</option>
                <option value="QR code">QR code</option>
                <option value="PDF">PDF</option>
                <option value="Image">Image</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Previous Line</label>
              <select
                onChange={(e) => setPrevLine(e.target.value)}
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              >
                <option value="none">None</option>
                <option value="invitations">Invitations</option>
                <option value="productions">Productions</option>
                <option value="delivery">Delivery</option>
              </select>
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
        </div>
      </div>
    </div>
  );
}
