import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ISale } from "../Context/DataContext";

type SaleByDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function ISaleArrayToSaleByDayArray(data: ISale[]): SaleByDay[] {
  const days = data.reduce((acc: { [key: string]: SaleByDay }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));;
}

const SaleGraphic = ({ data }: { data: ISale[] }) => {
  const adaptedData = ISaleArrayToSaleByDayArray(data);

  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={adaptedData}>
        <YAxis />
        <XAxis dataKey="data" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SaleGraphic;
