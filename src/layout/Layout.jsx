import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="site-main">
                <Outlet />
            </main>
            <ScrollTop />
            <Footer />
        </>
    );
}

export default Layout;
