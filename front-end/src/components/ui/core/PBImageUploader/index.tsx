import { cn } from "@/lib/utils";
import { Input } from "../../input";
import { Label } from "../../label";

type TImageUploader = {
  label?: string;
  className?: string;
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
};

const PBImageUploader = ({
  label,
  setImagePreview,
  setImageFiles,
  className,
}: TImageUploader) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  return (
    <>
      <div className={cn("flex flex-col items-center w-full gap-4", className)}>
        <Input
          onChange={handleImageChange}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          id="image-upload"
        />
        <Label
          htmlFor="image-upload"
          className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
        >
          {label}
        </Label>
      </div>
    </>
  );
};

export default PBImageUploader;
