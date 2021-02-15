import { useEffect, useState } from 'react';

type WindowDimentions = {
    width: number;
    height: number;
};

const useWindowDimensions = (): WindowDimentions => {
    const [hasMounted, setHasMounted] = useState<boolean>(false);
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        if (hasMounted) {
            handleResize();
            window.addEventListener('resize', handleResize);
            return (): void => window.removeEventListener('resize', handleResize);
        }
    }, [hasMounted]);

    return windowDimensions;
};

export default useWindowDimensions;
