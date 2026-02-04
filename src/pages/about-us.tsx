import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6 text-gray-600 space-y-4">
          <p>
            Welcome to My Game Ground — your ultimate destination for online games. We bring together a curated collection of fun, safe games for players of all ages.
          </p>
          <p>
            Our mission is to provide a friendly, easy-to-use platform where you can discover and play games without hassle. We carefully select and organize games so you can jump in and have fun.
          </p>
          <p>
            Thank you for visiting. We hope you enjoy your time here!
          </p>
        </div>
        <p className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
