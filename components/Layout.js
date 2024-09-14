import Header from './Header';
import SideBar from './SideBar';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
