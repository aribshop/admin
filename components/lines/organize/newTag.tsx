import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import { createtag } from "../../../repository/server";

export default function NewTag() {
  const router = useRouter();

  const [tagName, setTagName] = useState("");
  const [description, setDescription] = useState("");

  const { site } = useContext(UserContext);
  async function create() {
    await createtag({
      name: tagName,
      description,
      site,
    });

    router.replace("/lines");
  }
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Tag Name</label>
        <input
          onChange={(e) => setTagName(e.target.value)}
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

      <div>
        <p className="text-gray-400 text-sm my-4 leading-tight">
          a tag divide the chain-product vertically, each division represent an
          unique entity, for exemple, each entity represent a giolocation
          (stores ..)
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={create}
          className=" px-8 py-1 mx-auto text-sm font-bold text-white bg-green-400 rounded-md"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
