import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Vendors from './pages/Vendors';

function App() {
    const location = useLocation();
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <div className="flex-grow pt-16">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    } />
                    <Route path="/about" element={
                        <PageTransition>
                            <About />
                        </PageTransition>
                    } />
                    <Route path="/vendors" element={
                        <PageTransition>
                            <Vendors />
                        </PageTransition>
                    } />
                </Routes>
                <ScrollToTopButton />
            </div>
            {/* Footer */}
            <footer className="w-screen bg-stone-100 border-t border-stone-200 mt-auto left-1/2 right-1/2 -mx-[50vw] relative">
                <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-base text-gray-600">
                        &copy; {new Date().getFullYear()} Mill Street Farmers Market. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;