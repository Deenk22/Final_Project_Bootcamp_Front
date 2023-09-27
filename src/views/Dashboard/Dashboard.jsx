import {useQuery} from "@tanstack/react-query";
import DashboardView from "./DashboardView";
import axios from "axios";
import {useState} from "react";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {errorNotification} from "../../notifications/notification";
import {doneNotification} from "../../notifications/notification";

export default function Dashboard() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchByDate, setSearchByDate] = useState(null);
  const [getOperationDateError, setGetOperationDateError] = useState("");

  // get01 getAllOperations
  const allOperationsUrl = "http://localhost:3000/operation/all";

  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getAllOperations = async () => {
    const {data} = await axios.get(allOperationsUrl, config);
    return data;
  };

  const {data: operations} = useQuery({
    queryKey: ["allOperations"],
    queryFn: getAllOperations,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // get02 getOperationsBetween
  const urlDate = `http://localhost:3000/operation/date/${startDate}/${endDate}`;

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const getOperationsByDate = async () => {
    try {
      const res = await axios.get(urlDate, config);
      if (res.status === 200) {
        const message = res?.data.message;
        setSearchByDate(res.data);
        doneNotification(message);
      }
    } catch (err) {
      if (err.response.status === 400) {
        const message = err?.response.data.message;
        errorNotification(message);
      }
      setGetOperationDateError(err?.response.status);
    }
  };

  function handleSearchByDate() {
    if (startDate === "" || endDate === "") {
      errorNotification("Empty Fields");
    } else {
      getOperationsByDate();
      setStartDate("");
      setEndDate("");
      setSearchByDate(null);
      setGetOperationDateError("");
    }
  }

  // get03 getAllStrategies
  const allStrategiesUrl = "http://localhost:3000/strategy/all";

  const getAllStrategies = async () => {
    const {data} = await axios.get(allStrategiesUrl, config);
    return data;
  };

  const {data: strategies} = useQuery({
    queryKey: ["allStrategies"],
    queryFn: getAllStrategies,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // get getAllStocks
  const allStocksUrl = "http://localhost:3000/stock/all";

  const getAllStocks = async () => {
    const {data} = await axios.get(allStocksUrl, config);
    return data;
  };

  const {data: stocks} = useQuery({
    queryKey: ["allStocks"],
    queryFn: getAllStocks,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const operationsByDate = searchByDate ? searchByDate.data : null;
  const allOperations = operations ? operations.data : null;
  const allStrategies = strategies ? strategies.data : null;
  const allStocks = stocks ? stocks.data : null;

  // const handleDeleteOperation = async (id) => {
  //   const res = await axios.delete(
  //     `http://localhost:3000/operation/${id}`,
  //     config
  //   );
  //   return res.data;
  // };

  // const mutation = useMutation({
  //   mutationFn: handleDeleteOperation,
  // });

  return (
    <>
      <DashboardView
        getOperationDateError={getOperationDateError}
        startDate={startDate}
        endDate={endDate}
        allOperations={allOperations}
        allStrategies={allStrategies}
        allStocks={allStocks}
        operationsByDate={operationsByDate}
        handleSearchByDate={handleSearchByDate}
        handleEndDateChange={handleEndDateChange}
        handleStartDateChange={handleStartDateChange}
        // handleDeleteOperation={handleDeleteOperation}
      />
    </>
  );
}
