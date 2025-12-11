/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import React from "react";

// --- 1. Custom Image Component ---
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const Image = ({ src, alt, width, height, className, fill, priority, ...props }: ImageProps) => {
  void priority;
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${className}`}
        {...props}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

// --- 2. Floating Card ---
function GemininCard() {
  return (
    <div className="flex w-[260px] flex-col rounded-[30px] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-gray-100/50 sm:w-[380px] scale-80">

      <div className="flex gap-5">
        <div className="relative w-24 sm:w-32 shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-inner h-28 sm:h-auto">
          <Image
            src="/images/apartment.jpg"
            alt="Building"
            fill
            className="object-cover object-center scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between py-1">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">Geminin Appartment</h3>
            <p className="mt-1.5 text-[10px] sm:text-xs font-medium leading-snug text-gray-500">
              164 S.carson court <br /> newport news,VA 23601
            </p>
          </div>

          <div className="mt-3">
            <div className="mb-2 sm:mb-3 text-right">
              <span className="text-sm sm:text-base font-extrabold text-gray-900">+ 3,5% Yield</span>
            </div>
            <div className="space-y-2 sm:space-y-2.5">
              <div className="h-1.5 sm:h-2 w-full rounded-full bg-blue-50">
                <div className="h-full w-full rounded-full bg-[#2563EB] shadow-[0_2px_4px_rgba(37,99,235,0.3)]"></div>
              </div>
              <div className="h-1.5 sm:h-2 w-full rounded-full bg-green-50">
                <div className="h-full w-[70%] rounded-full bg-[#16A34A] shadow-[0_2px_4px_rgba(22,163,74,0.3)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-gray-50 pt-4 text-center sm:text-left">
        <div className="flex flex-col">
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-400">Committed</span>
          <span className="mt-0.5 text-xs sm:text-sm font-bold text-gray-800">$105,555</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-400">Distribution</span>
          <span className="mt-0.5 text-xs sm:text-sm font-bold text-gray-800">$473,685</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-400">Contribution</span>
          <span className="mt-0.5 text-xs sm:text-sm font-bold text-gray-800">$948,355</span>
        </div>
      </div>
    </div>
  );
}

const STATS = [
  { label: "Properties Registered", value: "658+" },
  { label: "Deals Cracked", value: "685+" },
  { label: "Investors", value: "255+" },
];

// --- 3. Main Hero Section ---
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-[65%] hero-left-fix flex flex-col justify-center px-6 pt-32 pb-24 sm:px-12 lg:py-24 lg:pl-24 xl:pl-36">

        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "url('/images/left-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "left center"
          }}>
        </div>

        <div className="relative z-10 max-w-2xl xl:max-w-3xl pr-4">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-rose-600 mb-8">
            <span className="h-0.5 w-10 bg-rose-600"></span>
            <span className="text-base">Welcome to the</span>
          </div>

          <h1 className="text-5xl font-serif font-bold leading-[1.05] text-gray-900 sm:text-7xl lg:text-8xl">
            Unprecedented <br />
            Era of{" "}
            <span className="font-serif italic text-[#9e2349]">
              Real Estate Investing
            </span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-500 max-w-xl">
            Lilypads uses sophisticated technologies for data-driven decisions
            in investing, managing, and funding commercial real estate assets.
          </p>

          <div className="mt-10">
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#7c5dfa] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-purple-200 transition-all hover:-translate-y-1 hover:bg-[#6b4ce6]">
              Start Investing Now
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-10 border-t border-gray-100 pt-10">
            {STATS.map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-extrabold text-[#7D59C3] sm:text-5xl">
                  {item.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
     {/* RIGHT SIDE */}
      <div 
        className="relative w-full lg:w-[35%] hero-right-fix min-h-[600px] lg:min-h-auto overflow-visible bg-cover bg-center bg-no-repeat"
        style={{ 
            
            backgroundImage: "url('/images/right-gackground.png')",
        }}
      >


        <div className="relative h-full w-full flex items-center justify-center lg:justify-start lg:pl-0">

          <div className="relative z-20 flex gap-10 lg:-ml-110 xl:-ml-20 phone-wrapper-fix items-center">

            {/* PHONE 1 */}
            <div className="relative w-[220px] sm:w-[300px] lg:w-[300px] xl:w-[340px] shrink-0 transition-transform duration-700 ease-out sm:m-15 md:mt-5 ">
              <Image
                src="/images/hero-dashboard.png"
                alt="Dashboard"
                width={800}
                height={1600}
                className="w-full h-auto rounded-[4.5rem] shadow-2xl"
              />

              <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 drop-shadow-md z-20">
                <Image
                  src="/images/Group 21468.png"
                  alt="Navigation"
                  width={300}
                  height={60}
                  className="w-full h-auto"
                />
              </div>
              
              {/* === CONTROLS FOR FLOATING CARD === 
                  
                  1. TO MOVE UP/DOWN: Adjust 'top-[30%]'
                     - Decrease number (e.g., top-[20%]) -> Moves UP
                     - Increase number (e.g., top-[40%]) -> Moves DOWN

                  2. TO MOVE LEFT/RIGHT: Adjust '-left-[...]' 
                     - Make number LARGER (e.g., -left-[150px]) -> Moves LEFT (further out)
                     - Make number SMALLER (e.g., -left-[50px]) -> Moves RIGHT (closer to phone)
              */}
              <div className="absolute top-[30%] -left-[60px] sm:-left-[100px] lg:-left-[55px] floating-card-fix z-30 animate-bounce-slow origin-top-right scale-80 sm:scale-90 lg:scale-100 sm:m-5">
                <GemininCard />
              </div>
            </div>

            {/* PHONE 2 */}
            <div className="relative w-[200px] sm:w-[300px] lg:w-[340px] xl:w-[340px] shrink-0 opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/julie-card.png"
                alt="App Interface"
                width={800}
                height={1600}
                className="w-full h-auto rounded-[4.5rem] sm:rounded-[1rem] shadow-2xl"
              />

              <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 drop-shadow-md z-20">
                <Image
                  src="/images/Group 21468.png"
                  alt="Navigation"
                  width={300}
                  height={60}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}