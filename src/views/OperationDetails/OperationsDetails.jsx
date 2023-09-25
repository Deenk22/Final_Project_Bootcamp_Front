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

  const getOperationId = () => {
    return axios
      .get(`http://localhost:3000/operation/id/${id}`, config)
      .then((res) => res.data);
  };

  const {data} = useQuery({
    queryKey: ["operationdetails"],
    queryFn: getOperationId,
    keepPreviousData: true,
  });

  const operationDetailsInfo = data?.data;

  return (
    <>
      <OperationDetailsView operationDetailsInfo={operationDetailsInfo} />
    </>
  );
}
