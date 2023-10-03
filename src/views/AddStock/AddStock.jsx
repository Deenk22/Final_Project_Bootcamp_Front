import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import AddStockView from "./AddStockView";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function AddStock() {
  // getAllStrategies
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getAllStocks = async () => {
    const {data} = await axios.get("http://localhost:3000/stock/all", config);
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

  const handleDeleteStock = async (id) => {
    const res = await axios.delete(`http://localhost:3000/stock/${id}`, config);
    return res.data;
  };

  const queryClient = useQueryClient();
  const stockDeleteMutation = useMutation({
    mutationKey: ["deleteStock"],
    mutationFn: handleDeleteStock,

    onError: (err) => {
      console.log(err);
    },

    onSettled: (data, error) => {
      if (error) {
        const {message} = error.response.data;
        errorNotification(message);
      } else {
        const {message} = data;
        doneNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allStocks");
    },
  });

  const allStocks = stocks ? stocks.data : null;

  return (
    <AddStockView
      allStocks={allStocks}
      stockDeleteMutation={stockDeleteMutation}
    />
  );
}
