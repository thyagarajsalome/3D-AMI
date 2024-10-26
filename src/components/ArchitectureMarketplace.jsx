import React, { useState } from "react";
import {
  Search,
  Filter,
  Home,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Rest of your component code...

const ArchitectureMarketplace = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeView, setActiveView] = useState("grid");

  // Sample categories - you would expand this based on your actual designs
  const categories = [
    { id: "all", name: "All Designs" },
    { id: "modern", name: "Modern" },
    { id: "contemporary", name: "Contemporary" },
    { id: "traditional", name: "Traditional" },
    { id: "minimalist", name: "Minimalist" },
  ];

  // Sample featured design
  const featuredDesign = {
    title: "Modern Villa Design #127",
    price: "$000",
    details: "3 Bedrooms • 2.5 Baths • 2,500 sqft",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Home className="h-8 w-8 text-blue-600" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search designs..."
                className="w-96 pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Featured Design Hero */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{featuredDesign.title}</h1>
              <p className="text-xl">{featuredDesign.details}</p>
              <p className="text-3xl font-bold">{featuredDesign.price}</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">
                View Design
              </button>
            </div>
            <div className="w-96 h-64 bg-white/10 rounded-lg flex items-center justify-center">
              {/* This would be your 3D viewer component */}
              <div className="text-center">
                <p className="text-lg">3D Preview</p>
                <p className="text-sm">(Three.js viewer would go here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg ${
                  activeCategory === category.id
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
            <select className="px-4 py-2 border rounded-lg bg-white">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveView("grid")}
              className={`p-2 rounded ${
                activeView === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setActiveView("list")}
              className={`p-2 rounded ${
                activeView === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureMarketplace;
