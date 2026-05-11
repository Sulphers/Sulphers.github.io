import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import ScrollToTop from '../components/ScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <ScrollToTop />
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
