import Dropdown from '../dropdown/Dropdown';
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setDropdown((prev) => !prev)
    };

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={handleDropdownToggle}
                    >
                        {items.title}{' '}
                    </button>
                    <Dropdown submenus={items.submenu}
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