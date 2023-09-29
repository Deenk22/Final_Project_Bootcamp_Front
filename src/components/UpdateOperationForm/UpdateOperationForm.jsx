import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import UpdateOperationFormView from "./UpdateOperationFormView";
import axios from "axios";
import {updateOperationFunction} from "../../const/updateOperationFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function UpdateOperationForm({operation, setOpen}) {
  const {id} = operation;
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

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["updateOperation"],
    mutationFn: async (values) => {
      return await axios.patch(url, updateOperationFunction(values), config);
    },

    onError: (err) => {
      if (err.response.status === 404) {
        const {message} = err.response.data;
        errorNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allOperations");
    },
  });

  async function updateOperation(id, values) {
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
      <UpdateOperationFormView
        onSubmit={onSubmit}
        setOpen={setOpen}
        operation={operation}
      />
    </>
  );
}
