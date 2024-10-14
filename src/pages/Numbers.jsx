import React, { useEffect, useState } from 'react';

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Numbers = () => {
  const [selected, setSelected] = useState([]);
  const [numbers, setNumbers] = useState(shuffleArray([...Array(25).keys()].map(i => i + 1)));
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const shuffleNumbers = () => {
    setNumbers(shuffleArray([...Array(25).keys()].map(i => i + 1)));
    setSelected([]);
  };

  const toggleSelect = (num) => {
    setSelected((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 70px)', gap: '10px' }} className='border-2 border-black p-5'>
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`text-3xl ${selected.includes(num) ? 'bg-green-400' : ''}`}
            style={{ padding: '15px', border: '1px solid #000', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => toggleSelect(num)}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button onClick={shuffleNumbers} className='py-2 px-4 bg-black text-white rounded-md mr-2'>Shuffle</button>
        <button onClick={startTimer} className='py-2 px-4 bg-blue-500 text-white rounded-md mr-2'>Start Timer</button>
        <button onClick={stopTimer} className='py-2 px-4 bg-red-500 text-white rounded-md mr-2'>Stop Timer</button>
        <button onClick={resetTimer} className='py-2 px-4 bg-gray-500 text-white rounded-md'>Reset Timer</button>
      </div>
      <div className="mt-3 text-2xl">
        Timer: {timer} seconds
      </div>
    </div>
  );
};

export default Numbers;
