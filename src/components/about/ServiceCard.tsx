import Image, { StaticImageData } from "next/image";
interface Props {
  src: StaticImageData;
  alt: string;
  name: string;
}

const ServiceCard = ({ src, alt, name }: Props) => {
  return (
    <div className="flex items-center w-full space-x-6 mb-6">
      <div className="flex flex-col items-center invisible md:visible">
        <div className="w-[2px] md:h-12 bg-accent mb-2"></div>
        <div className="w-2 md:h-2 rounded bg-accent"></div>
      </div>

      <div className="text-lightGray flex items-center space-x-6 w-full">
        <Image src={src} alt={alt} className="w-10 h-10 filter grayscale" />
        <h3 className="font-medium text-left">{name}</h3>
      </div>
    </div>
  );
};


export default ServiceCard;
