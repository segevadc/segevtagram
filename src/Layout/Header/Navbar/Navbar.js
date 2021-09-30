import {useCallback, useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = useCallback((page) => {
        setActiveItem(page);
    }, []);

    return (
        <Menu pointing secondary>
                <Menu.Item>
                    <div id="logo">
                        Segevgram
                    </div>
                </Menu.Item>
            </Menu>
    )
}