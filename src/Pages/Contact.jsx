import React from "react";
import Background from "../Components/Background/Background";
export default function Contact() {
  return (
    <>
    <Background/>
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">R.M.D. Engineering College</h1>
        <p>Kavaraipettai, Thiruvallur District, Tamil Nadu 601206</p>
        <a href="#" className="text-blue-600 hover:underline">Bus Routes</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Faculty Coordinators</h2>
          <p>Mrs. Badi Alekhya, ASSOCIATE PROFESSOR</p>
          <p>Mrs. REMYA ROSE, ASSISTANT PROFESSOR</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-xl font-semibold mb-4">Student Coordinators</h2>
          <p>ABISHEK N, ANNAMALAI K, KHAUSHIK YAHAV M S, VIVARAS S</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>For Queries: <a href="mailto:avinyaa@rmd.ac.in" className="text-blue-600 hover:underline">upcomming@rmd.ac.in</a></p>
      </div>
      <div class="relative flex flex-col rounded-xl bg-transparent">
  <h4 class="block text-xl font-medium text-slate-800">
    Sign Up
  </h4>
  <p class="text-slate-500 font-light">
    Nice to meet you! Enter your details to register.
  </p>
  <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div class="mb-1 flex flex-col gap-6">
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-600">
          Your Name
        </label>
        <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
      </div>
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-600">
          Email
        </label>
        <input type="email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
      </div>
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-600">
          Password
        </label>
        <input type="password" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
      </div>
    </div>
    <div class="inline-flex items-center mt-2">
      <label class="flex items-center cursor-pointer relative" for="check-2">
        <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
        <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">
        Remember Me
      </label>
    </div>
    <button class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Sign Up
    </button>
    <p class="flex justify-center mt-6 text-sm text-slate-600">
      Don&apos;t have an account?
      <a href="#signup" class="ml-1 text-sm font-semibold text-slate-700 underline">
        Sign up
      </a>
    </p>
  </form>
</div>
    </div>
  </>
  );
}
