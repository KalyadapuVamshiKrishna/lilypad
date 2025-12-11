/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: boolean;
}

// Helper to avoid next/image errors in preview
const Image = ({ src, alt, fill, className, ...props }: ImageProps) => {
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
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default function GemininCard() {
  return (
    <div className="flex w-[240px] flex-col rounded-[30px] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-gray-100/50 sm:w-[380px]">
      {/* Top Section: Flex container to hold Image and Details side-by-side */}
      <div className="flex gap-5">
        
        {/* Thumbnail 
            - 'relative' allows the fill image to position correctly
            - No fixed height: flex stretch allows it to extend down to match the right column 
            - w-32 makes it wide enough to look balanced with the increased height
        */}
        <div className="relative w-32 shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
           <Image
            src="/images/apartment.jpg" 
            alt="Building"
            fill
            className="object-cover object-top-left scale-110"
          />
        </div>
        
        {/* Right Column: Contains Text Details AND Progress Bars */}
        <div className="flex flex-1 flex-col justify-between py-1">
          {/* Header Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Geminin Appartment</h3>
            <p className="mt-1.5 text-xs font-medium leading-snug text-gray-500">
              164 S.carson court <br /> newport news,VA 23601
            </p>
          </div>
          
          {/* Yield & Bars Section (Pushed to bottom of this column) */}
          <div className="mt-3">
             <div className="mb-3 text-right">
                <span className="text-base font-extrabold text-gray-900">+ 3,5% Yield</span>
             </div>

             {/* Progress Bars - Now located here, beside the image */}
             <div className="space-y-2.5">
                <div className="h-2 w-full rounded-full bg-blue-50">
                  <div className="h-full w-full rounded-full bg-[#2563EB] shadow-[0_2px_4px_rgba(37,99,235,0.3)]"></div>
                </div>
                <div className="h-2 w-full rounded-full bg-green-50">
                  <div className="h-full w-[70%] rounded-full bg-[#16A34A] shadow-[0_2px_4px_rgba(22,163,74,0.3)]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Footer Stats - Remains at the bottom */}
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-gray-50 pt-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Committed</span>
          <span className="mt-0.5 text-sm font-bold text-gray-800">$105,555</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Distribution</span>
          <span className="mt-0.5 text-sm font-bold text-gray-800">$473,685</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Contribution</span>
          <span className="mt-0.5 text-sm font-bold text-gray-800">$948,355</span>
        </div>
      </div>
    </div>
  );
}