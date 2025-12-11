import React from "react";
import { 
  ShieldCheck, 
  LineChart, 
  Search, 
  PieChart, 
  Users 
} from "lucide-react";

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------
const HEADER_DATA = {
  label: "About Us",
  title: (
    <>
      Lillypad is the only <span className="font-semibold">Real Estate Investment tool</span> you need for your business
    </>
  ),
};

const FEATURES = [
  {
    id: "data-driven",
    title: "Become a Data-Driven Investor",
    description: "Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions.",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
  },
  {
    id: "smarter-decisions",
    title: "Lilypads can help you make smarter decisions.",
    description: "Streamline your investment evaluation process and collaborate in reaching your long term investment objectives.",
    icon: <LineChart size={28} strokeWidth={1.5} />,
  },
  {
    id: "due-diligence",
    title: "Manager Due Diligence",
    description: "Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis.",
    icon: <Search size={28} strokeWidth={1.5} />,
  },
  {
    id: "asset-allocation",
    title: "Optimize Asset Allocation",
    description: "Understand the underlying risk drivers in your portfolio using Lilypads analysis factors and optimize based on objectives.",
    icon: <PieChart size={28} strokeWidth={1.5} />,
  },
  {
    id: "subscribers",
    title: "Our Subscribers",
    description: "Serving global subscribers across pension funds, funds of funds, banks, family offices, and wealth managers.",
    icon: <Users size={28} strokeWidth={1.5} />,
  },
];

export default function FeaturesGrid() {
  return (
    // Section Background: Matches your design (#f5f4f8)
    <section className="bg-[#f5f4f8] py-20 flex justify-center items-center">
      <div className="mx-auto w-full max-w-[1600px] px-4 lg:px-8">
        
        {/* === THE GRID CONTAINER === 
            1. gap-px: The 1px gap reveals the gradient underneath.
            2. grid-fade-lines: Applies the sharp, pointy gradient background.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4px] grid-fade-lines rounded-sm overflow-hidden">
          
          {/* HEADER CELL */}
          <div className="flex flex-col justify-center bg-[#f5f4f8] p-8 lg:p-12 min-h-[300px]">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-5 bg-[#be123c]"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#be123c]">
                {HEADER_DATA.label}
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] text-[#1a1a1a] md:text-4xl">
              {HEADER_DATA.title}
            </h2>
          </div>

          {/* FEATURE CELLS */}
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              className="group flex flex-col items-start justify-center bg-[#f5f4f8] p-8 lg:p-12 hover:bg-white transition-colors duration-200 min-h-[300px]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#9f2b45] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="mb-3 text-lg font-bold text-[#1a1a1a]">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </article>
          ))}
          
        </div>
      </div>
    </section>
  );
}