import {useQuery} from "@tanstack/react-query";
import DashboardView from "./DashboardView";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function Dashboard() {
  // OPERATION
  const allOperationsUrl = "http://localhost:3000/operation/all";

  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getAllOperations = async () => {
    const {data} = await axios.get(allOperationsUrl, config);
    return data;
  };

  const {data: operations} = useQuery({
    queryKey: ["allOperations"],
    queryFn: getAllOperations,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // STRATEGY
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

  // STOCK
  const allStocksUrl = "http://localhost:3000/stock/all";

  const getAllStocks = async () => {
    const {data} = await axios.get(allStocksUrl, config);
    return data;
  };

  const {data: stocks} = useQuery({
    queryKey: ["allStocks"],
    queryFn: getAllStocks,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const allOperations = operations ? operations.data : null;
  const allStrategies = strategies ? strategies.data : null;
  const allStocks = stocks ? stocks.data : null;

  return (
    <>
      <DashboardView
        allOperations={allOperations}
        allStrategies={allStrategies}
        allStocks={allStocks}
        // handleSearchByDate={handleSearchByDate}
        // handleEndDateChange={handleEndDateChange}
        // handleStartDateChange={handleStartDateChange}
        // handleDeleteOperation={handleDeleteOperation}
      />
    </>
  );
}
