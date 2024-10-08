import React from 'react';
import ToolCard from '../molecules/ToolCard';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface ToolSectionProps {
  title: string;
  tools: Array<{
    name: string;
    description: string;
    rating: number;
    users: string;
    logo: string;
    isVerified?: boolean;
    tag?: string;
  }>;
  showFeedback?: boolean;
}

const ToolSection: React.FC<ToolSectionProps> = ({ title, tools, showFeedback = false }) => {
  return (
    <section className={`p-6 bg-gradient-to-r ${
        title === "Top CRM Picks" ? "from-[#94B5DF] to-[#4A6E9D]" : 
        title === 'Top AI Tools' ? "from-[#88cac9] to-[#59868b]" : 
        title === 'Top Data Engineering Tools' ? "from-[#bebfdd] to-[#545991]": ''}`}>
      <div className="flex items-center justify-start gap-[18px] mb-4">
        <div className='flex sm:flex-row flex-col items-start sm:items-center gap-2'>
          <h2 className="text-[20px] font-semibold text-gray-800">{title}</h2>
          {
            title === "Boston company venture stack" ? (
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/100?img=${i + 1}`}
                    alt={`Team member ${i + 1}`}
                  />
                ))}
              </div>
            ) : ""
          }
        </div>
        {showFeedback && (
          <div className="flex space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ThumbsDown className="w-5 h-5 text-black" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ThumbsUp className="w-5 h-5 text-black" />
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolSection;