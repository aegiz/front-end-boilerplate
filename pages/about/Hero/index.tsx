import { FC } from 'react';
import Image from 'next/image';
const Hero: FC = () => {
    return <Image src="/heroBanner.jpg" alt="Vercel Logo" width={800} height={150} />;
};

export default Hero;
