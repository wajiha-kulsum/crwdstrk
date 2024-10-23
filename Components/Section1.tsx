'use client'

import React from 'react'
import { ArrowDown, Brain, Heart, Smile, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface InsightBoxProps {
  icon: React.ReactNode
  title: string
  description: string
}

const InsightBox: React.FC<InsightBoxProps> = ({ icon, title, description }) => (
  <Card className="transition-all duration-300 bg-white border border-gray-200 hover:shadow-lg">
    <CardContent className="p-6">
      <div className="mb-4 text-4xl text-indigo-600">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
)

const MentalHealthInsights: React.FC = () => {
  const insights = [
    { icon: <Brain />, title: 'Cognitive Insights', description: 'Understand your thought patterns and cognitive processes.' },
    { icon: <Heart />, title: 'Emotional Well-being', description: 'Track and improve your emotional health over time.' },
    { icon: <Smile />, title: 'Mood Analysis', description: 'Get personalized mood tracking and analysis.' },
    { icon: <Users />, title: 'Social Connections', description: 'Enhance your social relationships and support network.' }
  ]

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-center text-indigo-900 md:text-5xl">
          AI-Powered Mental Health Insights
        </h1>
        <p className="max-w-3xl mx-auto mb-12 text-center text-indigo-700">
          Discover personalized mental health support from our team of AI-assisted psychologists, offering data-driven insights to enhance your well-being.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Section */}
          <Card className="overflow-hidden bg-white border border-gray-200 shadow-md">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Meet Our AI-Assisted Psychologist
              </h2>
              <p className="mb-6 text-indigo-700">
                Dr. AI, our virtual psychologist, combines years of psychological expertise with cutting-edge AI technology to provide personalized mental health support.
              </p>
              <div className="relative flex justify-center mb-8">
                <img 
                  src="/placeholder.svg?height=300&width=300" 
                  alt="AI-assisted psychologist" 
                  className="object-cover w-64 h-64 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
                />
                <ArrowDown className="absolute w-8 h-8 text-indigo-400 transition-all duration-300 -bottom-12 animate-bounce" />
              </div>
              <div className="flex justify-center mt-16 space-x-4">
                <Link href="/Psycho"  >
                <Button variant="default" className="flex items-center space-x-2 text-white bg-indigo-600 hover:bg-indigo-700">
                  <Users className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Button>  </Link>
              </div>
            </CardContent>
          </Card>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {insights.map((insight, index) => (
              <InsightBox 
                key={index}
                icon={insight.icon}
                title={insight.title}
                description={insight.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentalHealthInsights
