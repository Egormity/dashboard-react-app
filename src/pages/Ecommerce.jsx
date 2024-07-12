import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

export default function Ecommerce() {
  const { currentColor } = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center lg:flex-nowrap'>
        <div className='bg-ecommerce m-3 flex h-44 w-full flex-col justify-center rounded-xl bg-white bg-cover p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color='white' bgColor={currentColor} text='Download' borderRadius='10px' size='md' />
          </div>
        </div>
        <div className='m-3 flex flex-wrap items-center justify-center gap-1'>
          {earningData.map(item => (
            <div
              key={item.title}
              className='rounded-2xl bg-white p-4 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='rounded-full p-4 text-2xl opacity-90 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span
                  className={`${item.percentage.includes('-') ? 'text-red-600' : 'text-green-600'} ml-2 text-sm`}
                >
                  {item.percentage}
                </span>
              </p>
              <p className='texxt-gray-400 mt-1 text-sm'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-10'>
        <div className='m-3 rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Revenue Updates</p>
            <div className='imtes-center flex gap-4'>
              <p className='imtes-center flex gap-2'>
                <span className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className='imtes-center flex gap-2'>
                <span className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap justify-center gap-10'>
            <div className='m-4 border-r-1 border-color pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-xs text-white hover:drop-shadow-lg'>
                    23%
                  </span>
                </p>
                <p className='mt-1 text-gray-500'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='mt-1 text-gray-500'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  id='line-sparkLine'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor}
                />
                <div className='mt-10'>
                  <Button color='white' bgColor={currentColor} text='DownloadReport' borderRadius='10px' />
                </div>
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
