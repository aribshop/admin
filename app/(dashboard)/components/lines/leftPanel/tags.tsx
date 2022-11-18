import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../../../../repository/server";
import Card from "./card";

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
        <Card name={tag.name} openOrders={0} users={0} key={tag.id} />
      ))}
    </>
  );
};

export default Tags;
