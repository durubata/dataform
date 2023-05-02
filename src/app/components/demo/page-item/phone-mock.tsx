import React from 'react';
import { IFrame } from './iframe';

const IPhoneMaxMockup = ( { page, children }) => {
    return (
        <div className='flex items-center justify-center relative'>
            <div className="relative flex justify-center h-[900px] w-[450px]  border-8 border-black rounded-2xl shadow">
                <span className="border border-black bg-black w-16 h-4 mt-2 rounded-full"></span>
                <span className="absolute -right-2.5 top-20  border-2 border-black h-10 rounded-md"></span>
                <span className="absolute -left-2.5 top-16  border-2 border-black h-6 rounded-md"></span>
                <span className="absolute -left-2.5 top-32  border-2 border-black h-12 rounded-md"></span>
                <span className="absolute -left-2.5 top-48  border-2 border-black h-12 rounded-md"></span>
            </div>
            {/* <div className='absolute bg-red-50 h-[884px] w-[434px] rounded-lg overflow-auto p-1'>{children}</div> */}
            <IFrame  page={page} className='absolute bg-cyan-50 h-[884px] w-[434px] rounded-lg overflow-auto p-1' >{children}</IFrame>
        </div>

    );
};

export default IPhoneMaxMockup;


