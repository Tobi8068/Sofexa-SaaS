import React from 'react';
import Sidebar from '../components/organisms/Sidebar';
import Header from '../components/organisms/Header';
import ToolSection from '../components/organisms/ToolSection';
import ContentHeader from '../components/molecules/ContentHeader';
import Zendesk from "../assets/img/image 29.png";
import HubSpot from "../assets/img/image 28.png";
import Salesforce from "../assets/img/image 30salsforce.png";
import Image1 from "../assets/img/image 34.png";
import Image2 from "../assets/img/image 8.png";
import Image3 from "../assets/img/image 9.png";
import Image4 from "../assets/img/image 7.png";
import Image5 from "../assets/img/image 31.png";
import Image6 from "../assets/img/image 13.png";
import Image7 from "../assets/img/image 20.png";
import Image8 from "../assets/img/image 19.png";
import Image9 from "../assets/img/image 16.png";
import Image10 from "../assets/img/image 32.png";
import Image11 from "../assets/img/image 33.png";
import Question from "../assets/img/image 23.png";
import X from "../assets/img/image 24.png";
import Layer from '../assets/img/fi_layers.png';
import Window from '../assets/img/fi_sidebar.png';
import ImageContainer from '../components/atoms/ImageContainer';
import FeatureCard from '../components/molecules/FeatureCard';
import Footer from '../components/organisms/Footer';

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
                    <div className='w-full p-6 flex flex-col gap-6'>
                        <div className='flex w-full justify-between items-start'>
                            <h1 className='text-2xl'>Explore technical topics and other disciplines across the Q&A communities</h1>
                            <button className='text-[16px] text-[#006EFF] border border-[#006EFF] rounded-[10px] px-6 py-[14px]'>Explore the network</button>
                        </div>
                        <div className='w-full grid grid-rows-4 grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6 sm:h-[800px] lg:h-[538px]'>
                            <div className='col-span-2 row-span-4'>
                                <ImageContainer src={Image1} alt='image1' />
                            </div>
                            <div className='col-span-2 row-span-2'>
                                <ImageContainer src={Image2} alt='image2' />
                            </div>
                            <div className='col-span-2 row-span-2'>
                                <ImageContainer src={Image3} alt='image3' />
                            </div>
                            <div className='col-span-4 row-span-2 flex justify-center items-center bg-white rounded-[10px]'>
                                <h1 className='text-[96px] font-bold text-[#006EFF]'>SF</h1>
                            </div>
                            <div className='col-span-2 row-span-2'>
                                <ImageContainer src={Image4} alt='image4' />
                            </div>
                            <div className='col-span-2 row-span-2'>
                                <ImageContainer src={Image5} alt='image5' />
                            </div>
                            <div className='col-span-2 row-span-2 grid grid-rows-2 grid-cols-2 gap-4 sm:gap-6'>
                                {[Image6, Image7, Image8, Image9].map((src, index) => (
                                    <ImageContainer key={index} src={src} alt={`image${index + 6}`} />
                                ))}
                            </div>
                            <div className='col-span-2 row-span-2'>
                                <ImageContainer src={Image2} alt='image2' />
                            </div>
                            <div className='col-span-2 row-span-2 grid grid-rows-2 grid-cols-2 gap-4 sm:gap-6'>
                                {[Image10, Image8, Image11, Image6].map((src, index) => (
                                    <ImageContainer key={index + 10} src={src} alt={`image${index + 10}`} />
                                ))}
                            </div>
                            <div className='col-span-2 row-span-2'>
                                <ImageContainer src={Image3} alt='image3' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-[#D9D9D9]'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[80px] px-6 py-[60px]">
                            <FeatureCard
                                icon={<img src={Question} alt='Question' />}
                                title="Check out our FAQ about how Stackfolio works"
                                link="Visit help center >"
                            />
                            <FeatureCard
                                icon={<img src={X} alt='X' />}
                                title="To give feedback about our platform. Please visit our X-community"
                                link="Visit X>"
                            />
                            <FeatureCard
                                icon={<img src={Layer} alt='Layer' />}
                                title="Looking to publish your libraries/software on Stackfolio."
                                link="Visit Publish help center>"
                            />
                            <FeatureCard
                                icon={<img src={Window} alt='Window' />}
                                title="Finding legal document for our product and services."
                                link="Visit Legal>"
                            />
                        </div>
                    </div>
                    <Footer></Footer>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;