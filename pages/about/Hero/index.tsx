import Image from 'next/image';

interface Props {
    url?: string;
}

const Hero = ({ url = '/defaut.png' }: Props): JSX.Element => {
    return <Image src={url} alt="Vercel Logo" width={800} height={150} />;
};

export default Hero;
