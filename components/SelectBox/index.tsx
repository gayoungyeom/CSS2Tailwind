import type { SelectBoxProps } from './types';

export default function SelectBox({ name, options }: SelectBoxProps) {
  return (
    <div className='min-w-[160px] w-2/5 h-80 p-2 border-2 rounded-xl'>
      <div className='text-2xl font-bold'>{name.toUpperCase()}</div>
      <select name={name}>
        {options?.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
