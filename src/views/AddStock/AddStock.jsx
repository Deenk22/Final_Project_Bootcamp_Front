import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import AddStockView from "./AddStockView";
import {useQuery} from "@tanstack/react-query";

export default function AddStock() {
  // getAllStrategies
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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

  const allStocks = stocks ? stocks.data : null;
  return <AddStockView allStocks={allStocks} />;
}
