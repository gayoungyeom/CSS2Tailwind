import type { BoxProps } from './types';

export default function Box({ title, children }: BoxProps) {
  return (
    <div className='min-w-[160px] w-2/5 h-80 p-4 border-2 rounded-xl'>
      <div className='pb-2 mb-2 text-2xl font-bold border-b-2'>{title}</div>
      {children}
    </div>
  );
}
