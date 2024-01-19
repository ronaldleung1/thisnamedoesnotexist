'use client'

// import Marquee from "./components/marquee";
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import data from './names.json';

type MarqueeElementProps = {
  name: string;
};

const MarqueeElement = ({ name }: MarqueeElementProps) => {
  return (
    <div className="inline-block py-1 px-2 rounded-full bg-gray-100 text-gray-900 font-medium text-sm leading-5 mr-2 mb-4">
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
