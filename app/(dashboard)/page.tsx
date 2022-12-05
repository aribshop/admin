import { cookies } from "next/headers";
import AchievementCard from "../../components/dashobard/achievementCard";
import SelledCard from "../../components/dashobard/selledCard";
import StatsCard from "../../components/dashobard/statsCard";
import { getStuff } from "../../repository/server";

export default async function Dashbaord() {
  const token = cookies().get("token")!.value;

  const stuff = await getStuff(token);

  const data = {
    name: stuff.user.name,
    siteLogo: "https://laknabil.me/nabil.png",
    siteName: stuff.site, // todo get site name not the site ID

    tip: {
      title: "Tip",
      description: "You can use the search bar to find a specific product",
      image: "https://laknabil.me/background.png",
    },

    stats: [
      {
        icon: "Package",
        title: "Products",
        value: "100",
      },
      {
        icon: "Columns",
        title: "Lines",
        value: "10",
      },
      {
        icon: "User",
        title: "Users",
        value: "1000",
      },
    ],
    achievements: [
      {
        logo: "https://laknabil.me/nabil.png",
        title: "First Product",
        description: "You have added your first product",
        progress: 100,
      },
      {
        logo: "https://laknabil.me/nabil.png",
        title: "First Line",
        description: "You have added your first line",
        progress: 100,
      },
      {
        logo: "https://laknabil.me/nabil.png",
        title: "First 10 clients",
        description: "You have added your first 5 clients",
        progress: 50,
      },
    ],

    finishedOrders: [
      {
        id: "1",
        title: "Order 1",
        date: new Date(),
        image: "https://laknabil.me/nabil.png",
      },
      {
        id: "2",
        title: "Order 2",
        date: new Date(),
        image: "https://laknabil.me/nabil.png",
      },
    ],
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-12">
        <h1 className="text-2xl text-white">Walcome, {data.name}</h1>
      </div>

      <div className="mt-1 flex px-12 space-x-12 flex-1 overflow-hidden">
        <div className="max-w-sm  w-full bg-gray-700 shadow-sm rounded-xl p-4 ">
          <img src={data.siteLogo} className="mx-auto  w-24" />
          <h2 className="text-2xl text-white font-bold text-center mt-4">
            {data.siteName}
          </h2>

          {data.achievements.map((achievement) => (
            <AchievementCard
              logo={achievement.logo}
              title={achievement.title}
              description={achievement.description}
              progress={achievement.progress}
            />
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex justify-between items-start space-x-4">
            {data.stats.map((stat) => (
              <StatsCard
                icon={stat.icon as any}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-gray-600">
            <div className="p-6 border-b border-gray-600">
              <div className="relative">
                <div className="absolute flex inset-0 z-10 text-white">
                  <span>{data.tip.title}</span>
                </div>
                <img
                  src={data.tip.image}
                  alt={`today tip: ${data.tip.title} - ${data.tip.description}`}
                  className="w-full h-48  bg-cover rounded-xl shadow"
                />
              </div>
            </div>

            {/* list of items, each has image  title date price*/}
            <div className="p-4 space-y-2">
              {data.finishedOrders.map((order) => (
                <SelledCard
                  key={order.id}
                  title={order.title}
                  date={order.date}
                  img={order.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
