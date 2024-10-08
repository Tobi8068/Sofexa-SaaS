import React from "react";
import Button from "../atoms/Button"
import SearchInput from "../atoms/SearchInput"
import { Search, Layers, BarChart } from 'lucide-react';
const ContentHeader: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = React.useState(window.matchMedia('(max-width: 639px)').matches);
    const checkScreenSize = () => {
        setIsSmallScreen(window.matchMedia('(max-width: 639px)').matches);
    };

    React.useEffect(() => {
        // Add event listener for changes in media query
        const mediaQueryList = window.matchMedia('(max-width: 639px)');
        mediaQueryList.addEventListener('change', checkScreenSize);

        return () => {
            mediaQueryList.removeEventListener('change', checkScreenSize);
        };
    }, []);
    return (
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:items-center justify-between mb-6 px-6">
            <div className="flex items-center justify-between gap-3 lg:gap-[24px] w-full lg:w-auto">
                <Button>{!isSmallScreen ? "Discover" : (<Search></Search>)}</Button>
                <Button variant="secondary">{!isSmallScreen ? "My Stack" : (<Layers></Layers>)}</Button>
                <Button variant="secondary">{!isSmallScreen ? "Analytics" : (<BarChart></BarChart>)}</Button>
            </div>
            <div className="lg:w-[35%] w-full ">
                <SearchInput />
            </div>
        </div>
    )
}

export default ContentHeader;