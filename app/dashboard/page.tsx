import AchievementCard from "../components/dashobard/achievementCard";
import SelledCard from "../components/dashobard/selledCard";
import StatsCard from "../components/dashobard/statsCard";
import Icons from "../components/svgs";

export default async function Dashbaord() {


  
  return (
    <>
      <div className="p-12">
        <h1 className="text-2xl text-white">Walcome, Nabil</h1>
      </div>

      <div className="mt-1 flex px-12 space-x-12">
        <div className="max-w-sm  w-full bg-gray-700 shadow-sm rounded-xl p-4 ">
          <img src="https://laknabil.me/nabil.png" className="mx-auto w-24" />

          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start space-x-4">
            <StatsCard />
            <StatsCard />
            <StatsCard />
          </div>

          <div className="mt-4 rounded-xl border border-gray-600">
            <div className="p-6 border-b border-gray-600">
              <div className="relative">
                <div className="absolute flex inset-0 z-10 text-white">
                  <span>Hello World</span>
                </div>
                <img
                  src="https://laknabil.me/background.png"
                  className="w-full h-48  bg-cover rounded-xl shadow"
                />
              </div>
            </div>

            {/* list of items, each has image  title date price*/}
            <div className="p-4 space-y-2">
                <SelledCard />
                <SelledCard />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
