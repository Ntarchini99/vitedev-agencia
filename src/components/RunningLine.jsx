import React from 'react';
import done from '@/assets/done.png';

const dataSet = [
  'Full responsive Web',
  'Aceptamos criptomonedas y monedas estables',
  'Velocidad de página optimizada',
  'Soportes 24/7',
  'Full responsive Web',
  'Aceptamos criptomonedas y monedas estables',
  'Velocidad de página optimizada',
  'Soportes 24/7',
  'Full responsive Web',
  'Aceptamos criptomonedas y monedas estables',
  'Velocidad de página optimizada',
  'Soportes 24/7',
];

const RunningLine = () => {
  return (
    <div className='relative w-full py-6 border-t-[1px] border-b-[1px] border-blue-dark overflow-hidden running-line'>
      <div className='absolute inset-0 sm:animate-slide 2xs:animate-xslide'>
        <div className='flex justify-between items-center h-full'>
          {dataSet.map((data, dataIndex) => (
            <div key={dataIndex} className='flex whitespace-nowrap px-4'>
              <img src={done} alt="done-icon" className='px-2 py-2' />
              <p className='text-blue-dark font-medium pt-1 uppercase'>{data}</p>
              <div className='text-blue-dark px-4 pt-1'>&bull;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RunningLine;
