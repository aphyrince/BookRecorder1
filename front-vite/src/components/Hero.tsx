import { useState } from "react";

const Hero = () => {
    const [bookCount, setBookCount] = useState<number>(0);
    return (
        <div>
            <h1>독서 기록기</h1>
            <p>읽은 권 수 : {bookCount}</p>
        </div>
    );
};

export default Hero;
