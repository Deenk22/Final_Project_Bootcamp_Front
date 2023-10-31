import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import AddOperationView from "./AddOperationFormView";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {operationFormFunction} from "../../const/operationFormFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function AddOperationForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    postOperation(values);
    actions.resetForm();
  }

  const queryClient = useQueryClient();

  const url = "http://localhost:3000/operation";
  const mutation = useMutation({
    mutationKey: ["newOperation"],
    mutationFn: async (values) => {
      return await axios.post(url, operationFormFunction(values), config);
    },

    onError: (err) => {
      if (err.response.status === 500) {
        const {message} = err.response.data;
        errorNotification(message);
      }
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries("allOperations");
      return data;
    },
  });

  async function postOperation(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const {message} = data;
        doneNotification(message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  const allStrategies = `http://localhost:3000/strategy/all`;
  const getAllStrategies = async () => {
    const {data} = await axios.get(allStrategies, config);
    return data;
  };

  const {data: strategiesId} = useQuery({
    queryKey: ["allStrategies"],
    queryFn: getAllStrategies,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps: // Esto lo utilizaremos a la hora de hacer una busqueda (input search) se encargará de actualizar el estado o notificar que ha habido cambios y hará una llamada para actualizar los datos.
    // remove: () => void
  });

  const allStocksUrl = "http://localhost:3000/stock/all";
  const getAllStocks = async () => {
    const {data} = await axios.get(allStocksUrl, config);
    return data;
  };

  const {data: stocksId} = useQuery({
    queryKey: ["allStocks"],
    queryFn: getAllStocks,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // Tengo dudas sobre esto... me ha pillao un dia bastante cansao jeje.
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

  const stocks = stocksId ? stocksId.data : null;
  const strategies = strategiesId ? strategiesId.data : null;
  const brokers = brokersId ? brokersId.data : null;

  return (
    <AddOperationView
      onSubmit={onSubmit}
      strategies={strategies}
      stocks={stocks}
      brokers={brokers}
    />
  );
}
