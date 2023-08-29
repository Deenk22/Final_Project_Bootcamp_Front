import {useQuery} from "@tanstack/react-query";
import DashboardView from "./DashboardView";
import axios from "axios";

const getNews = async () => {
  const data = await axios.get(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ccd31e559d97431b86bcfca1ec975261"
  );

  return data;
};

export default function Dashboard() {
  const {data} = useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(),
    keepPreviousData: true,
  });

  const articles = data?.data.articles.splice(0, 3);

  return (
    <>
      <DashboardView articles={articles} />
    </>
  );
}
