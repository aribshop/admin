import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../../../../repository/server";
import Card from "./card";

interface GroupsProps {
  search: string;
}

const Groups: FunctionComponent<GroupsProps> = (props) => {
  const { data, isLoading } = useQuery(["groups",props.search], getGroups);

  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((group) => (
        <Card
          name={group.name}
          openOrders={0}
          users={group.users.length}
          key={group.id}
        />
      ))}
    </>
  );
};

export default Groups;
