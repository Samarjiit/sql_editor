import React from 'react';

const Instructions = () => {
  return (
    <div className="bg-gray-200 p-3 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2">
        Write the following queries only!!
      </h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">select * from categories</li>
        <li className="mb-2">select * from territory</li>
        <li className="mb-2">select * from suppliers</li>
        <li className="mb-2">select * from products</li>
        <li className="mb-2">select * from shippers</li>
      </ul>
    </div>
  );
};
export default Instructions;
