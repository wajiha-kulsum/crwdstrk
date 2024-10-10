import React from 'react';

// Define the props type
interface ArticlesProps {
    headline: string;
    text?: string; // Make this optional if not always used
    description: string;
    URL: string;
}

// Convert to a functional component with type annotations
const Articles: React.FC<ArticlesProps> = ({ headline, text, description, URL }) => (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{headline}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            {/* Uncomment if you want to render text as HTML */}
            {/* <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: text }} /> */}
            <a 
                href={URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
                Read more
            </a>
        </div>
    </div>
);

export default Articles;
