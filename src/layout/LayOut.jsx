import { Outlet } from 'react-router-dom'
// import Navbar from '../componants/Navbar'
// import Footer from '../componants/Footer'
import ScrollToTop from './ScrollToTop'
import Footer from '../componants/Footer'
import Navbar from '../componants/Navbar'


const LayOut = () => {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayOut