import DashboardView from "./DashboardView";

const data = [];

for (let i = 1; i <= 10; i++) {
  const name = "Activo";
  const years = Math.floor(Math.random() * 1000) + 1023;
  const beneficios = Math.random() * 1000;
  const perdidas = Math.random() * 500;
  const stocks = Math.floor(Math.random() * 100);
  const capitalInvertido = Math.random() * 5000;

  const objeto = {
    name: name,
    years: years,
    beneficios: beneficios.toFixed(2),
    perdidas: perdidas.toFixed(2),
    stocks: stocks,
    capitalInvertido: capitalInvertido.toFixed(2),
  };

  data.push(objeto);
}

export default function Dashboard() {
  return (
    <>
      <DashboardView data={data} />
    </>
  );
}
