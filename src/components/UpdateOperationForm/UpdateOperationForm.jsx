import {useMutation} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import UpdateOperationFormView from "./UpdateOperationFormView";
import axios from "axios";
import {updateOperationFunction} from "../../const/updateOperationFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";
import {useParams} from "react-router-dom";

export default function UpdateOperationForm() {
  const {id} = useParams();
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    updateOperation(values);
    actions.resetForm();
  }

  const url = `http://localhost:3000/operation/${id}`;

  const mutation = useMutation({
    mutationKey: ["updateOperation"],
    mutationFn: async (values) => {
      return await axios.patch(url, updateOperationFunction(values), config);
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

  async function updateOperation(values) {
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
      <UpdateOperationFormView onSubmit={onSubmit} />
    </>
  );
}
