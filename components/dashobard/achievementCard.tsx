import { FunctionComponent } from "react";

interface AchievementCardProps {
  logo: string;
  title: string;
  description: string;
  progress: number;
}

const AchievementCard: FunctionComponent<AchievementCardProps> = (props) => {
  return (
    <div className="mt-4 rounded-md shadow-md bg-white/10 relative overflow-hidden">
      <div className="flex relative items-center  px-4 py-2 z-20">
        <div className="w-16 aspect-square bg-gray-500 rounded-md p-2">
          <img src={props.logo} className="w-full" />
        </div>
        <div className="ml-4 flex-1">
          <h2 className="font-bold text-white">{props.title}</h2>
          <p className="text-gray-300 text-sm">{props.description}</p>
        </div>

        <div className="text-white font-medium text-sm">{props.progress}%</div>
      </div>

      <div className="absolute inset-0 z-0">
        <div
          className="bg-slate-200/30 h-full"
          style={{ width: props.progress + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default AchievementCard;
