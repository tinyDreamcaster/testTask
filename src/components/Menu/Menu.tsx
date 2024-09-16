import { useState } from 'react';
import './Menu.scss';
import MenuListItem from './MenuListItem';

function Menu() {

    const [openMenu, setOpenMenu] = useState(true);


    return (
        <section className="menu">
            <div className='dropdownMenu'>
                <div className='dropdownMenu__titleWrapper'>
                    <h2 className='dropdownMenu__title'><span className='dropdownMenu__title__fin'>фин</span> Контроль</h2>
                    <button className='dropdownMenu__openListButtonWrapper'
                        onClick={(e) => setOpenMenu(!openMenu)}>
                        <div className='dropdownMenu__openListButtonTitle'>Меню</div>
                        <div
                            className={openMenu ?
                                'dropdownMenu__openListIcon dropdownMenu__openListIcon_open'
                                : 'dropdownMenu__openListIcon'} />
                    </button>
                </div>
                {openMenu && (
                    <ul className='dropdownMenu__list'>
                        <MenuListItem buttonLabel={'Настройки'} iconPath={'./icons/gear-fill.svg'} />
                        <MenuListItem buttonLabel={'Внесение данных'} iconPath={'./icons/journal-plus.svg'} />
                        <MenuListItem buttonLabel={'Отчеты'} iconPath={'./icons/journal-bookmark-fill.svg'} />
                        <MenuListItem buttonLabel={'База знаний'} iconPath={'./icons/journals.svg'} />

                    </ul>
                )}
            </div>
        </section>

    );
}

export default Menu;