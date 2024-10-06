// components/TestGrid.tsx
import React from 'react';

const TestGrid = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Test Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-blue-500 p-4 text-white rounded">
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestGrid;
