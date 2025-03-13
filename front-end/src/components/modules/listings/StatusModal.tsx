"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeListingStatus } from "@/services/listings";
import { toast } from "sonner";
import { useState } from "react";

const StatusModal = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      status: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const status = data.status as string;

    try {
      const res = await changeListingStatus(id, status);
      // console.log("Status updated:", res);

      if (res.success) {
        toast.success(res.message);
        setOpen(false);
      } else {
        toast.error(res.message);
        setOpen(false);
      }
    } catch (error: any) {
      return Error(error);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#1575B9] hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg">
          Status
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>
            Are you absolutely sure you sold your product?
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-5"
          >
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-200">
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="sold">Sold</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#1575B9] text-white hover:bg-blue-600 hover:cursor-pointer"
            >
              Update
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default StatusModal;
