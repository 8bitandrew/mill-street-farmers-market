import ImageCarousel from '../components/ImageCarousel';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section with Carousel and Header Overlay */}
            <div className="relative w-screen h-[24rem] md:h-[24rem] lg:h-[24rem] left-1/2 right-1/2 -mx-[50vw] -mt-8 pt-8 overflow-hidden">
                {/* Image Carousel */}
                <div className="absolute inset-0 w-full">
                    <ImageCarousel 
                        images={[
                            'https://i.imgur.com/Nk2XKM8.png',
                            'https://i.imgur.com/zdz2Hby.jpeg',
                            'https://i.imgur.com/BuzRU8Z.png',
                            'https://i.imgur.com/JKKBdSG.png'
                        ]}
                        interval={10000}
                        className="h-full w-full object-cover"
                        showArrows={false}
                        showDots={false}
                    />
                </div>
                
                {/* Overlay with Market Info */}
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Mill Street Farmers Market</h1>
                        <div className="text-lg text-white mb-4">
                            <p className="text-white">August 1st - September 26th, 2025</p>
                            <p className="text-white">Every Friday | 3:00 PM - 7:00 PM</p>
                            <p className="text-white">350 Mill Street, Birnamwood, WI</p>
                        </div>
                        <CountdownTimer />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="w-full">
                {/* Our Mission */}
                <section className="w-screen bg-teal-50 py-16 left-1/2 right-1/2 -mx-[50vw] relative">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-4">Our Mission</h1>
                        <div className="w-24 h-1.5 bg-teal-400 mx-auto mb-8 rounded-full"></div>
                    <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-700">
                        <p className="mb-4">
                        The vision of Mill Street Farmers Market is to support the growers and producers of agricultural commodities by offering a location for them to sell their produce to the local community. We hope to support local economic activity and to improve the sustainability of growing and producing these farm products and associated goods.
                        </p>
                        <p>
                        To promote a healthy lifestyle by making available a wide variety of quality, fresh produce and other farm products.
                        </p>
                    </div>
                    </div>
                </section>
                
                {/* Vendors Section */}
                <section className="w-screen bg-amber-50 py-16 left-1/2 right-1/2 -mx-[50vw] relative">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Join Our Community of Vendors</h2>
                            <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-6 rounded-full"></div>
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                                Showcase your products to a community that values local, sustainable goods. 
                                Connect directly with customers who appreciate quality and care.
                            </p>
                            <div className="mt-8">
                                <a 
                                    href="/vendors" 
                                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md transition duration-150 shadow-md hover:shadow-lg"
                                >
                                    Become a Vendor
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Market Info */}
                <section className="w-screen bg-green-50 py-16 left-1/2 right-1/2 -mx-[50vw] relative">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-4">Market Information</h2>
                        <div className="w-24 h-1.5 bg-green-400 mx-auto mb-8 rounded-full"></div>
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 mt-6">Season & Hours</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span><b>Season</b></span>
                                    <span><b>August 1st - September 26th, 2025</b></span>
                                </li>
                                <li className="flex justify-between">
                                    <span><b>Friday</b></span>
                                    <span><b>3:00 PM - 7:00 PM</b></span>
                                </li>
                                <li className="flex justify-between">
                                    <span><b>Saturday - Thursday</b></span>
                                    <span><b>Closed</b></span>
                                </li>
                            </ul>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Location</h3>
                            <address className="not-italic">
                                <b>350 Mill Street</b><br />
                                <b>Birnamwood, WI 54414</b>
                            </address>
                            <a 
                                            href="https://maps.app.goo.gl/d9LvUwQHJDkaTZbT8" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-flex items-center text-green-700 hover:underline"
                                        >
                                            View on map
                                            <svg className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 mt-6">Contact Us</h3>
                            <p className="mb-4">
                                <strong>Phone:</strong> <b>(715) 707-0780</b><br />
                                <strong>Email:</strong> <a href="mailto:millstreetbusinessgroup@gmail.com" className="text-green-700 hover:text-green-600">millstreetbusinessgroup@gmail.com</a>
                            </p>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mt-8 mb-4">Follow Us</h3>
                                <div className="flex justify-center space-x-6">
                                    <a href="#" className="text-green-700 hover:text-green-600">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-14 w-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-green-700 hover:text-green-600">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-14 w-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
