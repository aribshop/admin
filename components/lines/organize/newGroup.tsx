import { useRouter } from "next/navigation";

import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import { createGroup } from "../../../repository/server";

export default function NewGroup() {
  const router = useRouter();
  const { site } = useContext(UserContext);

  const [groupName, setGroupName] = useState("");
  const [viewOnly, setViewOnly] = useState(false);

  async function create() {
    await createGroup({
      site,
      name: groupName,
      viewOnly,
    });

    router.replace("/lines");
  }

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Group Name</label>
        <input
          onChange={(e) => setGroupName(e.target.value)}
          type="text"
          className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">View Only</label>
        <input
          onChange={(e) => setViewOnly(e.target.checked)}
          type="checkbox"
          className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
        />
      </div>
      <div>
        <p className="text-gray-400 text-sm my-4 leading-tight">
          a group represent a collection of workers (stuff) that have the same
          tasks, for example they belong to the same line.
          <br /> view only is an option to let the group members see the order
          progress without the ability to modify it
        </p>
      </div>
      <div className="text-center">
        <button onClick={create} className=" px-8 py-1 mx-auto text-sm font-bold text-white bg-green-400 rounded-md">
            create!
        </button>
      </div>
    </div>
  );
}
