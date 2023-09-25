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

  // get01
  const url = "http://localhost:3000/operation/all";

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

  const {data: operations} = useQuery({
    queryKey: ["allOperations"],
    queryFn: getAllOperations,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // get02
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

  const operationsByDate = searchByDate ? searchByDate.data : null;
  const allOperations = operations ? operations.data : null;

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
        operationsByDate={operationsByDate}
        handleSearchByDate={handleSearchByDate}
        handleEndDateChange={handleEndDateChange}
        handleStartDateChange={handleStartDateChange}
        // handleDeleteOperation={handleDeleteOperation}
      />
    </>
  );
}
