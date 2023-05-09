import { Outlet } from 'react-router';
import './App.css';
import Homepage from './pages/homepage';

export default function App() {
  return (
    <>
      <Homepage />
      <Outlet />
    </>
  );
}
