import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  bg-white px-4 py-8 sm:px-6 md:px-8">
      <div className="w-full max-w-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 sm:mb-8 w-full text-left">
          <p className="text-sm sm:text-base text-gray-500 flex flex-wrap items-center">
            <Link href="/" className="text-gray-700 hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>404 Error</span>
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* The Illustration */}
          <div className="mb-6 sm:mb-8 w-full flex justify-center">
            <Image
              src="/image/not-found.png"
              alt="Page Not Found Illustration"
              width={240}
              height={240}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
            404 Not Found
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500">
            Your visited page was not found. You may go to the home page.
          </p>

          {/* Action Button */}
          <div className="mt-8 w-full flex justify-center">
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-600 px-6 py-2 sm:px-8 sm:py-3 text-center text-sm sm:text-base font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Back to home page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}