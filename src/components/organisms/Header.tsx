import React from 'react';
import Avatar from '../atoms/Avatar';
import { Bell } from 'lucide-react';
import AvatarImg from '../../assets/img/image 4.png'

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200">
      <div className='flex items-center gap-[32px]'>
        <h1 className="text-4xl font-bold text-blue-600">SF</h1>
        <h1 className="text-2xl font-bold text-[#777272] hidden sm:flex">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="w-8 h-8 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="text-right text-[16px] text-[#777272] hidden sm:block">
            <p className="font-normal">Anna Bronton</p>
            <p className="font-normal">Software Engineer</p>
          </div>
          <Avatar src={AvatarImg} alt="Anna Bronton" />
        </div>
      </div>
    </header>
  );
};

export default Header;