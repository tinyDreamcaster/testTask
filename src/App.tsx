import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Menu from './components/Menu/Menu';
import Contacts from './components/Contacts/Contacts';
import AccountPanel from './components/AccountPanel/AccountPanel';
import FormResidues from './components/FormResidues/FormResidues';


function App() {
  return (
    <div className='pageBody'>
      <div
        className="container"
      >
        <div className="row">
          <div className="col-3">
            <Menu />
            <Contacts />
            <button className='button button_contact'>
              <div className="button__icon" />
              <p className="button__label">Связаться с нами</p>
            </button>
          </div>
          <div className="col-9">
            <AccountPanel avatarPath={'./icons/person-circle.svg'} userName={'Иванов И.И.'} tariffDeadline={'15.04.2024'} />
            <FormResidues />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
