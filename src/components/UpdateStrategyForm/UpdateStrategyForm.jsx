import {useParams} from "react-router-dom";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useMutation} from "@tanstack/react-query";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";
import axios from "axios";
import {updateStrategyFunction} from "../../const/updateStrategyFunction";
import UpdateStrategyFormView from "./UpdateStrategyFormView";

export default function UpdateStrategyForm() {
  const {id} = useParams();
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

  const mutation = useMutation({
    mutationKey: ["updateStrategy"],
    mutationFn: async (values) => {
      return await axios.patch(url, updateStrategyFunction(values), config);
    },

    onError: (err) => {
      console.log(err.response.status);
      if (err.response.status === 404) {
        const {message} = err.response.data;
        errorNotification(message);
      }
    },

    onSuccess: (data) => {
      return data;
    },
  });

  async function updateStrategy(values) {
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

  return (
    <>
      <UpdateStrategyFormView onSubmit={onSubmit} />
    </>
  );
}
