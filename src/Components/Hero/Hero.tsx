import { useRef, useState, useEffect } from 'react';
import './hero.css';

export default function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [isHeroTextRefVisible, setIsHeroTextRefVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsHeroTextRefVisible(entry.isIntersecting);
    });
    observer.observe(heroTextRef.current!);
  });

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1552627019-947c3789ffb5?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      className='bg-center w-screen h-screen bg-no-repeat bg-cover flex items-center'
    >
      <div
        ref={heroTextRef}
        className={`heroContainer text-white w-1/3 ml-44 bg-white/15 px-10 py-5 rounded-3xl max-sm:w-full max-sm:px-2  max-sm:mx-4 mt-36 ${
          isHeroTextRefVisible ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <h2 className='text-5xl mb-4 max-sm:text-3xl'>
          Lorem ipsum dolor sit.
        </h2>
        <p className='text-md max-sm:text-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, at
          amet. Atque labore veniam cupiditate beatae quibusdam? Quos maiores
          suscipit provident illum possimus, debitis veritatis voluptates veniam
          perspiciatis doloribus inventore. Eaque alias soluta impedit
          architecto quam ullam iste ipsum quisquam consequatur! Nesciunt
          explicabo illo mollitia, eius cum praesentium, inventore dolores,
          autem voluptatibus incidunt aperiam excepturi ut fugit nam natus sunt?
        </p>
      </div>
    </div>
  );
}
