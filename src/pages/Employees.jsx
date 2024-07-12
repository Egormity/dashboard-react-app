import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

export default function Employees() {
  return (
    <div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
      <Header category='Page' title='Employees' />
      <GridComponent dataSource={employeesData} allowPaging toolbar={['Search']} width='auto'>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
}
