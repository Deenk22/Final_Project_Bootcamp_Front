import OperationDetailsView from "./OperationDetailsView";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function OperationDetails() {
  const {id} = useParams();
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const urlId = `http://localhost:3000/operation/operationdetails/${id}`;
  const getOperationbyId = async () => {
    const {data} = await axios.get(urlId, config);
    return data;
  };

  const {data} = useQuery({
    queryKey: ["operationdetails"],
    queryFn: getOperationbyId,
    keepPreviousData: true,
  });

  const operationDetailsInfo = data?.data;
  console.log(operationDetailsInfo);

  return (
    <>
      <OperationDetailsView operationDetailsInfo={operationDetailsInfo} />
    </>
  );
}
