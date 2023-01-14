import { useState } from 'react';
import Box from '../components/Box';
import SelectBox from '../components/SelectBox';
import { ASPECT_RATIO } from '../static/LAYOUT';

import type { ChangeEvent } from 'react';

export default function Home() {
  const TEST = Object.keys(ASPECT_RATIO);

  const [curClass, setCurClass] = useState('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCurClass(ASPECT_RATIO[selected]);
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
