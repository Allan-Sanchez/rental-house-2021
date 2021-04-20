import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Miguel",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Allan",
    pv: 1398,
  },
  {
    name: "Juan",
    pv: 9800,
  },
  {
    name: "Maria",
    pv: 3908,
  },
  {
    name: "Carlos",
    pv: 4800,
  },
  {
    name: "Diana",
    pv: 3800,
  },
  {
    name: "Ana",
    pv: 4300,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width={"98%"} height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#9CA3AF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
