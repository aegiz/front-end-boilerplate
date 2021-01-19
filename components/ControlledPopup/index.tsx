import { Popup } from 'semantic-ui-react';
import { useState } from 'react';

const ControlledPopup = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Popup
            trigger={<button>click to open</button>}
            content={<button onClick={() => setIsOpen(!isOpen)}>click to close</button>}
            on="click"
            open={isOpen}
            onOpen={() => setIsOpen(!isOpen)}
        />
    );
};

export default ControlledPopup;
