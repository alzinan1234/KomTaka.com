import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-10 w-full text-left">
          <p className="text-base text-gray-500">
            <Link href="/" className="text-gray-700 hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>404 Error</span>
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          
          {/* The Illustration */}
          <div className="mb-8">
            <Image
              // IMPORTANT: Update this src to the path of your image in the `public` folder.
              src="/image/not-found.png" 
              alt="Page Not Found Illustration"
              width={320}
              height={320}
              priority // Helps load the image faster
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
            404 Not Found
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg text-gray-500">
            Your visited page not found. You may go home page.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-base font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Back to home page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}