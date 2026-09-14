import Image from "next/image";

export default function ShieldLogo({ size = 38, className = "" }) {
  const height = size;
  const width = Math.round(size * (447 / 559));

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 relative ${className}`}
      style={{ width, height }}
    >
      <Image
        src="/logo.png"
        alt="Impress Security Services"
        width={width}
        height={height}
        className="w-full h-full object-contain"
        priority
      />
    </span>
  );
}
