import {useQuery} from "@tanstack/react-query";
import DashboardView from "./DashboardView";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useState} from "react";

export default function Dashboard() {
  const [selectedBrokerId, setSelectedBrokerId] = useState("");
  const [selectedStrategyId, setSelectedStrategyId] = useState("");

  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // ALL OPERATIONS
  const allOperationsUrl = "http://localhost:3000/operation/all";
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

  const totalBenefitsByOperationsUrl =
    "http://localhost:3000/operation/totalbenefits";
  const getTotalBenefits = async () => {
    const {data} = await axios.get(totalBenefitsByOperationsUrl, config);
    return data;
  };

  const {data: totalBenefits} = useQuery({
    queryKey: ["totalBenefits"],
    queryFn: getTotalBenefits,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
    // refetchOnWindowFocus: true,
    // notifyOnChangeProps:
    // remove: () => void
  });

  // ALL STRATEGIES
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

  // ALL OPERATIONS BY STRATEGY ID OR NAME
  const strategyId = selectedStrategyId ? selectedStrategyId : null;
  const allStrategiesJoinOperations = `http://localhost:3000/strategy/operationsbystrategy/${strategyId}`;
  const getAllStrategiesJoinOperations = async () => {
    const {data} = await axios.get(allStrategiesJoinOperations, config);
    return data;
  };

  const {data: allStrategiesJoinOperationsData} = useQuery(
    ["allStrategiesJoinOperationsData", selectedStrategyId],
    getAllStrategiesJoinOperations,
    {
      retry: 1,
      enabled: !!selectedStrategyId,
    }
  );

  // TOTAL AMOUNT PER STRATEGY BY YEAR
  const strategyPerYearId = selectedStrategyId ? selectedStrategyId : null;
  const totalAmountPerStrategyByYearUrl = `http://localhost:3000/strategy/totalperyear/${strategyPerYearId}`;
  const getTotalAmountPerYearByStrategyStockType = async () => {
    const {data} = await axios.get(totalAmountPerStrategyByYearUrl, config);
    return data;
  };
  const {data: totalAmountPerStrategyByYearStockType} = useQuery(
    ["totalAmountPerStrategyByYearStockType", selectedStrategyId],
    getTotalAmountPerYearByStrategyStockType,
    {
      retry: 0,
      enabled: !!selectedStrategyId,
    }
  );

  // ALL STOCKS
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

  // ALL STOCKTYPES
  const allStockTypesUrl = "http://localhost:3000/stocktype/all";
  const getAllStockTypes = async () => {
    const {data} = await axios.get(allStockTypesUrl, config);
    return data;
  };

  const {data: stockTypes} = useQuery({
    queryKey: ["allStockTypes"],
    queryFn: getAllStockTypes,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
  });

  // STOCKTYPES PER YEAR
  const totalAmountPerYearByStockTypesUrl =
    "http://localhost:3000/stocktype/totalperyear";
  const getTotalAmountPerYearByStockTypes = async () => {
    const {data} = await axios.get(totalAmountPerYearByStockTypesUrl, config);
    return data;
  };

  const {data: totalAmountPerYearByStockTypes} = useQuery({
    queryKey: ["totalAmountPerYearByStockTypes"],
    queryFn: getTotalAmountPerYearByStockTypes,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
  });

  // ALL BROKERS
  const allBrokersUrl = "http://localhost:3000/broker/all";
  const getAllBrokers = async () => {
    const {data} = await axios.get(allBrokersUrl, config);
    return data;
  };

  const {data: brokers} = useQuery({
    queryKey: ["allBrokers"],
    queryFn: getAllBrokers,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
  });

  // ALL OPERATIONS BY BROKERID OR NAME
  const brokerId = selectedBrokerId ? selectedBrokerId : null;
  const allBrokersJoinOperations = `http://localhost:3000/broker/operationsbybroker/${brokerId}`;
  const getAllBrokersJoinOperations = async () => {
    const {data} = await axios.get(allBrokersJoinOperations, config);
    return data;
  };

  const {data: allBrokersJoinOperationsData} = useQuery(
    ["allBrokersJoinOperations", selectedBrokerId],
    getAllBrokersJoinOperations,
    {
      retry: 1,
      enabled: !!selectedBrokerId,
    }
  );

  // TOTAL AMOUNT BY BROKERS
  const totalAmountPerBrokerUrl = "http://localhost:3000/broker/totalamount";
  const getTotalAmountPerBroker = async () => {
    const {data} = await axios.get(totalAmountPerBrokerUrl, config);
    return data;
  };

  const {data: totalAmountPerBroker} = useQuery({
    queryKey: ["totalAmountPerBroker"],
    queryFn: getTotalAmountPerBroker,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
  });

  // TOTAL AMOUNT PER BROKERS BY YEAR
  const totalAmountPerBrokerByYearUrl =
    "http://localhost:3000/broker/totalperyear";
  const getTotalAmountPerBrokerByYear = async () => {
    const {data} = await axios.get(totalAmountPerBrokerByYearUrl, config);
    return data;
  };

  const {data: totalAmountPerBrokerByYear} = useQuery({
    queryKey: ["totalAmountPerBrokerByYear"],
    queryFn: getTotalAmountPerBrokerByYear,
    cacheTime: 5 * 60 * 1000,
    retry: 1,
  });

  const allOperations = operations ? operations.data : null;
  const allStrategies = strategies ? strategies.data : null;
  const allStocks = stocks ? stocks.data : null;
  const allStockTypes = stockTypes ? stockTypes.data : null;
  const allBrokers = brokers ? brokers.data : null;
  const brokersJoinOperationsData = allBrokersJoinOperationsData
    ? allBrokersJoinOperationsData.data
    : null;
  const strategyJoinOperationData = allStrategiesJoinOperationsData
    ? allStrategiesJoinOperationsData.data
    : null;
  const totalPerStrategyByYearStockType = totalAmountPerStrategyByYearStockType
    ? totalAmountPerStrategyByYearStockType.data
    : null;
  const totalAmountByBroker = totalAmountPerBroker
    ? totalAmountPerBroker.data
    : null;
  const totalBrokerAmountPerYear = totalAmountPerBrokerByYear
    ? totalAmountPerBrokerByYear.data
    : null;
  const totalStockTypesAmountPerYear = totalAmountPerYearByStockTypes
    ? totalAmountPerYearByStockTypes.data
    : null;
  const totalBenefitsByOperation = totalBenefits ? totalBenefits.data : null;

  const totalOperationBenefits = totalBenefitsByOperation?.map((operation) =>
    parseFloat(operation.totalBenefits).toFixed(3)
  );

  const benefitsLastOperationAdded =
    allOperations && allOperations.length > 0
      ? [allOperations[0]].map((operation) => {
          const {priceClose, priceOpen, volume, swap, commission} = operation;
          const benefits =
            volume * (priceClose - priceOpen) - commission - swap;
          return parseFloat(benefits).toFixed(3);
        })
      : [];

  const filter2022ByBroker = totalBrokerAmountPerYear?.filter(
    (operation) => operation.yr === 2022
  );

  const totalAmount2022 = filter2022ByBroker
    ?.reduce((total, operation) => total + parseFloat(operation.totalAmount), 0)
    .toFixed(3);

  console.log(benefitsLastOperationAdded);

  return (
    <>
      <DashboardView
        totalOperationBenefits={totalOperationBenefits}
        benefitsLastOperationAdded={benefitsLastOperationAdded}
        totalAmount2022={totalAmount2022}
        allStocks={allStocks}
        allBrokers={allBrokers}
        allOperations={allOperations}
        allStockTypes={allStockTypes}
        allStrategies={allStrategies}
        totalAmountByBroker={totalAmountByBroker}
        onIdBrokerChange={(id) => setSelectedBrokerId(id)}
        totalBenefitsByOperation={totalBenefitsByOperation}
        totalBrokerAmountPerYear={totalBrokerAmountPerYear}
        strategyJoinOperationData={strategyJoinOperationData}
        brokersJoinOperationsData={brokersJoinOperationsData}
        onIdStrategyChange={(id) => setSelectedStrategyId(id)}
        totalStockTypesAmountPerYear={totalStockTypesAmountPerYear}
        totalPerStrategyByYearStockType={totalPerStrategyByYearStockType}
        // handleSearchByDate={handleSearchByDate}
        // handleEndDateChange={handleEndDateChange}
        // handleStartDateChange={handleStartDateChange}
        // handleDeleteOperation={handleDeleteOperation}
      />
    </>
  );
}
