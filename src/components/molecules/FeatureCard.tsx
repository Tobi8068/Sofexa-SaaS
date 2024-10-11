const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    link: string;
}> = ({ icon, title, link }) => (
    <div className="flex flex-col items-center text-center">
        <div className="mb-16 text-gray-600">{icon}</div>
        <div className="w-full h-full flex flex-col justify-between gap-3 items-start">
            <h3 className="text-[16px] text-left">{title}</h3>
            <a href={link} className="text-blue-500 hover:underline text-sm">
                {link}
            </a>
        </div>
    </div>
)

export default FeatureCard;