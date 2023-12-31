import AddOperationView from "./AddOperationView";
import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useState} from "react";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function AddOperation() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [operationByDate, setOperationsByDate] = useState(null);

  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = "http://localhost:3000/operation/all";
  const getAllOperations = async () => {
    const {data} = await axios.get(url, config);
    return data;
  };

  const {data: operations} = useQuery({
    queryKey: ["allOperations"],
    queryFn: getAllOperations,
    cacheTime: 5 * 60 * 1000,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  const deleteOperation = async (id) => {
    const {data} = await axios.delete(
      `http://localhost:3000/operation/${id}`,
      config
    );
    return data;
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleteOperation"],
    mutationFn: deleteOperation,

    onError: (err) => {
      console.log(err);
    },

    onSettled: (data, error) => {
      if (error) {
        const {message} = error.response.data;
        errorNotification(message);
      } else {
        const {message} = data;
        doneNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allOperations");
    },
  });

  const multipleDeletion = async (operationsId) => {
    const {data} = await axios.post(
      "http://localhost:3000/operation/multipledeletion",
      {
        operationsId,
      },
      config
    );
    return data;
  };

  const mutationDeleteMultiple = useMutation({
    mutationKey: ["deleteOperationsById"],
    mutationFn: multipleDeletion,

    onError: (err) => {
      console.log(err);
    },

    onSettled: (data, error) => {
      if (error) {
        const {message} = error.response.data;
        errorNotification(message);
      } else {
        const {message} = data;
        doneNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allOperations");
    },
  });

  const urlDate = `http://localhost:3000/operation/date/${startDate}/${endDate}`;
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
      getOperationsByDate();
      setStartDate("");
      setEndDate("");
      setOperationsByDate(null);
    }
  }

  const getOperationsByDate = async () => {
    try {
      const res = await axios.get(urlDate, config);
      if (res.status === 200) {
        const message = res?.data.message;
        setOperationsByDate(res.data);
        doneNotification(message);
      }
    } catch (err) {
      if (err.response.status === 400) {
        const message = err?.response.data.message;
        errorNotification(message);
      }
    }
  };

  const allOperations = operations ? operations.data : null;
  const operationsByDate = operationByDate ? operationByDate.data : null;
  console.log(allOperations);

  return (
    <>
      <AddOperationView
        endDate={endDate}
        mutation={mutation}
        startDate={startDate}
        allOperations={allOperations}
        operationsByDate={operationsByDate}
        handleSearchByDate={handleSearchByDate}
        handleEndDateChange={handleEndDateChange}
        handleStartDateChange={handleStartDateChange}
        mutationDeleteMultiple={mutationDeleteMultiple}
      />
    </>
  );
}
