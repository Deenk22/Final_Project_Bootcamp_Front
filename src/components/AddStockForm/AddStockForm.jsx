import {useMutation} from "@tanstack/react-query";
import AddStockFormView from "./AddStockFormView";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function AddStockForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const mutation = useMutation({
    mutationFn: async (values) => {
      const {...stock} = values;
      return await axios.post(
        `http://localhost:3000/stock`,
        {
          name: stock.name,
          country: stock.country ? stock.country : null,
          ticker: stock.ticker ? stock.ticker : null,
          type: stock.type ? stock.type : null,
          sector: stock.sector ? stock.sector : null,
          industry: stock.industry ? stock.industry : null,
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

  async function postStock(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        console.log(data);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return <AddStockFormView postStock={postStock} />;
}
