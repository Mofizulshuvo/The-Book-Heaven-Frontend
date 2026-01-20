import React from 'react';

const TestTailwind = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tailwind CSS Test
        </h1>
        
        {/* Basic Colors Test */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Red Background</h2>
            <p>This should be red with white text</p>
          </div>
          
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Blue Background</h2>
            <p>This should be blue with white text</p>
          </div>
          
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Green Background</h2>
            <p>This should be green with white text</p>
          </div>
        </div>

        {/* Custom Colors Test */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-primary-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Primary Color</h2>
            <p>This should use your custom primary-500 color</p>
          </div>
          
          <div className="bg-neutral-900 text-neutral-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Neutral Colors</h2>
            <p>This should use your custom neutral colors</p>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Elements</h2>
          
          <div className="space-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Hover Button
            </button>
            
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded transition-colors ml-4">
              Custom Primary Button
            </button>
            
            <div className="mt-4">
              <input 
                type="text" 
                placeholder="Test input field"
                className="border border-gray-300 rounded px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Typography Test */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Typography Test</h2>
          <p className="text-lg mb-2">Large text</p>
          <p className="text-base mb-2">Base text</p>
          <p className="text-sm mb-2">Small text</p>
          <p className="text-xs mb-2">Extra small text</p>
          <p className="font-bold">Bold text</p>
          <p className="font-light">Light text</p>
          <p className="italic">Italic text</p>
        </div>
      </div>
    </div>
  );
};

export default TestTailwind;