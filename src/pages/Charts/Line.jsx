import { Header, LineChart } from '../../components';

export default function Line() {
  return (
    <div className='dark:bg-secondary-dark m-4 mt-24 rounded-3xl bg-white p-10'>
      <Header category='Chart' title='Inflation Rate' />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  );
}
