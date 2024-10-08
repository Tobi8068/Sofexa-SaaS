import React from 'react';
import { Search } from 'lucide-react';

const SearchInput: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-1 rounded-[20px] py-[24px] px-[32px] bg-[#E8EDEE] focus:outline-none focus:ring-2 focus:ring-blue-300 ">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full border-none outline-none bg-transparent text-[24px]"
      />
      <Search className="text-gray-400" size={18} />
    </div>
  );
};

export default SearchInput;