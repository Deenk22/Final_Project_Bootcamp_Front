import axios from "axios";
import AddOperationView from "./AddOperationView";
import {useQuery} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

const operationType = "OperacionDemo";
const url = `http://localhost:3000/operation/types/${operationType}`;
const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function AddOperation() {
  const getOperationByType = () => {
    return axios.get(url, config).then((res) => res.data);
  };

  const {data, status} = useQuery({
    queryKey: ["operationType"],
    queryFn: getOperationByType,
  });

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  const operationTypeData = data?.data;

  return (
    <>
      <AddOperationView operationTypeData={operationTypeData} />
    </>
  );
}
