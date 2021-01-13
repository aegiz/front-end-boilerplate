import Bottom from './Bottom';
import { FC } from 'react';
import Top from './Top';

const ComplexComponent: FC = () => {
    return (
        <>
            <Top />
            <Bottom />
        </>
    );
};

export default ComplexComponent;
