'use client';

import { Textarea } from 'react-daisyui';

export default function TextareaReqeuest({ onChangeText }) {
  return (
    <div className='w-full font-sans'>
      <Textarea
        placeholder='Текст заявки'
        className='w-full'
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
    </div>
  );
}
