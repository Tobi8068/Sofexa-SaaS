import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  isActive?: boolean;
  onClick ?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, isActive = false, onClick }) => {
  return (
    <div className={`py-4 cursor-pointer px-6 border-l-[3px] ${isActive ? 'border-l-blue-500 ' : 'hover:border-l-gray-100 border-l-white'}`}
      onClick={onClick}>
      <Icon className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
    </div>
  );
};

export default NavItem;