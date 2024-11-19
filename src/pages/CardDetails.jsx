import React from "react";
import Navbar from "../components/Navbar";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const { adventure } = useLoaderData();

  if (!adventure) {
    return <h2>Adventure not found</h2>;
  }

  return (
    <div>
      <header className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </header>
      <section className="w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-11/12 mt-8">
          <div className="flex flex-col md:flex-row">
            <img
              src={adventure.Image}
              alt={adventure.AdventureTitle}
              className="w-full md:w-1/2 h-96 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
            <div className="p-6 flex flex-col justify-between w-full">
              <h2 className="text-3xl font-extrabold text-gray-800 hover:text-teal-600 transition duration-300 ease-in-out">
                {adventure.AdventureTitle}
              </h2>
              <p className="text-xl text-gray-600 font-semibold mt-1">
                {adventure.CategoryName}
              </p>
              <p className="text-gray-700 mt-4 text-lg">
                {adventure.ShortDescription}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Location:</span>
                  <span>{adventure.Location}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Duration:</span>
                  <span>{adventure.Duration}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Adventure Level:</span>
                  <span>{adventure.AdventureLevel}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Cost:</span>
                  <span>${adventure.AdventureCost}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Included Items:
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {adventure.IncludedItems.map((item, index) => (
                    <li key={index} className="text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Eco-Friendly Features:
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {adventure.EcoFriendlyFeatures.map((feature, index) => (
                    <li key={index} className="text-lg">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Special Instructions:
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {adventure.SpecialInstructions.map((instruction, index) => (
                    <li key={index} className="text-lg">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm font-semibold text-gray-600">
                  Booking Availability:
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                    adventure.BookingAvailability === "Available"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {adventure.BookingAvailability}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
