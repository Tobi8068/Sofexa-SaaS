import React from 'react';
import { Star, Heart, Bookmark, Plus } from 'lucide-react';
import CheckIcon from '../../assets/img/image 6.png'

interface ToolCardProps {
  name: string;
  description: string;
  rating: number;
  users: string;
  logo: string;
  isVerified?: boolean;
  tag?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, rating, users, logo, isVerified = false, tag }) => {
  return (
    <div className="bg-white p-[18px] rounded-[25px] shadow-sm">
      <div className="flex items-start sm:items-center justify-between mb-[72px]">
        <div className="flex flex-col justify-center items-start">
          <div>
            <h3 className="font-semibold flex items-center text-[20px]">
              {name}
              {isVerified && (
                <img src={CheckIcon} alt="Verified" className="w-6 h-6 ml-1" />
              )}
            </h3>
            <p className="text-[16px] text-gray-500">{description}</p>
          </div>
          {tag && <span className="text-sm">{tag}</span>}
        </div>
        <div className="flex sm:flex-row flex-col items-start sm:items-center gap-2">
          <div className="flex flex-col justify-center gap-1 items-start">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-1">{rating}</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            <span className='text-sm'>{users}</span>
          </div>
          <img src={logo} alt={`${name} logo`} className="w-12 h-12" />
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100"><Heart className="w-6 h-6 text-[#00000099]" /></button>
        <button className="p-2 rounded-full hover:bg-gray-100"><Bookmark className="w-6 h-6 text-[#00000099]" /></button>
      <button className="p-2 rounded-full hover:bg-gray-100"><Plus className="w-6 h-6 text-[#00000099]" /></button>
      </div>
    </div>
  );
};

export default ToolCard;