import Feels from "./Icons/Feels";
import Humidity from "./Icons/Humidity";
import Pop from "./Icons/Pop";
import Pressure from "./Icons/Pressure";
import Visibility from "./Icons/Visibility";
import Wind from "./Icons/Wind";

type Props = {
  icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop";
  title: string;
  info: string | JSX.Element;
  description?: string | JSX.Element;
};

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon];

  return (
    <article className="w-[140px] h-[130px] text-zinc-700 bg-opacity-15 border border-zinc-700 rounded-sm p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-xs uppercase font-semibold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 font-thin text-lg justify-center text-center">
        {info}
      </h3>

      <div className="text-xs font-bold">{description}</div>
    </article>
  );
};
export default Tile;
