import { useState, useEffect } from 'react';

export default function TextSwitch() {

  const [contentIndex, setContentIndex] = useState(0);
  const contents = ["Passionate", "Creative", "Eager"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, );

  return (
    <div>
      <h3 className='text-switch'>{contents[contentIndex]}</h3>
    </div>
  );
}





