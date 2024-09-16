import { useState } from 'react';
import './AccountPanel.scss';


interface ComponentProps {
    avatarPath: string;
    userName: string;
    tariffDeadline: string;

}

const AccountPanel: React.FC<ComponentProps> = ({ avatarPath, userName, tariffDeadline }) => {




    return (
        <section className="accountPanel subContainer">
            <div className='accountPanel__infoWrapper'>
                <div className='user'>
                    <img
                        className="user__icon"
                        src={avatarPath}
                        height="23px"
                        width="23px" />
                    <p className="user__userName">{userName}</p>
                </div>
                <div className='tariffDeadline'>
                    <div className='tariffDeadline__icon' />
                    <p className='tariffDeadline__label'>Тариф до {tariffDeadline}</p>
                </div>

            </div>
            <div className='accountPanel__buttonsWrapper'>

                <button className='button logout'>Выйти</button>


                <a href="#" className='button aboutUs'>
                    <p className='aboutUs__label' >О нас</p>
                    <div className='aboutUs__icon' />
                </a>


            </div>
        </section>

    );
}

export default AccountPanel;