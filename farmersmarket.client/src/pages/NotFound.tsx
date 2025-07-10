import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-stone-50">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h1 className="text-9xl font-extrabold text-green-600">404</h1>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Oops! Page Not Found
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Looks like this page has gone to the farmers' market and can't be found!
                    </p>
                    <p className="mt-2 text-gray-500">
                        Maybe it's out picking fresh produce?
                    </p>
                </div>
                
                <div className="mt-8">
                    <Link
                        to="/"
                        className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                    >
                        Back to Home
                    </Link>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-sm text-gray-500">
                        While you're here, did you know?<br />
                        <span className="font-medium text-green-600">
                            Why don't farmers use 404 errors?<br />
                            Because they always know where their produce is!
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
