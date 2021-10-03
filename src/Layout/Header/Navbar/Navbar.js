import {Menu} from 'semantic-ui-react';
import {Link} from "react-router-dom";
/*
import {useCallback, useState} from 'react';
import {Link} from "react-router-dom";
*/

export const Navbar = () => {
    /*
        const [activeItem, setActiveItem] = useState('home');

        const handleItemClick = useCallback((page) => {
            setActiveItem(page);
        }, []);
    */


    return (
        <Menu pointing secondary>
            <Link to={"/"}>
                <Menu.Item>
                    <div id="logo">
                        Segevgram
                    </div>
                </Menu.Item>
            </Link>
        </Menu>
    )
}