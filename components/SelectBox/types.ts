import type { ChangeEvent } from 'react';

export interface SelectBoxProps {
  name: string;
  options: string[];
  onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
