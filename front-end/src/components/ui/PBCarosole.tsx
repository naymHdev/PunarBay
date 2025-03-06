import Image from "next/image";

const PBCarosole = ({ images }: { images: string[] }) => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <Image src={images[0]} alt="Product Image" height={800} width={800} />
      </div>
    </>
  );
};

export default PBCarosole;
