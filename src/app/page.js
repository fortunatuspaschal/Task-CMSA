import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-black">Welcome to CMSA</h1>
        <p className="text-xl text-black">Contact Management and Submission Application</p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
