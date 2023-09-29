import UpdateStrategyFormView from "./UpdateStrategyFormView";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {updateStrategyFunction} from "../../const/updateStrategyFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function UpdateStrategyForm({strategy, setOpen}) {
  const {id} = strategy;
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    updateStrategy(values);
    actions.resetForm();
  }

  const url = `http://localhost:3000/strategy/${id}`;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["updateStrategy"],
    mutationFn: async (values) => {
      return await axios.patch(url, updateStrategyFunction(values), config);
    },

    onError: (err) => {
      if (err.response.status === 404) {
        const {message} = err.response.data;
        errorNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allStrategies");
    },
  });

  async function updateStrategy(id, values) {
    try {
      const {data, status} = await mutation.mutateAsync(id, values);
      if (status === 200) {
        const {message} = data;
        doneNotification(message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <UpdateStrategyFormView onSubmit={onSubmit} setOpen={setOpen} />
    </>
  );
}
