import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../../repository/server";
import Card from "./card";
import Icons from "../../svgs";

interface TagsProps {
  search: string;
}

const Tags: FunctionComponent<TagsProps> = (props) => {
  const { data, isLoading } = useQuery(["tags", props.search], getTags);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((tag) => (
        <div
          key={tag.id}
          className="border-l-4  bg-white/10 px-4 py-1 border-gray-300 rounded-md flex items-center"
        >
          <div className="flex-1">
            <h4 className="text-lg text-white font-medium">{tag.name}</h4>
            <p className="text-gray-400 text-sm">
              {tag.description.slice(0, 50)}
            </p>
          </div>
          <button className="text-gray-500 ml-2">
            <Icons.MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      ))}
    </>
  );
};

export default Tags;
