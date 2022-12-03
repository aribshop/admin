import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../../repository/server";
import Card from "./card";
import Icons from "../../svgs";

interface GroupsProps {
  search: string;
}

const Groups: FunctionComponent<GroupsProps> = (props) => {
  const { data, isLoading } = useQuery(["groups", props.search], getGroups);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((group) => (
        <div
          key={group.id}
          className="border-l-4 bg-white/10 px-4 py-1 border-green-400 rounded-md flex items-center"
        >
          <div className="flex-1">
            <h4 className="text-lg text-white font-medium">{group.name}</h4>
            <p className="text-gray-400 text-sm">{group.users.length} users</p>
          </div>
          <div className="px-2 p-1 rounded-md font-bold text-sm text-green-500 bg-green-300/20 ">
            {group.viewOnly ? (
              <Icons.Eye className="w-4 h-4" />
            ) : (
              <Icons.Tool className="w-4 h-4" />
            )}
          </div>
          <button className="text-gray-500 ml-2">
            <Icons.MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      ))}
    </>
  );
};

export default Groups;
