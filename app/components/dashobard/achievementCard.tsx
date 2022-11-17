import { FunctionComponent } from "react";

interface AchievementCardProps {}

const AchievementCard: FunctionComponent<AchievementCardProps> = () => {
  return (
    <div className="mt-4 rounded-md shadow-md bg-white/10 relative overflow-hidden">
      <div className="flex relative items-center  px-4 py-2 z-20">
        <div className="w-16 aspect-square bg-gray-500 rounded-md p-2">
          <img src="https://laknabil.me/nabil.png" className="w-full" />
        </div>
        <div className="ml-4 flex-1">
          <h2 className="font-bold text-white">A price that we pay</h2>
          <p className="text-gray-300 text-sm">150 points</p>
        </div>

        <div className="text-white font-medium text-sm">50%</div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="w-1/2 bg-slate-200/30 h-full"></div>
      </div>
    </div>
  );
};

export default AchievementCard;
