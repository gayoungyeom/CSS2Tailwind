import type { SelectBoxProps } from './types';

const TEXT_LIMIT = 30;

export default function SelectBox({ name, options, onchange }: SelectBoxProps) {
  return (
    <select
      name={name}
      onChange={onchange}
      className='w-full text-xl outline-none cursor-pointer'
    >
      <option className='text-slate-300' value=''>
        Choose a property
      </option>
      {options?.map((option, index) => (
        <option className='' key={`${option}-${index}`} value={option}>
          {option.length < TEXT_LIMIT
            ? option
            : `${option.substring(0, TEXT_LIMIT)}...`}
        </option>
      ))}
    </select>
  );
}
