import { FunctionComponent } from "react";

interface SelledCardProps {
  title: string;
  img: string;
  date: Date;
}

const SelledCard: FunctionComponent<SelledCardProps> = (props) => {
  const time = props.date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const date = new Date(props.date).toLocaleDateString();

  return (
    <div className="flex items-center rounded-md hover:bg-gray-700 space-x-4 px-2 py-1">
      <img src={props.img} className="w-12 rounded-xl" />
      <h2 className="text-white font-bold ">{props.title}</h2>

      <div className="flex-1 text-sm text-center text-gray-300">{date}</div>
      <div className=" text-sm text-gray-300">{time}</div>
    </div>
  );
};

export default SelledCard;
