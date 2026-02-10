const Hero = ({ recordCount }: { recordCount: number }) => {
    return (
        <div className="w-full h-10 flex justify-between items-center px-4 text-white/80 border-b-2 border-lime-700">
            <h1 className="text-2xl ">독서 기록기</h1>
            <p>읽은 권 수 : {recordCount}</p>
        </div>
    );
};

export default Hero;
