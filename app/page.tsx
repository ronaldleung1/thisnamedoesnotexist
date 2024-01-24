'use client'

import { FiCopy } from 'react-icons/fi';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import data from './names.json';

type MarqueeElementProps = {
  name: string;
  className?: string;
};

const MarqueeElement = ({ name, className }: MarqueeElementProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`inline-block py-1 px-2 text-gray-100/75 font-medium text-sm leading-5 mr-2 mb-4 cursor-pointer rounded-full box-border border border-gray-100/0 hover:text-bg-gray-100 hover:border-gray-100 hover:bg-gray-100/50 transition ease-in-out duration-300 ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <FiCopy className="mr-2 inline-block transition duration-300" />}
      {name}
    </div>
  );
}

export default function Home() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    setNames(data.names);
  }, []);

  const elemsPerMarquee = 25;
  const marqueeCount = Math.ceil(names.length / elemsPerMarquee);

  return (
    // vertically align the marquee
    <main className="flex flex-col justify-center items-center min-h-screen p-12">
      
      {Array.from({ length: marqueeCount }).map((_, index) => (
        <Marquee key={index} autoFill={true} direction={index % 2 == 0 ? "left" : "right"} speed={10 + 30*Math.random()} gradient={true} gradientColor="black" pauseOnHover={true} className="block">
          {names.slice(index * elemsPerMarquee, (index + 1) * elemsPerMarquee).map((name, nameIndex) => (
            <MarqueeElement key={nameIndex} name={name} />
          ))}
        </Marquee>
      ))}

    </main>
  );
}
