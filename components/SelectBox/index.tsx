import type { SelectBoxProps } from './types';

export default function SelectBox({ name, options }: SelectBoxProps) {
  return (
    <select name={name}>
      <option value=''>Choose a property</option>
      {options?.map((option, index) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
