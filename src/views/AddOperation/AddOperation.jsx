import AddOperationView from "./AddOperationView";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

const url = "http://localhost:3000/operation/all";

export default function AddOperation() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getAllOperations = async () => {
    const res = await axios.get(url, config);
    return res.data;
  };

  // Retry
  const {data: operations} = useQuery({
    queryKey: ["allOperations"],
    queryFn: getAllOperations,
    cacheTime: 5 * 60 * 1000,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const allOperations = operations?.data;
  // const getOperationByType = async () => {
  //   const operationType = "OperacionDemo";
  //   const res = await axios.get(
  //     `http://localhost:3000/operation/types/${operationType}`,
  //     config
  //   );
  //   return res.data;
  // };

  // const {
  //   data,
  //   status,
  // isError: allOperationsError,
  // status: allOperationsStatus,
  // } = useQuery({
  //   queryKey: ["allOperations"],
  //   queryFn: getOperationByType,
  //   cacheTime: 5 * 60 * 1000,
  // refetchOnWindowFocus: true,
  // notifyOnChangeProps:
  // remove: () => void
  // });

  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  return (
    <>
      <AddOperationView allOperations={allOperations} />
    </>
  );
}
