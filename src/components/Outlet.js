import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Dashboard() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
}

export default Dashboard;