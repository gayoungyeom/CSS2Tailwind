import Box from '../components/Box';
import SelectBox from '../components/SelectBox';
import { ASPECT_RATIO } from '../static/LAYOUT';

export default function Home() {
  const TEST = Object.keys(ASPECT_RATIO);

  return (
    <>
      <div className='flex justify-around'>
        <Box title='CSS PROPERTY'>
          <SelectBox name='css' options={TEST} />
        </Box>
        <Box title='TAILWIND CLASS' />
      </div>
    </>
  );
}
