import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? 'bg-green-700 text-white' : 'text-gray-300 hover:bg-green-700 hover:text-white';
    };

    // Close menu when clicking outside or when location changes
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        // Close menu when route changes
        closeMenu();

        // Add event listener for outside clicks
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [location]); // Re-run when location changes

    return (
        <nav className="bg-green-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50" ref={menuRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center" onClick={closeMenu}>
                                <div className="bg-white p-1.5 rounded-full mr-2 flex items-center justify-center h-10 w-10">
                                    <img 
                                        className="h-7 w-7" 
                                        src="https://i.imgur.com/JKKBdSG.png" 
                                        alt="Mill Street Farmers Market Logo" 
                                    />
                                </div>
                                <span className="hidden md:inline text-gray-50 text-xl font-bold">Mill Street Farmers Market</span>
                            </Link>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')} hover:text-white`} onClick={closeMenu}>Home</Link>
                            <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')} hover:text-white`} onClick={closeMenu}>About</Link>
                            <Link to="/vendors" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/vendors')} hover:text-white`} onClick={closeMenu}>Vendors</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-green-700 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')} hover:text-white`} onClick={closeMenu}>Home</Link>
                            <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')} hover:text-white`} onClick={closeMenu}>About</Link>
                            <Link to="/vendors" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/vendors')} hover:text-white`} onClick={closeMenu}>Vendors</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
