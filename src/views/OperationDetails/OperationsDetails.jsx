import axios from "axios";
import OperationDetailsView from "./OperationDetailsView";
import {useQuery} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useParams} from "react-router-dom";

export default function OperationDetails() {
  const {id} = useParams();
  console.log(id);
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

  const {data, status} = useQuery({
    queryKey: ["operationdetails"],
    queryFn: getOperationId,
    keepPreviousData: true,
  });

  if (status === "loading") {
    return <span>Loading...</span>;
  }
  const operationDetailsInfo = data?.data;
  console.log(operationDetailsInfo);

  return (
    <>
      <OperationDetailsView operationDetailsInfo={operationDetailsInfo} />
    </>
  );
}
