import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6 text-gray-600 space-y-4">
          <p>
            We&apos;d love to hear from you. Whether you have a question, feedback, or need support, reach out using the details below.
          </p>
          <div className="space-y-2 pt-2">
            <p>
              <span className="font-medium text-gray-900">Email:</span>{' '}
              <a href="mailto:support@mygameground.com" className="text-blue-600 hover:underline">
                support@mygameground.com
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-900">General inquiries:</span>{' '}
              <a href="mailto:hello@mygameground.com" className="text-blue-600 hover:underline">
                hello@mygameground.com
              </a>
            </p>
          </div>
          <p className="text-sm text-gray-500 pt-4">
            We aim to respond within 1–2 business days. Thank you for your patience.
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
