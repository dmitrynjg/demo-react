'use client';

import { useState } from 'react';

export default function Search({ onSearch, onClickResult, placeholder }) {
  const [list, setList] = useState([]);
  const [value, setInputValue] = useState('');
  return (
    <div className='mx-auto mb-3'>
      <div className='relative'>
        <div className='h-10 bg-white flex border border-gray-200 rounded items-center'>
          <input
            name='select'
            id='select'
            placeholder={placeholder}
            className='px-4 appearance-none outline-none text-gray-800 w-full'
            value={value}
            onChange={(e) => {
              setInputValue(e.target.value);
              onSearch(e.target.value, setList);
            }}
            checked=''
          />
        </div>

        {list.length > 0 && (
          <div className='absolute rounded shadow bg-white peer-checked:flex flex-col w-full mt-1 border border-gray-200 z-10'>
            {list.map(({ text, data }) => (
              <div
                className='cursor-pointer group'
                key={text}
              >
                <div
                  className='block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100'
                  onClick={() => {
                    onClickResult(data, setList);
                    setInputValue(text);
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
