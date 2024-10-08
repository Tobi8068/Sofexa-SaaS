import React from 'react';
import Sidebar from '../components/organisms/Sidebar';
import Header from '../components/organisms/Header';
import ToolSection from '../components/organisms/ToolSection';
import ContentHeader from '../components/molecules/ContentHeader';
import Zendesk from "../assets/img/image 29.png";
import HubSpot from "../assets/img/image 28.png";
import Salesforce from "../assets/img/image 30salsforce.png";

const Dashboard: React.FC = () => {
    const ventureStackTools = [
        {
            name: 'Sales Force',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: Salesforce,
            isVerified: true,
            tag: '#1st in CRM',
        },
        {
            name: 'Hub Spot',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: HubSpot,
            isVerified: true,
            tag: 'Stackfolio Choice',
        },
        {
            name: 'Zendesk',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: Zendesk,
            isVerified: true,
            tag: 'Stackfolio Choice',
        },
    ];
    const topCRMPicks = [
        {
            name: 'Sales Force',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: Salesforce,
            isVerified: true,
            tag: '#1st in CRM',
        },
        {
            name: 'Hub Spot',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: HubSpot,
            isVerified: true,
            tag: '#1st in CRM',
        },
        {
            name: 'Zendesk',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: Zendesk,
            isVerified: true,
            tag: '#1st in CRM',
        },
    ];
    const topAITools = [
        {
            name: 'Chat GPT',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: 'https://logo.clearbit.com/salesforce.com',
            isVerified: true,
            tag: '#1st in AI',
        },
        {
            name: 'Dall-E',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: 'https://logo.clearbit.com/hubspot.com',
            isVerified: true,
            tag: 'User Choice',
        },
        {
            name: 'Zendesk',
            description: 'CRM Tool',
            rating: 4.8,
            users: '1M+',
            logo: 'https://logo.clearbit.com/zendesk.com',
            isVerified: true,
            tag: 'Top Rated',
        },
    ];

    const topDataTools = [
        {
            name: 'Apache Kafka',
            description: 'Data Engineering Tools',
            rating: 4.8,
            users: '1M+',
            logo: 'https://logo.clearbit.com/salesforce.com',
            isVerified: true,
            tag: '#1st in AI',
        },
        {
            name: 'Redis',
            description: 'Data Engineering Tools',
            rating: 4.8,
            users: '1M+',
            logo: 'https://logo.clearbit.com/hubspot.com',
            isVerified: true,
            tag: 'User Choice',
        },
        {
            name: 'Kubernetes',
            description: 'Data Engineering Tools',
            rating: 4.8,
            users: '1M+',
            logo: 'https://logo.clearbit.com/zendesk.com',
            isVerified: true,
            tag: 'Top Rated',
        },
    ];


    return (
        <div className="flex flex-col h-screen bg-gray-100 w-full">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <Sidebar />
                <main className="flex flex-col overflow-x-hidden overflow-y-auto bg-[#DDE3EF] pt-6 w-full">
                    <ContentHeader />
                    <div className="w-full">
                        <div className="px-6">
                            <h2 className="text-[24px] font-semibold mb-2 text-gray-800">Hello, Anna!</h2>
                            <p className="text-gray-500 font-normal text-[16px]">Here's your overview of last week</p>
                        </div>
                        <div className='w-full flex flex-col gap-6'>
                            <ToolSection title="Boston company venture stack" tools={ventureStackTools} />
                            <ToolSection title="Top CRM Picks" tools={topCRMPicks} showFeedback />
                            <ToolSection title="Top AI Tools" tools={topAITools} showFeedback />
                            <ToolSection title="Top Data Engineering Tools" tools={topDataTools} showFeedback />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;