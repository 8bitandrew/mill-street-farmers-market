const Vendors = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-64 bg-gradient-to-r from-green-700 to-green-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://i.imgur.com/zdz2Hby.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">Vendor Information</h1>
                    <div className="w-24 h-1.5 bg-yellow-400 mb-6 rounded-full"></div>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">Join Our Community of Local Vendors</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {/* Call to Action */}
                <section className="bg-green-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Vendor</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                            Interested in joining our market? We're always looking for vendors to join our community.
                            Email your vendor application to <a href="mailto:millstreetfarmersmarket@gmail.com" className="text-green-700 hover:text-green-600">millstreetfarmersmarket@gmail.com</a>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="https://drive.google.com/uc?export=download&id=1L47HEt9DZ3ad_PPKwwuYGgBJ9n4gLpQ2"
                                download="FarmersMarket_Vendor_Application.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-150 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Get Application
                            </a>
                            <a 
                                href="https://docs.google.com/document/d/1VO3TfK9piOvgHZw9R26_tdP3P2pQXzyO/edit?usp=drive_link&ouid=104128672878645319556&rtpof=true&sd=true" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white hover:bg-gray-200 text-green-700 font-medium py-3 px-6 border border-green-300 rounded-md transition duration-150 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Vendor Guidelines
                            </a>
                        </div>
                    </div>
                </section>
                
                {/* Membership Section */}
                <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Membership</h2>
                    <div className="prose max-w-none text-gray-700">
                        <p>Participation in the market is limited to those farmers who grow their own crops and live within a 50-mile radius of Birnamwood, Wisconsin.</p>
                        <p>The manager of the farmers market reserves the right to include products outside of that radius if it is a Wisconsin product and inclusion of that product will enhance the market.</p>
                        <p>Each vendor must submit a completed Vendor Application before they begin selling at the Market.  A vendor will not be allowed to sell at the market until the application has been received and approved.</p>
                        <p>If a farm vendor sells a product which falls under state and/or federal regulation, the Farm Market Manager may ask them to furnish copies of his/her license to sell such products.</p>
                    </div>
                </section>

                {/* Rules Regarding Vendor Stalls Section */}
                <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Rules Regarding Vendor Stalls</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-green-700">Stall Assignment</h3>
                            <p>Stall assignments will be determined on a first come/first served basis. The stalls will be 10'x10' in size and will be clearly marked.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-green-700">Pricing</h3>
                            <p>Cost to occupy a stall is $15 per stall per week or $80 for the entire month of August and September.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-green-700">Requirements</h3>
                            <p>All required permits and licensing must be up-to-date.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-green-700">Tent & Structure Safety</h3>
                            <p>If tents or covering structures are used, these shall be safely erected and weighted down to prevent injury to the public or other vendors.</p>
                        </div>
                    </div>
                </section>

                {/* Farm Vendor Stall Guidelines and Conduct Section */}
                <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Farm Vendor Stall Guidelines and Conduct</h2>
                    <div className="space-y-4">
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">A</span>
                                <span><strong>Stall Set-Up.</strong> Set up may begin at 2:00 on Friday.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">B</span>
                                <span><strong>Size.</strong> Stall sites are 10 feet wide by 10 feet deep. A 5' wide area for customer traffic must be kept open along the front of all stalls.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">C</span>
                                <span><strong>Display.</strong> Vendors are expected to provide their own stall furnishings including tents, tables and chairs. Vendors provide their own signage. NO personal vendor signage is allowed at the market outside of their personal stall area.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">D</span>
                                <span><strong>Signage.</strong> Within the stall space, vendors shall display signage with the name of his/her business and its location. Organic products may be advertised provided they meet USDA guidelines as organic. The Market Manager may ask to see a vendor's organic certificate or proof of organic growing practices at any time.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">E</span>
                                <span><strong>Behavior.</strong> Vendors are expected to conduct themselves in a courteous manner to other vendors, Market personnel and Market patrons. Threatening, abusive or harassing behavior constitutes a violation of the Farmers' Market rules and constitutes grounds for dismissal from the market.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">F</span>
                                <span><strong>Sales Time.</strong> Market sales hours are from 3:00 p.m. to 7:00 p.m. on Fridays.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">G</span>
                                <span>Vendors are not allowed to bring their pets to the market.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">H</span>
                                <span><strong>Sales Practices.</strong> Vendors must follow all appropriate practices required by law including the use of scales certified for legal trade, proper handling of potentially hazardous foods, etc. Enforcement of these practices is left to the proper local, state and federal agencies.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">I</span>
                                <span>Vendors must take their entire personal trash home with them. Talk to other vendors - they may be interested in using it for compost. Upon leaving for the day all debris from your stall shall be cleaned up.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">J</span>
                                <span><strong>Smoking.</strong> Smoking is not permitted anywhere in or near the vendor stalls.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">K</span>
                                <span><strong>Noise.</strong> Loud or disturbing noises are not allowed in the Market area.</span>
                            </li>
                            
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">L</span>
                                <span>All preparation of produce such as washing of vegetables, major cutting and trimming of flowers, etc., shall be done at home or in your vehicles. Dumping water or debris on the grounds is not permitted.</span>
                            </li>
                            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-yellow-700"><em>Note: Wiping off or polishing vegetables with a damp rag, misting vegetables with a spray bottle to keep them moist, and arranging of flowers is acceptable.</em></p>
                            </div>
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">M</span>
                                <span>Vendors shall display their permit to sell at the market and shall show it when requested to do so. The permit, along with their name and address shall be clearly displayed in their booth while selling.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* List of Approved Products Section */}
                <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">List of Approved Products</h2>
                    <div className="space-y-4">
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">A</span>
                                <span>All agricultural products must be grown or produced by the vendor and come from within a 50-miles radius of Birnamwood, Wisconsin. The Market Manager reserves the right to include products outside of that radius if it is a Wisconsin product and inclusion of the product will enhance the market.</span>
                            </li>
                            
                            <li className="mt-6">
                                <p className="font-semibold text-gray-900 mb-3 text-left">Farm products welcome at market include:</p>
                                <ul className="space-y-2 mt-2 pl-6">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>All agricultural produce such as fruits, vegetables, grains, etc.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>Animal products such as meats, eggs, cheese, fiber and any other marketable product from the farmer's animals.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>"Farmer value added products" produced by the farmer such as bakery items, candy, dried foods, decorative items, soaps, craft items, etc. (Value added food items by the vendors must be produced in a licensed commercial kitchen.)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>Canned fruits and vegetables (vendor produced in a licensed commercial kitchen).</span>
                                    </li>
                                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                        <p className="text-yellow-700"><em>Note: Items such as jams and jelly, which fall under the "pickle law", do not require a licensed kitchen.</em></p>
                                    </div>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>Honey, sorghum, syrup and molasses.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>Cider.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>Plants: annuals, perennials, nursery stock, house plants, fresh and dried flowers, and fresh and dried herbs.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0"></span>
                                        <span>Any items made by the farm vendor and the vendor's immediate family as long as they continue to sell agricultural products which they grow themselves.</span>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="flex items-start mt-6">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 font-medium mr-3 flex-shrink-0">B</span>
                                <span>Products outside of the "list of approved farm products" are not allowed to be sold at market without the written permission of the Market Manager.</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Vendors;
