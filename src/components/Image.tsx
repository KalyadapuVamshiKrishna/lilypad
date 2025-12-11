import Image from "next/image";

interface FeatureIconProps {
  src: string;
  alt: string;
  className?: string; // For the background color (e.g., "bg-rose-50")
}

export function FeatureIcon({ src, alt, className = "bg-gray-50" }: FeatureIconProps) {
  return (
    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${className} relative flex-shrink-0`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 64px"
        className="object-contain p-3"
      />
    </div>
  );
}