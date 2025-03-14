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
import { Filter } from "lucide-react";
import { bdDivisions } from ".";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterSidebar() {
  const [price, setPrice] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false); // Manage sidebar visibility

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
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <Button
        onClick={() => setSidebarVisible(!sidebarVisible)}
        size="sm"
        className="text-white bg-[#1575B9] hover:bg-[#1575B9] mb-6 sm:hidden"
      >
        {sidebarVisible ? (
          <>
            <Filter /> Hide
          </>
        ) : (
          <>
            <Filter /> Filters
          </>
        )}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transition-all duration-300 transform ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:block sm:w-80 sm:translate-x-0 sm:h-auto sm:bg-transparent sm:overflow-visible`}
      >
        <div className="p-6 relative h-full overflow-y-auto">
          <Button
            onClick={() => setSidebarVisible(false)}
            size="sm"
            variant="outline"
            className="absolute top-4 right-4 text-[#1575B9] hover:text-white hover:border-none  hover:bg-red-600"
          >
            X
          </Button>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#1575B9]">Filter</h2>
            {searchParams.toString().length > 0 && (
              <Button
                onClick={() => {
                  router.push(`${pathname}`, { scroll: false });
                }}
                size="sm"
                className="text-white bg-[#1575B9] hover:bg-[#1575B9] ml-5"
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
          {/* Product Types */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Product Category</h2>
            {!isLoading && (
              <RadioGroup className="space-y-2">
                {categories?.map((category: { _id: string; name: string }) => (
                  <div
                    key={category._id}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      onClick={() =>
                        handleSearchQuery("categories", category._id)
                      }
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

          {/* Product Divisions */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Product Location</h2>
            <Select
              onValueChange={(value) => handleSearchQuery("location", value)}
            >
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
        </div>
      </div>
    </div>
  );
}
