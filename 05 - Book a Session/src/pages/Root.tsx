import { Outlet } from 'react-router-dom';
import SessionsContextProvider from '../store/session-context';
import MainHeader from '../components/Navigation/mainHeader';

export default function Root() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
