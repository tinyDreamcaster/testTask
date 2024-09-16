import { useState } from "react";


interface ComponentProps {
    buttonLabel: string;
    iconPath: string;

}

const MenuListItem: React.FC<ComponentProps> = ({ buttonLabel, iconPath }) => {

    const [itemActive, setItemActive] = useState(false);



    return (
        <li className={'dropdownMenu__list__item'}>

            <button className="itemButton"
                onClick={(e) => setItemActive(!itemActive)}>
                <div className="itemButton__titleWrapper">
                    <img
                        className="itemButton__icon"
                        src={iconPath}
                        height="16px"
                        width="16px" />

                    <p className="itemButton__title">{buttonLabel}</p>
                </div>
                <div className="itemButton__openIcon" />
            </button>
            {itemActive && (
                <ul className="itemOptions">
                    <li>Опция - 1</li>
                    <li>Опция - 2</li>
                    <li>Опция - 3</li>
                </ul>
            )}


        </li>

    );
}

export default MenuListItem;