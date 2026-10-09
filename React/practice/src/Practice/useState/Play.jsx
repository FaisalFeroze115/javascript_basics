import {useState} from 'react';

export default function Play() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function handleClick(){
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);


    // setCount((n) => n + 1); 
    // setCount((n) => n + 1);
    // setCount((n) => n + 1);
  }

  return (
    <div className="">
        <div>
            <h1>{count}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
            +3
            </button>

        </div>

        <div>
            <h1>{number}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>
            Increase the number
            </button>
        </div>
         
    </div>
  );
}