import AddStrategyFormView from "./AddStrategyFormView";
import {useMutation} from "@tanstack/react-query";
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

  const mutation = useMutation({
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

  return (
    <>
      <AddStrategyFormView postStrategy={postStrategy} onSubmit={onSubmit} />
    </>
  );
}
