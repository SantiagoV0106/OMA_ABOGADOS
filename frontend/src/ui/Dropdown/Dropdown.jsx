// Eslint
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export function Dropdown({dropdownItem, closeDropdown}) {
    return (
        <div className="dropdown">
            {
                dropdownItem.map(({ id, link, name }) => (
                    <Link
                        onClick={closeDropdown}
                        key={id}
                        to={link}>
                        {name}
                    </Link>
                ))
            }
        </div>
    )
}