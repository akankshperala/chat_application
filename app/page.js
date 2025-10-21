"use client"
import Image from "next/image";

// export const metadata={
//   title:'Home - PieChat',
//   description:'PieChat helps you connect with people of your choice'
// }
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-indigo-800 mb-6">
            Connect Instantly, Share Freely.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
            PieChat is your go-to platform for seamless conversations, vibrant communities, and crystal-clear communication. Experience chat reimagined.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
              Get Started
            </button>
            <button className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Illustrative Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://placehold.co/600x400/818CF8/FFFFFF?text=Chat+App+Illustration"
            alt="PieChat Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://placehold.co/600x400/818CF8/FFFFFF?text=Image+Not+Found";
            }}
          />
        </div>
        
      </main>
      <section className="container mx-auto px-6 py-16 md:py-24 lg:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-800 mb-12">
          Powerful Features for Seamless Communication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">Real-time Messaging</h3>
            <p className="text-gray-600">Send and receive messages instantly, ensuring your conversations flow without delay.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H7a1 1 0 00-1 1v2H4a2 2 0 00-2 2v11a2 2 0 002 2h2v-2a1 1 0 011-1h10a1 1 0 011 1v2z"></path></svg>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">Secure & Private</h3>
            <p className="text-gray-600">Your conversations are end-to-end encrypted, keeping your data safe and private.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10"></path></svg>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">Rich Media Support</h3>
            <p className="text-gray-600">Share photos, videos, and documents effortlessly with your contacts.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H7a1 1 0 00-1 1v2H4a2 2 0 00-2 2v11a2 2 0 002 2h2v-2a1 1 0 011-1h10a1 1 0 011 1v2z"></path></svg>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">Group Chat</h3>
            <p className="text-gray-600">Create and manage group chats for teams, friends, and family with ease.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path></svg>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">Customizable Profiles</h3>
            <p className="text-gray-600">Personalize your profile with avatars, statuses, and custom themes.</p>
          </div>
          {/* Feature Card 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">Cross-Platform</h3>
            <p className="text-gray-600">Access PieChat from any device - desktop, tablet, or mobile - seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 lg:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-800 mb-12">
          Simple & Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Pricing Card 1: Free */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Free</h3>
              <p className="text-5xl font-extrabold text-gray-900 mb-6">$0<span className="text-xl font-medium text-gray-500">/month</span></p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Basic Chat Features</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Up to 5 Group Chats</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Limited Media Storage</li>
              </ul>
            </div>
            <button className="w-full bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
              Start Free
            </button>
          </div>

          {/* Pricing Card 2: Pro (Featured) */}
          <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-xl flex flex-col justify-between transform scale-105 hover:scale-110 transition-transform duration-300 border-4 border-indigo-300">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-5xl font-extrabold mb-6">$9<span className="text-xl font-medium">/month</span></p>
              <ul className="text-left mb-8 space-y-2">
                <li className="flex items-center"><svg className="h-5 w-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All Free Features</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Unlimited Group Chats</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Increased Media Storage</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority Support</li>
              </ul>
            </div>
            <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-75">
              Choose Pro
            </button>
          </div>

          {/* Pricing Card 3: Enterprise */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Enterprise</h3>
              <p className="text-5xl font-extrabold text-gray-900 mb-6">$Custom<span className="text-xl font-medium text-gray-500">/month</span></p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All Pro Features</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Dedicated Account Manager</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Custom Integrations</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>SLA & Uptime Guarantee</li>
              </ul>
            </div>
            <button className="w-full bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
