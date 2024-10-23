import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

type Option = {
  id: number;
  text: string;
};

type Response = {
  question: string;
  answer: string;
};

type PieChartComponentProps = {
  responses: Response[];
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB'];

const PieChartComponent: React.FC<PieChartComponentProps> = ({ responses }) => {
  // Aggregate responses for the pie chart
  const answerCounts: { [key: string]: number } = {};

  responses.forEach((response) => {
    answerCounts[response.answer] = (answerCounts[response.answer] || 0) + 1;
  });

  const data = Object.keys(answerCounts).map((key, index) => ({
    name: key,
    value: answerCounts[key],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-gray-800">Assessment Results Chart</h2>
      <PieChart width={400} height={400}>
        <Tooltip />
        <Legend />
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
