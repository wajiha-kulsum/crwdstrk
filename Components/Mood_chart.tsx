"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Search, ZoomIn, Share2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Sector } from "recharts";

const moodInputs = [
  { emoji: "🌟", label: "Awesome", value: 9 },
  { emoji: "😊", label: "Great", value: 8 },
  { emoji: "😍", label: "Loved", value: 7 },
  { emoji: "🙂", label: "Okay", value: 6 },
  { emoji: "😕", label: "Meh", value: 5 },
  { emoji: "😬", label: "Anxious", value: 4 },
  { emoji: "☹️", label: "Bad", value: 3 },
  { emoji: "😖", label: "Terrible", value: 2 },
  { emoji: "😡", label: "Upset", value: 1 }
];

const moodData = [
  { day: 1, mood: 9 },
  { day: 4, mood: 7 },
  { day: 7, mood: 6 },
  { day: 10, mood: 3 },
  { day: 13, mood: 8 },
  { day: 16, mood: 5 },
  { day: 19, mood: 2 },
  { day: 22, mood: 6 },
  { day: 25, mood: 7 },
];

function getMoodColor(value) {
  const hue = ((value - 1) / 8) * 120;
  return `hsl(${hue}, 70%, 50%)`;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const moodInput = moodInputs.find(m => m.value === payload[0].value);
    return (
      <div className="p-2 bg-white border border-gray-200 rounded shadow">
        <p className="text-sm text-gray-800">Day: {label}</p>
        <p className="text-sm text-gray-800">{moodInput.emoji} {moodInput.label}</p>
      </div>
    );
  }
  return null;
}

export default function MoodChartComponent() {
  const [showBarChart, setShowBarChart] = useState(false);
  const [activePieIndex, setActivePieIndex] = useState(0);

  const toggleBarChart = () => {
    setShowBarChart(!showBarChart);
  };

  const moodCountData = moodInputs.map(mood => ({
    name: mood.label,
    value: Math.floor(Math.random() * 30) + 1,
    color: getMoodColor(mood.value)
  }));

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="flex items-center mb-8">
        <ArrowLeft className="mr-4 text-gray-700" size={24} />
        <h1 className="text-3xl font-bold text-gray-900">Explore Charts</h1>
      </div>
      <div className="p-5 mb-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center space-x-2">
            <button className="p-2 transition-colors rounded-full hover:bg-gray-200">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h2 className="text-lg font-medium text-gray-900">March 2023</h2>
            <button className="p-2 transition-colors rounded-full hover:bg-gray-200">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <button className="p-2 transition-colors rounded-full hover:bg-gray-200">
            <Search className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Mood Chart</h2>
            <div className="flex space-x-2">
              <button className="p-2 transition-colors rounded-full hover:bg-gray-200">
                <ZoomIn className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 transition-colors rounded-full hover:bg-gray-200">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-800">Tap on the chart to see more</p>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fill: '#1f2937' }} />
                <YAxis domain={[1, 9]} ticks={[1, 3, 5, 7, 9]} tickFormatter={(value) => moodInputs.find(m => m.value === value)?.emoji || ''} tick={{ fill: '#1f2937' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="mood" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between">
          <button 
  className="px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
  onClick={toggleBarChart}
>
  {showBarChart ? 'Show Line Chart' : 'Show Bar Chart'}
</button>

          </div>
        </div>
      </div>

      {showBarChart && (
        <div className="p-5 mb-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900">Mood Bar Chart</h2>
          <p className="text-sm text-gray-800">Here's how your moods compare in a bar format.</p>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fill: '#1f2937' }} />
                <YAxis tick={{ fill: '#1f2937' }} />
                <Tooltip />
                <Bar dataKey="mood" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <div className="p-5 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Mood Count</h2>
          <button className="p-2 transition-colors rounded-full hover:bg-gray-200">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <p className="text-sm text-gray-800">Tap on mood to see more</p>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activePieIndex}
                activeShape={renderActiveShape}
                data={moodCountData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActivePieIndex(index)}
              >
                {moodCountData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function renderActiveShape(props) {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill} />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}
