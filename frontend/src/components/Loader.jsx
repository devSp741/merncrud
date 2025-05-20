'use client';

import React from 'react';

const Loader = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen space-y-4">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
  <p className="text-lg text-gray-600">Loading, please wait...</p>
</div>

  );
};

export default Loader;
