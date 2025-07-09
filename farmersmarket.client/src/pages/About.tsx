const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-64 bg-gradient-to-r from-green-700 to-green-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://i.imgur.com/zdz2Hby.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">About Mill Street Farmers Market</h1>
                    <div className="w-24 h-1.5 bg-yellow-400 mb-6 rounded-full"></div>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">Where Local Farms Meet Local Families</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Mission & Values */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">Sustainable Agriculture</h3>
                            <p className="text-gray-700">
                            We are committed to improving the sustainability of local farming and production, helping ensure that future generations can enjoy the same fresh, local goods.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">Local Economy</h3>
                            <p className="text-gray-700">
                            Our market helps keep commerce close to home by giving small-scale growers and producers a reliable outlet to grow their businesses and serve their neighbors.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">Healthy Living</h3>
                            <p className="text-gray-700">
                                We believe in building strong community connections through shared experiences around food and local products.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">Supporting Local Growers and Producers</h3>
                            <p className="text-gray-700">
                            We proudly provide a vibrant, community-centered space where local farmers and producers can sell their agricultural goods directly to the people who live here.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Market Info */}
                <section className="bg-green-50 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Information</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Season & Hours</h3>
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
                            <h3 className="text-xl font-semibold mt-8 mb-4"><b>Location</b></h3>
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
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <p className="mb-4">
                                <strong>Phone:</strong> (715) 707-0780<br />
                                <strong>Email:</strong> <a href="mailto:millstreetfarmersmarket@gmail.com" className="text-green-700 hover:text-green-600">millstreetfarmersmarket@gmail.com</a>
                            </p>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mt-8 mb-4">Follow Us</h3>
                                <div className="flex space-x-4 justify-center">
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
                </section>

                {/* Google Map */}
                <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
                            <h2 className="text-2xl font-bold text-gray-900 p-6 pb-4">Our Location</h2>
                            <div className="aspect-w-16 aspect-h-9 w-full">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.1211474049865!2d-89.20694320000001!3d44.929176999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8801d978fa61f0bd%3A0x9fada5871bcfcb57!2s350%20Mill%20St%2C%20Birnamwood%2C%20WI%2054414!5e1!3m2!1sen!2sus!4v1751944254576!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="450" 
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mill Street Farmers Market Location"
                                    className="w-full h-[450px]"
                                ></iframe>
                            </div>
                        </div>
            </main>
        </div>
    );
};

export default About;
