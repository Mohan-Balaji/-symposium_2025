import React from 'react';
import Background from "../../Components/Background/Background"

export default function Confirmation() {
  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative mt-20">
      <div className="flex flex-col items-center min-h-screen w-full z-10 relative mx-auto">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/mnt/data/image.png')" }}
        >
          <div className="w-full flex justify-center items-center">
            {/* Custom Design for Confirmation with Smaller Container */}
            <div className="relative cursor-pointer overflow-hidden bg-white/10 backdrop-blur-lg shadow-2xl rounded-4xl px-6 pt-8 pb-6 shadow-2xl ring-1 ring-gray-900/5 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
              <span className="absolute top-0 left-0 z-0 h-24 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75"></span>
              <div className="relative z-10 mx-auto max-w-md">
                {/* Confirmation Icon */}
                <span className="grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <svg
                    className="h-8 w-8 sm:h-10 sm:w-10 text-white"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>

                <div className="space-y-6 pt-4 text-xl leading-7 text-white">
                  <h1 className="text-green-500 text-3xl sm:text-4xl md:text-5xl text-center">Thank you for contacting us!</h1>
                  <p className="mt-4 text-center text-sm sm:text-base">
                    We will reach out to you shortly via WhatsApp and email. Please keep an eye on your messages. 
                    Our team is processing your request and will respond within the next hour.
                  </p>
                  <p className="mt-4 text-center font-medium text-sm sm:text-base">
                    For Queries: <a href="mailto:upcomming@rmd.ac.in" className="text-emerald-400">avinyaa@rmd.ac.in</a>
                  </p>
                  <p className="mt-4 text-center font-medium text-sm sm:text-base">
                    Join Whatsapp Group <a href="https://chat.whatsapp.com/KX0aFgTo3hl19zgBm7uhQM" className="text-emerald-400">Group Link</a>
                  </p>
                </div>
              </div>
            </div>
            <Background className="absolute inset-0 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
