"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

const areaChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
]

const pieChartData = [
  { name: 'Facebook', value: 33 },
  { name: 'Youtube', value: 55 },
  { name: 'Direct Search', value: 12 },
]

const COLORS = ['#F8FAFC', '#FDE68A', '#818CF8'] // Changed to fit light palette

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50"> {/* Light grey background */}
      <aside className="w-64 p-6 bg-white border-r border-gray-300 shadow-md">
        <h1 className="mb-8 text-2xl font-bold text-violet-600">Lector</h1>
        <nav className="space-y-2">
          {['Dashboard', 'Widgets', 'UI Elements', 'Advanced UI', 'Form Elements', 'Charts', 'Tables'].map((item) => (
            <a key={item} href="#" className="block px-4 py-2 text-gray-600 rounded hover:bg-violet-100">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <div className="flex space-x-4">
            <Select defaultValue="monthly">
              <SelectTrigger className="w-[180px] bg-gray-100 border border-gray-300">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            <Input type="text" placeholder="Search..." className="w-64 bg-gray-100 border border-gray-300" />
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="border bg-violet-100 border-violet-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-700">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$3468.96</div>
              <p className="text-xs text-gray-500">+20.1% from last month</p>
              <Button className="mt-4 text-white bg-violet-500 hover:bg-violet-600">Last Month Summary</Button>
            </CardContent>
          </Card>
          <Card className="col-span-2 bg-gray-100 border border-gray-300">
            <CardHeader>
              <CardTitle className="text-gray-700">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={areaChartData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#818CF8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#818CF8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#818CF8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="bg-gray-200 border border-gray-300">
            <CardHeader>
              <CardTitle className="text-gray-700">Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-between mt-4">
                {pieChartData.map((entry, index) => (
                  <div key={`legend-${index}`} className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{entry.value}%</div>
                    <div className="text-sm text-gray-500">{entry.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-6">
            {[{ title: 'Revenue Status', color: 'bg-red-100 border border-red-300' }, { title: 'Page Views', color: 'bg-yellow-100 border border-yellow-300' }].map((item, index) => (
              <Card key={index} className={item.color}>
                <CardHeader>
                  <CardTitle className="text-sm text-gray-700">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">$432</div>
                  <div className="h-10 mt-4">
                    <BarChart width={100} height={40} data={[{ value: 10 }, { value: 5 }, { value: 15 }]}>
                      <Bar dataKey="value" fill="#4B5563" />
                    </BarChart>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card className="bg-green-100 border border-green-300">
            <CardHeader>
              <CardTitle className="text-gray-700">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { activity: 'Task Updated', user: 'Nicole', time: '2 days ago', color: 'bg-violet-500' },
                  { activity: 'Deal Added', user: 'Patrick', time: '2 days ago', color: 'bg-purple-500' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white mr-4`}>
                      {item.user[0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.activity}</p>
                      <p className="text-sm text-gray-500">{item.user} - {item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-orange-100 border border-orange-300">
            <CardHeader>
              <CardTitle className="text-gray-700">Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-700">
                    <th className="pb-2">Invoice</th>
                    <th className="pb-2">Customer</th>
                    <th className="pb-2">From</th>
                    <th className="pb-2">Price</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '12396', customer: 'Charly Dom', from: 'Brazil', price: '$299', status: 'Process' },
                    { id: '12395', customer: 'Mario', from: 'Italy', price: '$2642', status: 'Open' },
                  ].map((order, index) => (
                    <tr key={index} className="text-gray-700 border-t">
                      <td className="py-2">{order.id}</td>
                      <td className="py-2">{order.customer}</td>
                      <td className="py-2">{order.from}</td>
                      <td className="py-2">{order.price}</td>
                      <td className="py-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Completed' ? 'bg-green-200 text-green-800' :
                          order.status === 'Process' ? 'bg-blue-200 text-blue-800' :
                          order.status === 'Open' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-red-200 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
