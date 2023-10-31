import AddStockFormView from "./AddStockFormView";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {stockFormFunction} from "../../const/stockFormFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function AddStockForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    postStock(values);
    actions.resetForm();
  }

  const queryClient = useQueryClient();

  const url = "http://localhost:3000/stock";
  const mutation = useMutation({
    mutationKey: ["newStock"],
    mutationFn: async (values) => {
      return await axios.post(url, stockFormFunction(values), config);
    },

    onError: (err) => {
      if (err?.response.status === 500) {
        errorNotification("Internal Server Error");
      }
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries("allStocks");
      return data;
    },
  });

  async function postStock(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const message = data?.message;
        doneNotification(message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  const allStockTypeUrl = "http://localhost:3000/stocktype/all";
  const getAllStockTypes = async () => {
    const {data} = await axios.get(allStockTypeUrl, config);
    return data;
  };

  const {data: stockTypesId} = useQuery({
    queryKey: ["allStockTypes"],
    queryFn: getAllStockTypes,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const allBrokersUrl = "http://localhost:3000/broker/all";
  const getAllBrokers = async () => {
    const {data} = await axios.get(allBrokersUrl, config);
    return data;
  };

  const {data: brokersId} = useQuery({
    queryKey: ["allBrokers"],
    queryFn: getAllBrokers,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const stockTypes = stockTypesId ? stockTypesId.data : null;
  const brokers = brokersId ? brokersId.data : null;

  return (
    <AddStockFormView
      postStock={postStock}
      onSubmit={onSubmit}
      stockTypes={stockTypes}
      brokers={brokers}
    />
  );
}
