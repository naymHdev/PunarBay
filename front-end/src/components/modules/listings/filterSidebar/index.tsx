"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getAllCategories } from "@/services/category";
import { Slider } from "@/components/ui/slider";
import styles from "./filterSidebar.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PBLoading from "@/components/ui/PBLoading";
import { Skeleton } from "@/components/ui/skeleton";

export const bdDivisions = [
  "Barisal",
  "Chattogram",
  "Dhaka",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];

export default function FilterSidebar() {
  const [price, setPrice] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [{ data: categoriesData }] = await Promise.all([
          getAllCategories(),
        ]);
        setCategories(categoriesData);
      } catch (error: any) {
        console.error(error);
        toast.error("Failed to fetch filters");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    // console.log("params", params);

    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1575B9]">Filter</h2>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`, {
                scroll: false,
              });
            }}
            size="sm"
            className="text-white hover:cursor-pointer bg-[#1575B9] hover:bg-[#1575B9] ml-5"
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Filter by Price */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Price</h2>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>TK 0</span>
          <span>TK 100000</span>
        </div>
        <Slider
          max={100000}
          step={1}
          onValueChange={(value) => {
            setPrice(value);
            handleSearchQuery("price", value[0]);
          }}
          className={`w-full bg-[#1575B9] h-2 rounded-full ${styles.customSlider}`}
        />

        <p className="text-sm mt-2">Selected Price: Tk {price[0]}</p>
      </div>

      {/* Product conditions */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Condition</h2>
        <RadioGroup defaultValue="new">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => handleSearchQuery("condition", "new")}
              value="new"
              id="new"
            />
            <Label className="text-gray-500 font-light">New</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => handleSearchQuery("condition", "used")}
              value="used"
              id="used"
            />
            <Label className="text-gray-500 font-light">Used</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => handleSearchQuery("condition", "refurbished")}
              value="refurbished"
              id="refurbished"
            />
            <Label className="text-gray-500 font-light">Refurbished</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Product Divisions */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Product Location</h2>
        <Select onValueChange={(value) => handleSearchQuery("location", value)}>
          <SelectTrigger className=" w-full border-neutral-300">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent className=" bg-gray-100 border-neutral-300">
            {bdDivisions?.map((place, index) => (
              <div key={index} className="flex items-center space-x-2">
                <SelectItem key={index} value={place}>
                  {place}
                </SelectItem>
              </div>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Product Category */}
      <div className="">
        <h2 className="text-lg font-semibold mb-4">Product Category</h2>
        {isLoading ? (
          <div className="space-y-2">
            {[...Array(categories && categories.length > 0 ? categories.length : 5)].map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Skeleton className="w-6 h-6 rounded-full bg-gray-300" />
                <Skeleton className="w-11/12 h-6 rounded-md bg-gray-300" />
              </div>
            ))}
          </div>
        ) : (
          <RadioGroup className="space-y-2">
            {categories?.map((category: { _id: string; name: string }) => (
              <div key={category._id} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("categories", category._id)}
                  value={category._id}
                  id={category._id}
                />
                <Label
                  htmlFor={category._id}
                  className="text-gray-500 font-light"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>



    </div>
  );
}
