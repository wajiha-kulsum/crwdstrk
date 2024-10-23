"use client";

import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Sidebar = () => {
  const menuItems = ["Dashboard", "Exercises", "Progress", "Settings"];
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="w-64 h-screen p-6 text-white bg-teal-700">
      <div className="mb-8">
        <img
          src="/placeholder.svg?height=80&width=80"
          alt="Alex Johnson"
          className="mb-2 rounded-full"
        />
        <h2 className="text-xl font-bold">ALEX JOHNSON</h2>
        <p className="text-sm">alex.johnson@gmail.com</p>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              className={`mb-4 cursor-pointer ${
                activeItem === item ? "font-bold" : ""
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const ExerciseCard = ({ exercise, calories }) => (
  <div
    className="flex items-center justify-between p-4 text-white bg-yellow-500 rounded-lg cursor-pointer"
    onClick={() => alert(`Tracking details for ${exercise}`)}
  >
    <div>
      <h3 className="text-lg font-semibold">{exercise}</h3>
      <p className="text-2xl font-bold">{calories} kcal</p>
    </div>
    <img
      src="/placeholder.svg?height=50&width=50&text=💪"
      alt="Exercise"
      className="w-12 h-12"
    />
  </div>
);

const TotalWorkouts = ({ count }) => (
  <div className="p-4 text-white bg-teal-700 rounded-lg">
    <h3 className="text-lg font-semibold">Total Workouts</h3>
    <p className="text-2xl font-bold">{count}</p>
    <img
      src="/placeholder.svg?height=50&width=100&text=World Map"
      alt="World Map"
      className="w-full mt-2"
    />
  </div>
);

const LastSessions = () => {
  const sessions = [
    { name: "John Doe", activity: "Running", duration: "45 min", calories: "500 kcal" },
    { name: "Martin Loiness", activity: "Cycling", duration: "30 min", calories: "300 kcal" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-semibold">Last Sessions</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">User</th>
            <th className="text-left">Activity</th>
            <th className="text-left">Duration</th>
            <th className="text-left">Calories Burned</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index}>
              <td className="py-2">{session.name}</td>
              <td>{session.activity}</td>
              <td>{session.duration}</td>
              <td>{session.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProgressStatistics = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Running",
        data: [5, 6, 8, 5, 7, 9],
        backgroundColor: "#2C7A7B",
      },
      {
        label: "Cycling",
        data: [4, 3, 6, 5, 6, 7],
        backgroundColor: "#ECC94B",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-semibold">Progress Statistics</h3>
      <Line data={data} options={options} />
    </div>
  );
};

const ExerciseShare = () => {
  const data = {
    labels: ["Running", "Cycling", "Swimming"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#2C7A7B", "#ECC94B", "#38B2AC"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-semibold">Exercise Share</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

const ExerciseSchedule = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Running",
        data: [4, 5, 6, 4, 5, 7],
        borderColor: "#2C7A7B",
        tension: 0.4,
      },
      {
        label: "Cycling",
        data: [3, 4, 3, 5, 4, 6],
        borderColor: "#ECC94B",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 8,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-semibold">Exercise Schedule</h3>
      <Line data={data} options={options} />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <ExerciseCard exercise="Running" calories="450" />
          <ExerciseCard exercise="Cycling" calories="320" />
          <TotalWorkouts count="150" />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <LastSessions />
          <ProgressStatistics />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <ExerciseShare />
          <ExerciseSchedule />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
