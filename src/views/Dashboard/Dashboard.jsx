import {useQuery} from "@tanstack/react-query";
import DashboardView from "./DashboardView";
import axios from "axios";

const url = "http://localhost:3000/operation/all";

// const operationType = "OperacionDemo";
// const urlTwo = `http://localhost:3000/operation/types/${operationType}`;

export default function Dashboard() {
  const token = JSON.parse(localStorage.getItem("IM_INVESTING_KEY"));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getAllOperations = async () => {
    const res = await axios.get(url, config);
    return res.data;
  };

  // const getOperationByType = async () => {
  //   const res = await axios.get(urlTwo, config);
  //   return res.data;
  // };

  // Retry
  const {
    data: operations,
    // isError: allOperationsError,
    // status: allOperationsStatus,
  } = useQuery({
    queryKey: ["allOperations"],
    queryFn: getAllOperations,
    cacheTime: 5 * 60 * 1000,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // const {
  //   data: operationTypeData,
  // isError: operationTypeError,
  // status: typeStatus,
  // } = useQuery({
  //   queryKey: ["operationType"],
  //   queryFn: getOperationByType,
  //   cacheTime: 5 * 60 * 1000,
  // refetchOnWindowFocus: true,
  // notifyOnChangeProps:
  // remove: () => void
  // });

  const allOperations = operations?.data;
  // const allOperationType = operationTypeData?.data;

  return (
    <>
      <DashboardView
        allOperations={allOperations}
        // allOperationType={allOperationType}
      />
    </>
  );
}
