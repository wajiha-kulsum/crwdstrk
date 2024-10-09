import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, popular }) => {
  return (
    <div
      className={`p-8 rounded-2xl shadow-lg transition-all duration-300 
        ${popular ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} 
        hover:shadow-2xl hover:transform hover:scale-105`}
    >
      {popular && <div className="mb-2 font-semibold text-yellow-400">POPULAR</div>}
      <h3 className={`text-2xl font-bold mb-4 ${popular ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className="mb-4 text-4xl font-bold">
        ${price}
        <span className="text-lg font-medium">/month</span>
      </p>
      <div className="mb-6">
        <h4 className="mb-2 text-lg font-semibold">Advantage:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center space-x-2 ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.5 17.25L5.25 12l1.438-1.438 3.812 3.812L17.312 7.5 18.75 8.938l-8.25 8.312z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 
        ${popular ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
        SIGNUP NOW
      </button>
    </div>
  );
};

const Section2: React.FC = () => {
  const plans = [
    {
      title: 'Basic',
      price: '09',
      features: [
        'Unlimited cards',
        'Automated management',
        'SOX compliance',
        'Enterprise ERP integrations',
        'Limited tools',
        'Local video issuance'
      ]
    },
    {
      title: 'Standard',
      price: '29',
      features: [
        'Unlimited cards',
        'Automated management',
        'SOX compliance',
        'Enterprise ERP integrations',
        'Limited tools',
        'Local video issuance'
      ]
    },
    {
      title: 'Silver',
      price: '39',
      features: [
        'Unlimited cards',
        'Automated management',
        'SOX compliance',
        'Enterprise ERP integrations',
        'Limited tools',
        'Local video issuance'
      ],
      popular: true
    },
    {
      title: 'Premium',
      price: '49',
      features: [
        'Unlimited cards',
        'Automated management',
        'SOX compliance',
        'Enterprise ERP integrations',
        'Limited tools',
        'Local video issuance'
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-center text-gray-900">per user, per month.</h1>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          Optimize your impact this holiday season with an AI-driven, multichannel marketing strategy. Get all the tips and tricks in our free ebook.
        </p>

        <div className="flex justify-center mb-8">
          <button className="px-6 py-3 text-gray-800 transition-all duration-300 bg-white rounded-full hover:bg-gray-200">
            Monthly
          </button>
          <button className="px-6 py-3 ml-4 text-gray-800 transition-all duration-300 bg-white rounded-full hover:bg-gray-200">
            Yearly <span className="text-sm text-yellow-400">Save 20%</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
