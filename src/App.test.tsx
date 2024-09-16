import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import FormResidues from './components/FormResidues/FormResidues';
import Contacts from './components/Contacts/Contacts';
import Menu from './components/Menu/Menu';
import AccountPanel from './components/AccountPanel/AccountPanel';

test('renders contact us', () => {
  render(<App />);
  const linkElement = screen.getByText(/Связаться с нами/i);
  expect(linkElement).toBeInTheDocument();
});


test('import/export', () => {
  render(<FormResidues />);
  const linkElementImport = screen.getByText(/Загрузить данные из csv/i);
  const linkElementExport = screen.getByText(/Экспорт/i);
  expect(linkElementImport).toBeInTheDocument();
  expect(linkElementExport).toBeInTheDocument();
});


test('tec support', () => {
  render(<Contacts />);
  const linkElement = screen.getByText(/Техническая поддержка/i);
  expect(linkElement).toBeInTheDocument();
});

test('menu', () => {
  render(<Menu />);
  const linkElement = screen.getByText(/Контроль/i);
  expect(linkElement).toBeInTheDocument();
});


test('account menu', () => {
  render(<AccountPanel avatarPath={'./icons/person-circle.svg'} userName={'Иванов И.И.'} tariffDeadline={'15.04.2024'} />);
  const linkElementTariff = screen.getByText(/Тариф до/i);
  const linkElementLogout = screen.getByText(/Выйти/i);
  const linkElementAbout = screen.getByText(/О нас/i);
  expect(linkElementTariff).toBeInTheDocument();
  expect(linkElementLogout).toBeInTheDocument();
  expect(linkElementAbout).toBeInTheDocument();
});