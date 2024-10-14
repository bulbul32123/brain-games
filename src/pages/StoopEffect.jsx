import React, { useEffect, useState } from 'react';

// Colors Array
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', "Black", "White"];
const colorValues = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', "white"];

const StoopsEffect = () => {
    const [colorTexts, setColorTexts] = useState([]);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Function to shuffle and generate random color names and their color
    const shuffleColors = () => {
        const shuffledTexts = Array.from({ length: 12 }).map(() => {
            const randomText = colors[Math.floor(Math.random() * colors.length)];
            const randomColor = colorValues[Math.floor(Math.random() * colorValues.length)];
            return { text: randomText, color: randomColor };
        });
        setColorTexts(shuffledTexts);
    };

    useEffect(() => {
        shuffleColors(); // Initialize with random colors on load
    }, []);

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
        <div className='h-screen w-full bg-gray-300 flex justify-center items-center flex-col'>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 150px)', gap: '20px' }} className='border-2 border-black p-5'>
                {colorTexts.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '15px',
                            border: '1px solid #000',
                            textAlign: 'center',
                            fontSize: '25px',
                            fontWeight: 'bold',
                            color: item.color,
                        }}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <button onClick={shuffleColors} className='py-2 px-4 bg-black text-white rounded-md mr-2'>Shuffle</button>
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

export default StoopsEffect;
