'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Client {
  id: number;
  companyName: string;
  churnRisk: number;
  mrr: number;
  accountManager: string;
}

interface ChurnRiskChartProps {
  clients: Client[];
}

export default function ChurnRiskChart({ clients }: ChurnRiskChartProps) {
  const percentTickFormatter = (tick: any) => `${(tick * 100).toFixed(0)}%`;
  const tooltipFormatter = (value: any) => [`${(value * 100).toFixed(0)}%`, 'Churn Risk'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={clients}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="companyName" />
        <YAxis tickFormatter={percentTickFormatter} />
        <Tooltip formatter={tooltipFormatter} />
        <Legend />
        <Bar dataKey="churnRisk" fill="#ffc107" />
      </BarChart>
    </ResponsiveContainer>
  );
}