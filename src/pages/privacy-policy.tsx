import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-md p-6 text-gray-600 space-y-4">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            We respect your privacy. This policy describes how we may collect, use, and protect information when you use our gaming portal.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-2">Information We Collect</h2>
          <p>
            We may collect information you provide directly (e.g., when you contact us) and usage data such as pages visited and time spent on the site, to improve our service.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-2">How We Use It</h2>
          <p>
            We use this information to operate the site, improve your experience, and communicate with you when necessary.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-2">Contact</h2>
          <p>
            For privacy-related questions, please visit our <Link href="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link> page.
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
