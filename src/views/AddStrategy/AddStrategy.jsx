import axios from "axios";
import AddStrategyView from "./AddStrategyView";
import {useQuery} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useState} from "react";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function AddStrategy() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [strategyByDate, setStrategyByDate] = useState(null);

  // getAllStrategies
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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

  // getStrategiesByDate
  const urlDate = `http://localhost:3000/strategy/date/${startDate}/${endDate}`;

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  function handleSearchByDate() {
    if (startDate === "" || endDate === "") {
      errorNotification("Empty Fields");
    } else {
      getStrategiesByDate();
      setStartDate("");
      setEndDate("");
      setStrategyByDate(null);
    }
  }

  const getStrategiesByDate = async () => {
    try {
      const res = await axios.get(urlDate, config);
      if (res.status === 200) {
        const message = res?.data.message;
        setStrategyByDate(res.data);
        doneNotification(message);
      }
    } catch (err) {
      if (err.response.status === 400) {
        const message = err?.response.data.message;
        errorNotification(message);
      }
    }
  };

  const allStrategies = strategies ? strategies.data : null;
  const strategiesByDate = strategyByDate ? strategyByDate.data : null;

  return (
    <AddStrategyView
      startDate={startDate}
      endDate={endDate}
      allStrategies={allStrategies}
      strategiesByDate={strategiesByDate}
      handleStartDateChange={handleStartDateChange}
      handleEndDateChange={handleEndDateChange}
      handleSearchByDate={handleSearchByDate}
    />
  );
}
