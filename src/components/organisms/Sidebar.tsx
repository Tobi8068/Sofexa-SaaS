import React from 'react';
import NavItem from '../molecules/NavItem';
import { Home, Clock, Globe, Settings, Power } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const navItems = [
    { icon: Home },
    { icon: Clock },
    { icon: Globe },
    { icon: Settings },
  ];
  const handleNavItemClick = (index: any) => {
    setActiveIndex(index);
  };
  return (
    <div className="bg-white h-full w-fit flex flex-col items-center py-8 space-y-8">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            isActive={activeIndex === index}
            onClick={() => handleNavItemClick(index)}
          />
        ))}
      </nav>
      <div className="mt-auto">
        <NavItem icon={Power} />
      </div>
    </div>
  );
};

export default Sidebar;