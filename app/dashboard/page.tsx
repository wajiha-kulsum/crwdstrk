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
        <h1 className="mb-8 text-2xl font-bold text-violet-600">MindSpace</h1>
        <nav className="space-y-2">
          {['Dashboard', 'Widgets', 'Analysis', 'your Mood Tracker', 'Personlized Recomendation', 'Charts', 'Tables'].map((item) => (
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
         
         {/* User profile  */}
          
        <Card className="border bg-violet-100 border-violet-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-violet-500">
                  U
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-800">User Profile</CardTitle>
                  <p className="text-sm text-gray-500">Last updated: 5 days ago</p>
                </div>
              </div>
              <Button className="text-white bg-violet-500 hover:bg-violet-600">Edit Profile</Button>
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Nicole</div>
              <p className="text-xs text-gray-500">Joined: Jan 2024</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>Mood Trend:</strong> Positive growth in September (+12%)
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Sleep Hours (Avg):</strong> 7.5 hours / night
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Meditation Sessions:</strong> 10 completed last month
                </p>
              </div>
              <Button className="w-full mt-4 text-white bg-violet-500 hover:bg-violet-600">
                View Full History
              </Button>
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
        <Card className="border shadow-md bg-violet-100 border-violet-300">
  <CardHeader>
    <CardTitle className="text-violet-800">Your Mood Today</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={[
            { name: '😊 Happy', value: 40 },
            { name: '😢 Sad', value: 20 },
            { name: '😡 Angry', value: 25 },
            { name: '😴 Tired', value: 15 },
          ]}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          <Cell fill="#f72585" /> {/* Happy - Deep Pink */}
          <Cell fill="#264653" /> {/* Sad - dark greeen */}
          <Cell fill="#F87171" /> {/* Angry - Bright Red */}
          <Cell fill="#C084FC" /> {/* Tired - Vivid Lavender */}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>

    <div className="flex justify-between mt-4">
      {[
        { emoji: '😊', mood: 'Happy', value: 40, color: '#f72585' },
        { emoji: '😢', mood: 'Sad', value: 20, color: '#264653' },
        { emoji: '😡', mood: 'Angry', value: 25, color: '#F87171' },
        { emoji: '😴', mood: 'Tired', value: 15, color: '#C084FC' },
      ].map((entry, index) => (
        <div key={`legend-${index}`} className="text-center">
          <div className="text-2xl font-semibold" style={{ color: entry.color }}>
            {entry.emoji} {entry.value}%
          </div>
          <div className="text-sm text-gray-700">{entry.mood}</div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>



   {/* bento grid for tracking food, water, and sleep */}
          
   <div className="grid grid-cols-2 gap-6">
  {[
    { 
      title: 'Water Intake', 
      color: 'bg-blue-100 border border-blue-300', 
      icon: '💧', 
      value: '2.5L', 
      goal: 'Goal: 3L / Day' 
    },
    { 
      title: 'Healthy Food Intake', 
      color: 'bg-green-100 border border-green-300', 
      icon: '🥗', 
      value: '5 Servings', 
      goal: 'Goal: 7 Servings / Day' 
    },
    { 
      title: 'Good Sleep Cycle', 
      color: 'bg-purple-100 border border-purple-300', 
      icon: '😴', 
      value: '7.5 Hours', 
      goal: 'Goal: 8 Hours / Night' 
    },
    { 
      title: 'Write Your Thoughts', 
      color: 'bg-gray-100 border border-gray-300', 
      icon: '📝', 
      value: '', 
      goal: '' // No goal for the writing section
    }
  ].map((item, index) => (
    <Card key={index} className={`${item.color} shadow-md`}>
      <CardHeader className="flex items-center space-x-2">
        <div className="text-3xl">{item.icon}</div>
        <CardTitle className="text-sm text-gray-700">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {item.title === 'Write Your Thoughts' ? (
          <textarea 
            className="w-full h-24 p-2 text-blue-800 placeholder-gray-400 border border-gray-300 rounded" // Changed text color to blue
            placeholder="Write your thoughts here..."
            rows={3}
          />
        ) : (
          <>
            <div className="text-2xl font-bold text-gray-900">{item.value}</div>
            <div className="w-full h-2 mt-4 bg-gray-300 rounded-full">
              <div 
                className={`h-2 rounded-full ${item.color.replace('100', '500')}`} 
                style={{ width: item.title === 'Water Intake' ? '83%' : item.title === 'Healthy Food Intake' ? '71%' : '94%' }} // Adjusted for visual representation
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-600">{item.goal}</div>
          </>
        )}
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
              <ul className="space-y-4">a 
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
