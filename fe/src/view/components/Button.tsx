import { ComponentProps } from 'react';

export function Button(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className='bg-teal-900 text-white enabled:hover:bg-teal-800 disabled:text-gray-400 disabled:bg-gray-100 h-12 px-6 font-medium rounded-2xl'
    />
  );
}
