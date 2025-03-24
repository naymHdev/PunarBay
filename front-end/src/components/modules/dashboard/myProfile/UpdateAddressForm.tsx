"use client";

import PBImageUploader from "@/components/ui/core/PBImageUploader";
import ImagePreviewer from "@/components/ui/core/PBImageUploader/ImagePreviewer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { updateProfile } from "@/services/users";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { bdDivisions } from "../../listings/filterSidebar";

const UpdateAddressForm = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const { user } = useUser();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "Naym Hossen",
      profileImage: "",
      address: {
        street: "Housing Socity, Road-11",
        city: "Dhaka",
        state: "NY",
        postalCode: "1207",
        country: "Bangladesh",
      },
      phoneNo: "01770064053",
      gender: "Male",
      dateOfBirth: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("modifiedData__", data.address);

    if (!user?._id) {
      toast.error("User ID is missing!");
      return;
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (imageFiles.length > 0) {
      formData.append("profileImage", imageFiles[0] as File);
    }

    // console.log("modifiedData__", formData);

    try {
      const res = await updateProfile(user?._id!, formData);
      // console.log("update Profile", res.data.address);

      if (res.success) {
        toast.success(res.message);
        router.push("/user/my-account");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div>
          <h2 className=" text-3xl font-semibold">
            Update or Add Your Profile
          </h2>
        </div>
        <div className=" w-full border-b border-neutral-300 py-4" />
        <div className=" mt-6">
          <h3 className=" text-2xl font-medium">
            Change your address details if you need!
          </h3>
        </div>
      </div>

      {/* Update profile address form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-5 border-2 border-gray-200 bg-white rounded-xl flex-grow p-10">
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <div className="flex justify-between items-center border-t border-b py-3 my-5">
                  <p className="text-primary text-xl">Profile Image</p>
                </div>
                {imagePreview.length > 0 ? (
                  <ImagePreviewer
                    setImageFiles={setImageFiles}
                    imagePreview={imagePreview}
                    setImagePreview={setImagePreview}
                    className="mt-8"
                  />
                ) : (
                  <div className="mt-8">
                    <PBImageUploader
                      setImageFiles={setImageFiles}
                      setImagePreview={setImagePreview}
                      label="Upload Image"
                    />
                  </div>
                )}
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Street</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your State</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Postal Code</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Country</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <FormField
                  control={form.control}
                  name="phoneNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Phone Number</FormLabel>
                      <FormControl className="w-full">
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Your Gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className=" bg-gray-100">
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your City</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Your City" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className=" bg-gray-100">
                          {bdDivisions?.map((place, index) => (
                            <SelectItem key={index} value={place}>
                              {place}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl className="w-full">
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-gray-100"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) =>
                              field.onChange(date ? date.toISOString() : "")
                            }
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 w-full bg-[#1A78BA] text-white hover:bg-[#1A78BA] hover:cursor-pointer"
            >
              {isSubmitting ? "Updating...." : "Update Profile"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UpdateAddressForm;
