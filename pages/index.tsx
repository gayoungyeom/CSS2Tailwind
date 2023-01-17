import { useState } from 'react';
import Box from '../components/Box';
import SelectBox from '../components/SelectBox';
import { P2C } from '../static/P2C';

import type { ChangeEvent } from 'react';

export default function Home() {
  const TEST = Object.keys(P2C);

  const [curClass, setCurClass] = useState('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCurClass(P2C[selected]);
  };

  return (
    <>
      <div className='flex justify-around'>
        <Box title='CSS PROPERTY'>
          <SelectBox name='css' options={TEST} onchange={handleSelectChange} />
        </Box>
        <Box title='TAILWIND CLASS'>
          <div className='w-full text-xl'>{curClass}</div>
        </Box>
      </div>
    </>
  );
}
