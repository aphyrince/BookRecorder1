const Hero = ({ recordCount }: { recordCount: number }) => {
    return (
        <div>
            <h1>독서 기록기</h1>
            <p>읽은 권 수 : {recordCount}</p>
        </div>
    );
};

export default Hero;
