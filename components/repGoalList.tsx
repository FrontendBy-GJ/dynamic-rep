import Image, { StaticImageData } from 'next/image';

type RepGoalProps = {
  title: string;
  paragraph: string;
  img: StaticImageData;
  alt: string;
};
export default function RepGoalList({
  title,
  paragraph,
  img,
  alt,
}: RepGoalProps) {
  return (
    <li className="space-y-6">
      <div className="aspect-video shadow-xl rounded overflow-hidden">
        <Image
          src={img}
          alt={alt}
          width={5192}
          height={3465}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="space-y-4 md:px-2 lg:px-0">
        <h3 className="font-semibold text-xl text-pretty xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm lg:text-base">{paragraph}</p>
      </div>
    </li>
  );
}
