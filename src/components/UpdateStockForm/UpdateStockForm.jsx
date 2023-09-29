import UpdateStockFormView from "./UpdateStockFormView";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {updateStockFunction} from "../../const/updateStockFunction";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function UpdateStockForm({stock, setOpen}) {
  const {id} = stock;
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    updateStock(values);
    actions.resetForm();
  }

  const url = `http://localhost:3000/stock/${id}`;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["updateStock"],
    mutationFn: async (values) => {
      return await axios.patch(url, updateStockFunction(values), config);
    },

    onError: (err) => {
      if (err.response.status === 404) {
        const {message} = err.response.data;
        errorNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allStocks");
    },
  });

  async function updateStock(id, values) {
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
      <UpdateStockFormView onSubmit={onSubmit} setOpen={setOpen} />
    </>
  );
}
