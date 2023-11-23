import Dropdown from '../dropdown/Dropdown';
import { useState, useEffect, useRef } from "react";
import './menuItems.css';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setDropdown((prev) => !prev)
    };

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <li className="menu-items" ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button type="button" className='menu-button' aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={handleDropdownToggle}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className='arrow' />}
                    </button>
                    <Dropdown submenus={items.submenu}
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;