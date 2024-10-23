"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Define the structure of FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What services does your mental health platform offer?",
    answer:
      "Our platform provides personalized mental health assessments, mood tracking, AI-driven insights, and resources tailored to individual needs. We also offer support for creating personalized wellness plans.",
  },
  {
    question: "How does the mood tracker work?",
    answer:
      "The mood tracker allows users to log their feelings daily and provides insights based on patterns and trends over time, helping to identify triggers and areas for improvement.",
  },
  {
    question: "Can I use this platform for team mental health initiatives?",
    answer:
      "Yes! We offer features that allow organizations to support their teams' mental health, including group assessments and wellness resources tailored for workplaces.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Absolutely! We prioritize your privacy and use advanced encryption methods to ensure your data is secure and confidential at all times.",
  },
  {
    question: "How can I get started with the service?",
    answer:
      "You can sign up for an account on our website. After that, you’ll have access to our tools and can start using our features right away!",
  },
];

export default function FAQComponent() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col max-w-6xl gap-8 mx-auto md:flex-row">
          <div className="md:w-2/3">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h2 className="mb-8 text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200">
                    <button
                      className="flex items-center justify-between w-full p-3 text-left text-gray-900 rounded-lg"
                      onClick={() => toggleItem(index)}
                      aria-expanded={openItem === index}
                    >
                      <span className="text-lg font-medium">{item.question}</span>
                      {openItem === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-900" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-900" />
                      )}
                    </button>
                    <div
                      className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                        openItem === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pb-2 text-gray-800">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src="/placeholder.svg?height=600&width=400"
              alt="Person using smartphone"
              className="rounded-lg shadow-lg"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
