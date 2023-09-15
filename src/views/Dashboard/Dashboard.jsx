import {useQuery} from "@tanstack/react-query";
import DashboardView from "./DashboardView";
import axios from "axios";

const url = "http://localhost:3000/operation/all";
const token = localStorage.getItem("IM_INVESTING_KEY");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function Dashboard() {
  const getAllOperations = async () => {
    return await axios.get(url, config).then((res) => res.data);
  };

  const {data, status} = useQuery({
    queryKey: ["allOperations"],
    queryFn: () => getAllOperations(),
  });

  if (status === "loading") {
    return <span>Loading...</span>;
  }
  const allOperations = data?.data;

  return (
    <>
      <DashboardView allOperations={allOperations} />
    </>
  );
}
