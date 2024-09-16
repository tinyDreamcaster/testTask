import Contact from './Contact';
import './Contacts.scss';


function Contacts() {
    return (
        <section className='contacts'>
            <h2 className='contactsTitle'>Техническая поддержка</h2>
            <ul className='contactsList'>
                <Contact contactType={'Номер поддержки:'} contactLink={'tel:+79001111111'} contactLinkTitle={'8 (999) 999 99 99'} />
                <Contact contactType={'Почта поддержки:'} contactLink={'mailto:pf1@werthesest.ru'} contactLinkTitle={'pf1@werthesest.ru'} />
                <Contact contactType={'Часы работы:'} contactLink={''} contactLinkTitle={'Пн - Пт с 9:00 до 19:00 мск'} />
            </ul>
            <ul className='contactsOther'>
                <li><a href="#">Пользовательское соглашение</a></li>
                <li><a href="#">Политика конфиденциальности</a></li>
                <li><a href="#">Юридическая информация</a></li>
                <li><a href="#">Публичная оферта</a></li>
            </ul>
        </section>

    );
}

export default Contacts;