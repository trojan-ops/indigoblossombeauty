import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ServiceCard({ src, alt, title, description }: ServiceCardProps) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-zinc-700 flex flex-col w-full sm:w-[350px] transition-transform hover:-translate-y-1 duration-300">
      <div className="relative w-full h-48">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-grow">
        <h3 className="text-2xl font-bold text-pink-400">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
