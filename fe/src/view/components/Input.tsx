import { ComponentProps } from 'react';

export function Input({ placeholder, name, id, ...props }: ComponentProps<'input'>) {
  const inputId = id ?? name;

  return (
    <div className='relative'>
      <input
        className='bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] pt-4 placeholder-shown:pt-0 peer transition-all focus:border-gray-800 outline-none'
        name={name}
        id={inputId}
        {...props}
        placeholder=' '
      />

      <label htmlFor={inputId} className='absolute top-2 left-[13px] pointer-events-none text-gray-700 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'>
        {placeholder}
      </label>
    </div>
  );
}
