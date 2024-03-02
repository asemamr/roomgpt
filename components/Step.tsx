import Image from "next/image";

type StepProps = {
  title: string,
  imageUrl:string,
  alt:string
}
export default function Step({title, imageUrl, alt}: StepProps) {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src={imageUrl}
        alt={alt}
        width={30}
        height={30}
      />
      <h2>{title}</h2>
    </div>
  );
}
