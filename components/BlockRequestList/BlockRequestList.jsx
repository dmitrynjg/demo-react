'use client';

import Link from "next/link";


export default function BlockRequestList({ list }) {
  return (
    <div className="p-2">
      {list.map(({ text, surname, name, fatherName, login, id }) => (
        <div
          className='rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 mb-5'
          key={id}
        >
          <div className='rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900'>
            <p className='text-gray-700 dark:text-gray-300'>{text}</p>
            <div className='mt-8 flex gap-4 items-center'>
              <div>
                <h3 className='text-lg font-medium text-gray-700'>
                  {surname} {name} {fatherName}
                </h3>
                <Link className='text-base tracking-wide text-blue-500 hover:text-blue-400' href={`/user/${login}`}>{login}</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
