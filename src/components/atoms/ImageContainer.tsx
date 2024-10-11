const ImageContainer = ({ src, alt }: { src: any; alt: any }) => (
    <div className='flex justify-center items-center bg-white w-full h-full rounded-[10px]'>
        <img src={src} alt={alt} />
    </div>
);
export default ImageContainer;