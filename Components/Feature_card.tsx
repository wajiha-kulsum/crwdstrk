import React from 'react';

interface FeatureCardProps {
  title: string;
  features: string[];
  popular?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, features, popular }) => {
  return (
    <div
      className={`p-10 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300 
        ${popular ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} 
        hover:shadow-2xl hover:transform hover:scale-105`}
    >
      {popular && <div className="mb-2 font-semibold text-yellow-400">POPULAR</div>}
      <div>
        <h3 className={`text-3xl font-bold mb-4 ${popular ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className={`flex items-center space-x-2 ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.5 17.25L5.25 12l1.438-1.438 3.812 3.812L17.312 7.5 18.75 8.938l-8.25 8.312z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={`w-full mt-auto py-4 rounded-full font-semibold transition-all duration-300 
        ${popular ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
        LEARN MORE
      </button>
    </div>
  );
};

const Section2: React.FC = () => {
  const features = [
    {
      title: 'Mood Tracking',
      features: [
        'Track daily moods and emotional well-being',
        'Identify mood patterns over time',
        'Visualize emotional changes',
      ]
    },
    {
      title: 'Mental Health Assessment',
      features: [
        'Comprehensive assessment of mental health',
        'Personalized feedback and resources',
        'Track progress over time',
      ]
    },
    {
      title: 'Journaling Features',
      features: [
        'Daily journaling prompts',
        'Reflect on your thoughts and feelings',
        'Privacy-focused entries',
      ],
      popular: true
    },
    {
      title: 'Access to Resources',
      features: [
        'Articles on mental health topics',
        'Guides and tools for emotional support',
        'Community support forums',
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-center text-gray-900">Explore Our Features</h1>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          Discover features designed to support your mental well-being.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              features={feature.features}
              popular={feature.popular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
