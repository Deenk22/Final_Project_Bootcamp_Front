import AddStrategyForm from "../../components/AddStrategyForm/AddStrategyForm";
import StrategyTable from "../../components/Tables/StrategyTable";

export default function AddStrategyView({allStrategies}) {
  return (
    <>
      <AddStrategyForm />
      <StrategyTable allStrategies={allStrategies} />
    </>
  );
}
