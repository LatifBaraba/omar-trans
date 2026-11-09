import Image from "next/image";

// Brief branded intro on first load. Pure CSS: fades out by itself.
export default function Splash() {
  return (
    <div aria-hidden className="splash fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <Image src="/logo.webp" alt="" width={320} height={320} priority className="splash-logo w-56 md:w-72" />
    </div>
  );
}
