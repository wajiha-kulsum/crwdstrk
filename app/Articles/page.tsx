'use client'

import React, { useEffect, useState } from 'react'

interface ArticleData {
  headline: string
  description: string
  url: string
}

export default function MentalHealthArticles() {
  const [data, setData] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const subscriptionKey = 'eb8665dab85f4e06a1aa9705e3536c38'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nhs.uk/mental-health/?api-version=1.0&subscription-key=${subscriptionKey}`, {
          headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
          },
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        const articles = responseData.hasPart || []
        setData(articles as ArticleData[])
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError('Error fetching data. Please check your subscription key and try again.')
        setLoading(false)
      }
    }

    fetchData()
  }, [subscriptionKey])

  if (loading) {
    return (
      <div className="container p-4 mx-auto bg-white">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center h-32">
            <div className="text-2xl font-semibold text-center text-gray-500">Loading...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container p-4 mx-auto bg-white">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center h-32">
            <div className="text-center text-red-500">{error}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container p-4 mx-auto bg-white">
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-row items-center justify-between pb-2 space-y-0">
          <h1 className="text-3xl font-bold text-black">Mental Health Articles</h1>
          <button className="px-4 py-2 text-white bg-green-600 rounded-full shadow-md hover:bg-green-700">
            Post Article
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <main className="flex-grow">
          <div className="relative mb-6">
            <input
              className="w-full p-2 pl-10 text-black bg-white border border-gray-300 rounded-full"
              placeholder="Search articles"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div key={index} className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="p-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-green-600 border-2 border-green-200 rounded-full">
                        {item.headline[0]}
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-black">{item.headline}</h2>
                        <p className="text-sm text-gray-500">NHS Mental Health</p>
                      </div>
                    </div>
                    <p className="mb-4 overflow-hidden text-black text-ellipsis" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                      {item.description}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-4 text-center bg-white rounded-lg shadow-md">
                <p className="text-black">No articles available</p>
              </div>
            )}
          </div>
        </main>
        <aside className="w-full lg:w-80">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-black">Suggested Connections</h2>
            <div className="h-[300px] overflow-y-auto pr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 p-2 mb-4 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 border-2 border-blue-200 rounded-full">
                    U{i}
                  </div>
                  <div>
                    <p className="font-semibold text-black">User Name {i}</p>
                    <p className="text-sm text-gray-500">Profession {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}