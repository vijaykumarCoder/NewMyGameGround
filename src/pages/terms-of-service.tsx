import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-md p-6 text-gray-600 space-y-4">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            By using My Game Ground, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-2">Use of the Service</h2>
          <p>
            You may use our site and games for personal, non-commercial use. You agree not to misuse the service, attempt to bypass security, or use it in any way that could harm others or the platform.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-2">Content and Games</h2>
          <p>
            Games and content are provided by third parties. We do not guarantee availability or endorse all content. Use at your own discretion, especially for younger users.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-2">Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.
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
