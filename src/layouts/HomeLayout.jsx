import React from 'react';
import LeftAside from '../components/home/leftAside';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-1'>
                <LeftAside></LeftAside>
            </div>
            <div className='col-span-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;