import { useEffect, useState } from 'react';
import './Contacts.scss';

interface ComponentProps {
    contactType: string;
    contactLink: string;
    contactLinkTitle: string;
}

const Contact: React.FC<ComponentProps> = ({ contactType, contactLink, contactLinkTitle }) => {

    const [noLink, setNoLink] = useState(false);

    useEffect(() => {
        if (contactLink == '') {
            setNoLink(true);
        } else {
            setNoLink(false);
        }
    }, []);

    return (
        <li className='contact'>
            <p className='contact__type'>{contactType}</p>
            {
                noLink ?
                    <p className='contact__label'>{contactLinkTitle}</p>
                    :
                    <a className='contact__label' href={contactLink}>{contactLinkTitle}</a>

            }

        </li >

    );
}

export default Contact;