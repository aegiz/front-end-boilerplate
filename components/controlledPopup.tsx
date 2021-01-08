import { FC, useState } from 'react';

import { Popup } from 'semantic-ui-react';

const ControlledPopup: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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
