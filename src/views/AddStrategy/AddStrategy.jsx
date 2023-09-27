import axios from "axios";
import AddStrategyView from "./AddStrategyView";
import {useQuery} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function AddStrategy() {
  // getAllStrategies
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const allStrategiesUrl = "http://localhost:3000/strategy/all";

  const getAllStrategies = async () => {
    const {data} = await axios.get(allStrategiesUrl, config);
    return data;
  };

  const {data: strategies} = useQuery({
    queryKey: ["allStrategies"],
    queryFn: getAllStrategies,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const allStrategies = strategies ? strategies.data : null;
  return <AddStrategyView allStrategies={allStrategies} />;
}
