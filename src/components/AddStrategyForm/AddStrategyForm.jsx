import AddStrategyFormView from "./AddStrategyFormView";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {strategyFormFunction} from "../../const/strategyFormFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function AddStrategyForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    postStrategy(values);
    actions.resetForm();
  }

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["newStrategy"],
    mutationFn: async (values) => {
      return await axios.post(
        `http://localhost:3000/strategy`,
        strategyFormFunction(values),
        config
      );
    },

    onError: (err) => {
      if (err?.response.status === 500) {
        errorNotification("Internal Server Error");
      }
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries("allStrategies");
      return data;
    },
  });

  async function postStrategy(values) {
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

  const brokers = brokersId ? brokersId.data : null;

  return (
    <>
      <AddStrategyFormView
        postStrategy={postStrategy}
        onSubmit={onSubmit}
        brokers={brokers}
      />
    </>
  );
}
