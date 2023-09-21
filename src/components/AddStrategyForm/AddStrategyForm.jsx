import {useMutation} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import AddStrategyFormView from "./AddStrategyFormView";
import axios from "axios";

export default function AddStrategyForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const mutation = useMutation({
    mutationFn: async (values) => {
      const {...strategy} = values;
      return await axios.post(
        `http://localhost:3000/strategy`,
        {
          name: strategy.name,
          description: strategy.description ? strategy.description : null,
          budget: strategy.budget ? strategy.budget : null,
        },
        config
      );
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      return data;
    },
  });

  async function postStrategy(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        console.log(data);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <AddStrategyFormView postStrategy={postStrategy} />
    </>
  );
}
