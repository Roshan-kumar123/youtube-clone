import React, { useState } from 'react';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'JavaScript',
  'Punjabi Songs',
  'Coding',
  'Cricket',
  'Football',
  'Movies',
  'Gatsby',
  'Stock Market',
  'Crypto',
];

const Categoriesbar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className={'categoriesBar'}>
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? 'active' : ''}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categoriesbar;
