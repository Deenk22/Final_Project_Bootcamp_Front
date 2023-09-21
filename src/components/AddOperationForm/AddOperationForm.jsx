import {useMutation} from "@tanstack/react-query";
import AddOperationView from "./AddOperationFormView";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import toastFunctions from "../../notifications/notificationService";

export default function AddOperationForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const mutation = useMutation({
    mutationFn: async (values) => {
      const {...operation} = values;
      return await axios.post(
        `http://localhost:3000/operation`,
        {
          operationType: operation.operationType,
          volume: operation.volume ? operation.volume : null,
          priceOpen: operation.priceOpen ? operation.priceOpen : null,
          stopLoss: operation.stopLoss ? operation.stopLoss : null,
          takeProfit: operation.takeProfit ? operation.takeProfit : null,
          priceClose: operation.priceClose ? operation.priceClose : null,
          commission: operation.commission ? operation.commission : null,
          swap: operation.swap ? operation.swap : null,
          changeRate: operation.changeRate ? operation.changeRate : null,
        },
        config
      );
    },
    onError: (err) => {
      if (err.response.status === 401) {
        const {message} = err.response.data;
        toastFunctions.authorizationError(message);
      }
      if (err.response.status === 500) {
        toastFunctions.internalServerError();
      }
    },
    onSuccess: (data) => {
      return data;
    },
  });

  async function postOperation(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const {message} = data;
        toastFunctions.operationSuccessfullyAdded(message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return <AddOperationView postOperation={postOperation} />;
}
