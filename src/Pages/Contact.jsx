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
    </div>
  </>
  );
}
