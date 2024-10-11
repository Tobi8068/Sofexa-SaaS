const Footer: React.FC = () => (
    <footer className="bg-black text-gray-300 py-20">
        <div className="w-full px-6 flex justify-between gap-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                <div>
                    <h4 className="font-semibold mb-9 text-white text-[20px]">STACKFOLIO</h4>
                    <ul className="space-y-2 text-[16px] flex flex-col gap-[21px]">
                        <li>Questions</li>
                        <li>Help</li>
                        <li>Chat</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-9 text-white text-[20px]">PRODUCTS</h4>
                    <ul className="space-y-2 text-[16px] flex flex-col gap-[21px]">
                        <li>Teams</li>
                        <li>Advertisement</li>
                        <li>Talent</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-9 text-white text-[20px]">Company</h4>
                    <ul className="space-y-2 text-[16px] flex flex-col gap-[21px]">
                        <li>About</li>
                        <li>Work Here</li>
                        <li>Legal</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-9 text-white text-[20px]">STACKFOLIO COMMUNITY</h4>
                    <ul className="space-y-2 text-[16px] flex flex-col gap-[21px]">
                        <li>Software</li>
                        <li>Product Development</li>
                        <li>Design UI/UX</li>
                        <li>Provider</li>
                        <li>Developer</li>
                    </ul>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col justify-start gap-6">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter/X</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
        </div>
    </footer>
)

export default Footer;