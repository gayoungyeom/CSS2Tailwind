import SelectBox from '../components/SelectBox';

const DUMMY_CSS = ['test1', 'test2', 'test3'];

export default function Home() {
  return (
    <>
      <div className='flex justify-around'>
        <SelectBox name='css' options={DUMMY_CSS} />
        <SelectBox name='tailwind' options={DUMMY_CSS} />
      </div>
    </>
  );
}
