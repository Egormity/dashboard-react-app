// import {
//   ChartComponent,
//   SeriesDirective,
//   SeriesCollectionDirective,
//   Inject,
//   DateTime,
//   Legend,
//   SplineAreaSeries,
// } from '@syncfusion/ej2-react-charts';

// import { Header } from '../../components';
// import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

// export default function Bar() {
//   return (
//     <div className='dark:bg-secondary-dark m-4 mt-24 rounded-3xl bg-white p-10'>
//       <Header category='Chart' title='Inflation Rate in Percentage' />
//       <div className='w-full'>
//         <ChartComponent
//           id='bar-chart'
//           height='420px'
//           primaryXAxis={barPrimaryXAxis}
//           primaryYAxis={barPrimaryYAxis}
//           chartbar={{ border: { width: 0 } }}
//           tooltip={{ enable: true }}
//         >
//           <Inject services={[SplineAreaSeries, DateTime, Legend]} />
//           <SeriesCollectionDirective>
//             {barCustomSeries.map((item, index) => (
//               <SeriesDirective key={index} {...item} />
//             ))}
//           </SeriesCollectionDirective>
//         </ChartComponent>
//       </div>
//     </div>
//   );
// }
