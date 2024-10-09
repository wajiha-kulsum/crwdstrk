import { Leaf, Mic, Database, Lock } from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="p-6 transition-transform transform bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 hover:shadow-lg">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold text-black">{title}</h3>
    <p className="mb-4 text-gray-600">{description}</p>
    <a href="#" className="flex items-center font-medium text-primary hover:underline">
      READ MORE <span className="ml-1">→</span>
    </a>
  </div>
);

const SasslyFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />, // Added color to icon
      title: "Smart Automation",
      description: "AI-driven chatbot in the past allowing you to focus more on your business or simply",
    },
    {
      icon: <Mic className="w-8 h-8 text-primary" />, // Added color to icon
      title: "Voice Typing System",
      description: "With Constitutional AI built in, Claude is designed to reduce brand risk",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />, // Added color to icon
      title: "Multiple Data Sources",
      description: "Best in class data retention, and no training on your data structure of modern area.",
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />, // Added color to icon
      title: "Data Secured",
      description: "Personalize to excel at your use cases and speak in your voice model work for you",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center text-black md:text-5xl">
          Simple system and database
        </h1>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          Optimize your impact this holiday season with an AI-driven, multichannel marketing
          strategy. Get all the tips and tricks in our free ebook.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SasslyFeatures;
