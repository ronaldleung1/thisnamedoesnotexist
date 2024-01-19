// create a react component for an animated marquee using tailwind

import React from 'react';

const MarqueeElement = () => {
  return (
    <div className="inline-block py-1 px-2 rounded-full bg-gray-100 text-gray-900 font-medium text-sm leading-5 mr-2 mb-4">
      John
    </div>
  );
}

const Marquee = () => {
  return (
    <div>
      <MarqueeElement />
      <MarqueeElement />
      <MarqueeElement />
    </div>
  );
}


export default Marquee;