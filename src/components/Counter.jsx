import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  return (
    <>   
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-1 bg-[url('https://img.freepik.com/free-vector/realistic-ramadan-kareem-illustration_52683-57886.jpg?w=826&t=st=1716882399~exp=1716882999~hmac=231881dd9bff3af22e3fe512ca90430dbb2ed74be4c582aed04359ea63c6bd99')] bg-cover bg-center">
        <div className='grid grid-cols-2 gap-2'>
          <div className="bg-white p-10 rounded-lg shadow-md ">
            <div className="text-2xl font-bold mb-4">Subhana Allah: {count2}</div>
            <div className="space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => setCount2(count2 + 1)}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75"
                onClick={() => setCount2(count2 - 1)}
              >
                Decrement
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-75"
                onClick={() => setCount2(0)}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Alhamdulillah: {count}</div>
            <div className="space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75"
                onClick={() => setCount(count - 1)}
              >
                Decrement
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-75"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Allahu Akbar: {count3}</div>
            <div className="space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => setCount3(count3 + 1)}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75"
                onClick={() => setCount3(count3 - 1)}
              >
                Decrement
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-75"
                onClick={() => setCount3(0)}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Astaghfirullah: {count4}</div>
            <div className="space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => setCount4(count4 + 1)}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75"
                onClick={() => setCount4(count4 - 1)}
              >
                Decrement
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-75"
                onClick={() => setCount4(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
