"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "What is Sassly?",
    answer:
      "Sassly is an on-brand AI copilot for businesses. It helps creators use generative AI to break through writer's block, create original imagery, and repackage content into different formats and languages in your company's brand voice. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs.",
  },
  {
    question: "Why should I choose Sassly?",
    answer:
      "Sassly offers unique benefits tailored to businesses looking to enhance their content creation process with AI. It's designed to maintain your brand voice across various content types.",
  },
  {
    question: "Can I upgrade to a different plan at a later time?",
    answer:
      "Yes, Sassly offers flexible plans that allow you to upgrade or change your subscription as your needs evolve.",
  },
  {
    question: "What's the cost of additional users?",
    answer:
      "The cost for additional users varies depending on your plan. Please contact our sales team for detailed pricing information.",
  },
  {
    question: "What's the commitment?",
    answer:
      "Sassly offers various commitment options, from monthly to annual plans. The specific commitment depends on the plan you choose.",
  },
];

export default function FAQComponent() {
  const [openItem, setOpenItem] = useState(null);
  const answerRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col max-w-6xl gap-8 mx-auto md:flex-row">
          <div className="md:w-2/3">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h2 className="mb-8 text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => toggleItem(index)}
                      aria-expanded={openItem === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="text-lg font-medium text-gray-700">{item.question}</span>
                      {openItem === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                      )}
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      ref={(el) => (answerRefs.current[index] = el)}
                      className="mt-2 overflow-hidden text-gray-600 transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openItem === index ? answerRefs.current[index]?.scrollHeight + "px" : "0px",
                        opacity: openItem === index ? 1 : 0,
                      }}
                    >
                      <p className="pb-2">{item.answer}</p>
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
